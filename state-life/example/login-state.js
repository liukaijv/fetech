import State from "../src/state";

export default class LoginState extends State {
    enter() {
        console.log('enter LoginState')
    }
    update() {
        console.log("update LoginState")
    }
    exit() {
        console.log("exit LoginState")
    }
}