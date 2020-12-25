import {
    extractParams,
    extractQuery,
    extractPath,
} from "./util";

export class Router {

    constructor(history, renderFun) {

        this.routes = {};
        this.history = history;
        this.renderFun = renderFun;

        this.history.listen(this.handleChange.bind(this));

    }

    add(path, func) {
        this.routes[path] = func;
    }

    push(path, query) {
        this.history.push(path);
        this.exec(query);
    }

    replace(path, query) {
        this.history.replace(path);
        this.exec(query);
    }

    back() {
        this.history.back();
        this.exec();
    }

    go(n) {
        this.history.go(n);
        this.exec();
    }

    exec(query) {
        let current = this.history.getCurrent();
        let handler = this.getHandler(current);
        let context = {
            path: extractPath(current),
            query: query || extractQuery(current),
            params: extractParams(current),
            render: this.renderFun,
        }
        handler.call(null, context);
    }

    handleChange() {
        this.exec();
    }

    getHandler() {

    }
}