/**
 * 节流
 * 单位时间内只响应一次
 */
function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        let context = this;
        if (now - lastTime > delay) {
            fn.call(context, ...args);
            lastTime = now;
        }
    }
}

/**
 * 防抖
 * 单位时间内只执行最后一次
 */
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        let context = this;
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.call(context, ...args);
        }, delay)
    }
}