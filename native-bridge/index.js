window._nativeCbId = 0;
window._nativeCbs = {};

function isAndroid() {
    let u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}

function isIos() {
    let u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

function js2native(funcName, args = {}, callback) {

    if (typeof args === 'function') {
        callback = args;
        args = {}
    }

    let params = {
        seq: 0,
        args,
    }

    if (callback) {
        let seq = ++_nativeCbId;
        window._nativeCbs[seq] = callback;
    }

    let platform = 'unknown';
    let result;
    let paramsSerialized = JSON.stringify(params);

    if (isAndroid() && window.android && window.android[funcName]) {
        platform = 'android';
        result = window.android[funcName](paramsSerialized)
    } else if (isIos() && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[funcName]) {
        platform = 'ios';
        result = window.webkit.messageHandlers[funcName].postMessage(paramsSerialized)
    }

    console.log(`platform: ${platform}, js2native: ${funcName} params: ${paramsSerialized}`)
    return result;
}

window.native2jsCallback = function (params) {
    if (!params) {
        console.log('handleNative2js params error')
        return;
    }
    if (typeof params === 'string') {
        params = JSON.parse(params);
    }
    let {seq, args, cbName} = params;

    // 有回调id直接调用
    if (seq) {
        let cbFunc = window._nativeCbs[seq];
        cbFunc && cbFunc(args);

        delete window._nativeCbs[seq];
    } else {
        if (cbName) {
            let cbFunc = window[cbName];
            cbFunc && cbFunc(args);
        }
    }
}

/**
 * 同步调用
 * @param funcName
 * @param args
 * @returns {*}
 */
export function call(funcName, args = {}) {
    return js2native(funcName, args);
}

/**
 * 异步调用
 * @param funcName
 * @param args
 * @param callback
 * @returns {*}
 */
export function callAsync(funcName, args = {}, callback) {
    return js2native(funcName, args, callback);
}

/**
 * 注册给native调用的
 * @param funcName
 * @param func
 */
export function register(funcName, func) {
    window[funcName] = func;
}

export function unregister(funcName) {
    delete window[funcName]
}
