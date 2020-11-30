export function urlParam(params) {
    return Object.keys(params).reduce((prev, cur, index) => {
        prev += `${index === 0 ? '' : '&'}${cur}=${params[cur]}`
        return prev;
    }, '')
}

/**
 * 常规下载
 * @param url
 * @param params
 * @param fileName
 * @returns {Promise<unknown>}
 */
export function download(url, params, fileName) {
    if (typeof params == 'string') {
        url = url + '?' + params;
    } else {
        url += urlParam(params)
    }

    return new Promise((resolve) => {
        let aEle = document.createElement('a');
        fileName = fileName || '' + Date.now();
        aEle.download = fileName;
        aEle.href = url;
        aEle.target = '_blank'
        document.body.appendChild(aEle)

        setTimeout(() => {
            aEle.click();
            document.body.removeChild(aEle);
            aEle = null;
            resolve();
        }, 200)
    })
}

/**
 * 返回的是blob
 * @param blob
 * @param fileName
 * @returns {Promise<unknown>}
 */
export function downloadBlob(blob, fileName) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = (e) => {
            let aEle = document.createElement('a');
            fileName = fileName || '' + Date.now();
            aEle.download = fileName;
            aEle.href = e.target.result;
            aEle.target = '_blank'
            document.body.appendChild(aEle)
            aEle.click();
            document.body.removeChild(aEle);
            aEle = null;
            resolve();
        }
        reader.onerror = (err) => {
            reject(err)
        }
    });
}

function downloadBlob2(blob, fileName) {
    return new Promise((resolve, reject) => {
        let aEle = document.createElement('a');
        fileName = fileName || '' + Date.now();
        aEle.download = fileName;
        let url = URL.createObjectURL(blob);
        aEle.href = url;
        aEle.target = '_blank'
        document.body.appendChild(aEle)
        aEle.click();
        document.body.removeChild(aEle);
        aEle = null;
        window.URL.revokeObjectURL(url);
        resolve();
    });
}

/**
 * 返回的byte流
 * @param bytes
 * @param fileName
 * @returns {Promise<unknown>}
 */
export function downloadBytes(bytes, fileName) {
    let blob = new Blob([bytes]);
    return downloadBlob(blob, fileName);
}

export function base64ToBytes(base64Str) {
    let rawData = window.atob(base64Str);
    let len = rawData.length;
    let buffer = new ArrayBuffer(len);
    let outArr = new Uint8Array(buffer);
    while (--len) {
        outArr[len] = rawData.charCodeAt(len);
    }
    return outArr;
}

/**
 * 返回的是base64
 * @param base64Data
 * @param fileName
 * @returns {Promise<unknown>}
 */
export function downloadBase64(base64Data, fileName) {
    let bytes = base64ToBytes(base64Data);
    return downloadBytes(bytes, fileName);
}

