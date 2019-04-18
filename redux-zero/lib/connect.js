"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const provider_1 = require("./provider");
function shallowEqual(a, b) {
    for (const i in a)
        if (a[i] !== b[i])
            return false;
    for (const i in b)
        if (!(i in a))
            return false;
    return true;
}
exports.shallowEqual = shallowEqual;
function set(store, ret) {
    if (ret != null) {
        if (ret.then)
            return ret.then(store.setState);
        store.setState(ret);
    }
}
function bindActions(actions, store, ownProps) {
    actions = typeof actions === "function" ? actions(store, ownProps) : actions;
    let bound = {};
    for (let name in actions) {
        bound[name] = (...args) => {
            const action = actions[name];
            if (typeof store.middleware === "function") {
                return store.middleware(store, action, args);
            }
            return set(store, action(store.getState(), ...args));
        };
    }
    return bound;
}
exports.bindActions = bindActions;
class Connect extends React.Component {
    constructor() {
        super(...arguments);
        this.state = this.getProps();
        this.actions = this.getActions();
        this.update = () => {
            const mapped = this.getProps();
            if (!shallowEqual(mapped, this.state)) {
                this.setState(mapped);
            }
        };
    }
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
    render() {
        // @ts-ignore
        return this.props.children(Object.assign({ store: this.context.store }, this.state, this.actions));
    }
}
Connect.contextTypes = {
    store: provider_1.propsValidation
};
exports.Connect = Connect;
function connect(mapToProps, actions = {}) {
    return (Child) => class ConnectWrapper extends React.Component {
        render() {
            const { props } = this;
            return (React.createElement(Connect, Object.assign({}, props, { mapToProps: mapToProps, actions: actions }), (mappedProps) => React.createElement(Child, Object.assign({}, mappedProps, props))));
        }
    };
}
exports.default = connect;
