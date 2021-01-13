import Fsm from './index'

test('test', () => {

    let events = {
        WARN: 'WARN',
        STOP: 'STOP',
        READY: 'READY',
        GO: 'GO',
    }

    let states = {
        GREEN: 'GREEN',
        YELLOW: 'YELLOW',
        RED: 'RED',
    }

    let transitions = [
        {
            event: events.WARN, from: states.GREEN, to: states.YELLOW,
        },
        {
            event: events.STOP, from: states.YELLOW, to: states.RED,
        },
        {
            event: events.READY, from: states.RED, to: states.YELLOW,
        },
        {
            event: events.GO, from: states.YELLOW, to: states.GREEN,
        }
    ]

    function onEvent(from, to) {
        console.log(`from: ${from} to: ${to}`)
    }

    let fsm = new Fsm(states.RED, transitions, onEvent);

    console.log(fsm.can(events.READY))

    fsm.go(events.READY)
    console.log(fsm.getState())

    fsm.go(events.GO)
    console.log(fsm.getState())

})