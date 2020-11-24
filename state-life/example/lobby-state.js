import State from "../src/state";

export default class LobbyState extends State {
    enter() {
        console.log('enter LobbyState')
    }

    update() {
        console.log("update LobbyState")
    }

    exit() {
        console.log("exit LobbyState")
    }
}