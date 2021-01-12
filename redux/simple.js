const validAction = (action) => {
    if (!action && typeof action !== 'object' || Array.isArray(action)) {
        throw new Error("action error")
    }
    if (action.type === undefined) {
        throw new Error("action must have type field")
    }
}

const createStore = (reducer) => {
    let state = undefined

    const reducerSet = {};
    const subscribers = [];

    function dispatch(action) {
        validAction(action)
        state = reducer(state, action)
        subscribers.forEach(handler => {
            handler()
        })
    }

    function getState() {
        return state
    }

    function subscribe(handler) {
        subscribers.push(handler);
        return function unsubscribe() {
            const index = subscribers.indexOf(handler);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
        }
    }

    const store = {
        dispatch,
        getState,
        subscribe,
    }

    return store;
}