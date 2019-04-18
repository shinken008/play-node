export interface Store<S = any> {
    middleware(...args: any[]): void;
    setState(f: ((state: S) => Partial<S>) | Partial<S>): void;
    subscribe(f: Function): () => void;
    getState(): S;
    reset(): void;
}
declare function createStore<S extends object = any>(): Store<Partial<S>>;
declare function createStore<S extends object = any>(initialState?: S, middleware?: any): Store<S>;
declare function createStore<S extends object = any>(initialState?: Partial<S>, middleware?: any): Store<Partial<S>>;
export default createStore;
