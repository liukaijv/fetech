import TimerWheel from './index'

async function wait(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, second * 1000)
    })
}

test("test", async () => {

    let timer = new TimerWheel(60);

    timer.add({id: 1})

    timer.on('tick', elements => {
        console.log(elements);
        console.log(timer.currentIndex)
    })

    setInterval(() => {
        timer.tick()
    }, 1000)

    await wait(5)

})