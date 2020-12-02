/**
 * 生成vnode
 * @param type
 * @param props
 * @param children
 * @returns {{children: *[], type: *, props: *}}
 */
export function h(type, props, ...children) {
    return {
        type,
        props,
        children,
    }
}

export function render(vnode) {

}

export function diff(vnode, oldVnode) {

}

export function patch(root, patches) {

}