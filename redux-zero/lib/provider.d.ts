import * as React from "react";
import { Store } from "./store";
export interface Props<S = any> {
    store: Store<S>;
    children: JSX.Element[] | JSX.Element;
}
export declare function propsValidation(props: object, propName: string, componentName: string): Error | null;
export default class Provider<S = any> extends React.Component<Props<S>> {
    static childContextTypes: {
        store: typeof propsValidation;
    };
    getChildContext(): {
        store: Store<S>;
    };
    render(): JSX.Element | (JSX.Element & string) | (JSX.Element & number) | (JSX.Element & false) | (JSX.Element & true) | (JSX.Element & React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | (JSX.Element & React.ReactPortal);
}
