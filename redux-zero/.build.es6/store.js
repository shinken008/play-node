;
function createStore(initialState = {}, middleware = null) {
    let state = initialState || {};
    const listeners = [];
    function dispatchListeners() {
        listeners.forEach(f => f(state));
    }
    return {
        middleware,
        setState(update) {
            state = Object.assign({}, state, typeof update === "function" ? update(state) : update);
            dispatchListeners();
        },
        subscribe(f) {
            listeners.push(f);
            return () => {
                listeners.splice(listeners.indexOf(f), 1);
            };
        },
        getState() {
            return state;
        },
        reset() {
            state = initialState;
            dispatchListeners();
        }
    };
}
export default createStore;
