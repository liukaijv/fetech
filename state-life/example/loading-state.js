import State from "../src/state";

export default class LoadingState extends State {
    enter() {
        console.log('enter LoadingState')
    }
    update() {
        console.log("update LoadingState")
    }
    exit() {
        console.log("exit LoadingState")
    }
}