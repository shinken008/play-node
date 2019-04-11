import * as React from "react";

import { Store } from "./store";

export interface Props<S = any> {
  store: Store<S>;
  children: JSX.Element[] | JSX.Element;
};


export function propsValidation(
  props: object,
  propName: string,
  componentName: string
) {
  if (typeof props === "object") {
    return null;
  }
  return new Error(`Invalid prop ${propName} supplied to ${componentName}`);
}

export default class Provider<S = any> extends React.Component<Props<S>> {
  static childContextTypes = {
    store: propsValidation
  };
  getChildContext() {
    const { store } = this.props;
    return { store };
  }
  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}