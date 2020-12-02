import {h} from './index'

describe("test vdom", () => {

    let realDom = `
    <div id="container" class="container">
      <input value="foo" type="text">
      <a href="/bar">aaa</a>
    </div>
    `
    test('h', () => {
        let vdom = h(
            'div',
            {
                id: 'container',
                class: 'container'
            },
            h(
                'input',
                {
                    value: 'foo',
                    type: 'text'
                },
            ),
            h(
                'a',
                {
                    href: '/bar',
                },
                'aaa'
            )
        )

        console.log(JSON.stringify(vdom));
    })

})