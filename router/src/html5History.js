import History from "./history";

export default class Html5History extends History {

    constructor() {
        super();

        this.initEvent();
    }

    initEvent() {
        window.addEventListener('popstate', this.handleStateChange.bind(this));
    }

    push(path) {
        history.pushState({path: path}, null, path);
    }

    replace(path) {
        history.replaceState({path: path}, null, path);
    }

    back() {
        window.history.back();
    }

    go(n) {
        window.history.go(n);
    }

    handleStateChange() {
        this.cb && this.cb(this.getCurrent());
    }

    getCurrent() {
        let path = window.location.pathname;
        return (path || '/') + window.location.search + window.location.hash;
    }

}