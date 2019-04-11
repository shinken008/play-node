import * as React from "react";

import { propsValidation } from "./provider";
import { Store } from "./store";
type mapToProps<S> = (state: S, ownProps?: object) => object;

export function shallowEqual(a: object, b: object) {
  for (const i in a) if (a[i] !== b[i]) return false;
  for (const i in b) if (!(i in a)) return false;
  return true;
}

function set(store: Store, ret: any): Promise<void> | void {
  if (ret != null) {
    if (ret.then) return ret.then(store.setState);
    store.setState(ret);
  }
}


export type Action<S> = (state: S, ...args: any[]) => Partial<S>;

export function bindActions<S, T extends { [key: string]: Action<S> }>(
  actions: ((store: Store<S>, ownProps) => T) | T,
  store: Store<S>,
  ownProps?: object
): { [K in keyof T]: (...args: any[]) => Promise<void> | void } {
  actions = typeof actions === "function" ? actions(store, ownProps) : actions;

  let bound: { [key: string]: (...args: any[]) => Promise<void> | void } = {};
  for (let name in actions) {
    bound[name] = (...args: any[]) => {
      const action = (actions as T)[name];

      if (typeof store.middleware === "function") {
        return store.middleware(store, action, args);
      }

      return set(store, action(store.getState(), ...args));
    };
  }

  return bound as { [K in keyof T]: (...args: any[]) => Promise<void> | void };
}

export class Connect extends React.Component<any> {
  static contextTypes = {
    store: propsValidation
  };
  unsubscribe: any;
  state = this.getProps();
  actions = this.getActions();
  componentWillMount() {
    this.unsubscribe = this.context.store.subscribe(this.update);
  }
  componentWillUnmount() {
    this.unsubscribe(this.update);
  }
  getProps() {
    const { mapToProps } = this.props;
    const state = (this.context.store && this.context.store.getState()) || {};
    return mapToProps ? mapToProps(state, this.props) : state;
  }
  getActions() {
    const { actions } = this.props;
    return bindActions(actions, this.context.store, this.props);
  }
  update = () => {
    const mapped = this.getProps();
    if (!shallowEqual(mapped, this.state)) {
      this.setState(mapped);
    }
  };
  render() {
    // @ts-ignore
    return this.props.children({
      store: this.context.store,
      ...this.state,
      ...this.actions
    });
  }
}

export default function connect<S = any>(
  mapToProps?: mapToProps<S>,
  actions = {}
) {
  return (Child: any) =>
    class ConnectWrapper extends React.Component<any> {
      render() {
        const { props } = this;

        return (
          <Connect {...props} mapToProps={mapToProps} actions={actions}>
            {(mappedProps: object) => <Child {...mappedProps} {...props} />}
          </Connect>
        );
      }
    };
}