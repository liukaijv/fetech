import {urlParam} from "./index";

test('test', () => {

    let queryString = urlParam({foo: 123, bar: 'bar'})
    console.log(queryString)

})