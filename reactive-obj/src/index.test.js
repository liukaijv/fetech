import Reactive from './index'

test('test', () => {

    let data$ = Reactive.create({
        foo: 1,
        bar: {
            name: "lily",
        }
    })

    let sub1 = data$.subscribe(() => data$.foo, (newVal, oldVal) => {
        console.log('foo', newVal, oldVal);
    })

    let sub2 = data$.subscribe(() => data$.bar.name, (newVal, oldVal) => {
        console.log('bar.name', newVal, oldVal);
    })

    let sub3 = data$.subscribe(() => data$.foo, (newVal, oldVal) => {
        console.log('foo3', newVal, oldVal);
    }, true)

    data$.foo = 2;
    data$.bar.name = 'tim';

    sub1.unsubscribe();

    data$.foo = 3;

    data$.bar.name = 'tom';
})