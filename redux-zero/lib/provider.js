"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
;
function propsValidation(props, propName, componentName) {
    if (typeof props === "object") {
        return null;
    }
    return new Error(`Invalid prop ${propName} supplied to ${componentName}`);
}
exports.propsValidation = propsValidation;
class Provider extends React.Component {
    getChildContext() {
        const { store } = this.props;
        return { store };
    }
    render() {
        const { children } = this.props;
        return React.Children.only(children);
    }
}
Provider.childContextTypes = {
    store: propsValidation
};
exports.default = Provider;
