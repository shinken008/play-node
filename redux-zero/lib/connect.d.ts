import * as React from "react";
import { propsValidation } from "./provider";
import { Store } from "./store";
declare type mapToProps<S> = (state: S, ownProps?: object) => object;
export declare function shallowEqual(a: object, b: object): boolean;
export declare type Action<S> = (state: S, ...args: any[]) => Partial<S>;
export declare function bindActions<S, T extends {
    [key: string]: Action<S>;
}>(actions: ((store: Store<S>, ownProps: any) => T) | T, store: Store<S>, ownProps?: object): {
    [K in keyof T]: (...args: any[]) => Promise<void> | void;
};
export declare class Connect extends React.Component<any> {
    static contextTypes: {
        store: typeof propsValidation;
    };
    unsubscribe: any;
    state: any;
    actions: {
        [x: string]: (...args: any[]) => void | Promise<void>;
    };
    componentWillMount(): void;
    componentWillUnmount(): void;
    getProps(): any;
    getActions(): {
        [x: string]: (...args: any[]) => void | Promise<void>;
    };
    update: () => void;
    render(): any;
}
export default function connect<S = any>(mapToProps?: mapToProps<S>, actions?: {}): (Child: any) => {
    new (props: Readonly<any>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<any>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: any, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<any>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextType?: React.Context<any> | undefined;
};
export {};
