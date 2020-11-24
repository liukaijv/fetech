import StateManager from '../src/state-manager'
import loadingState from "./loading-state";
import loginState from "./login-state";
import LobbyState from "./lobby-state";

async function wait(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, milliseconds);
    })
}

export default class App {
    async run() {
        let stateManager = new StateManager();

        stateManager.define("loading", loadingState)
        stateManager.define("login", loginState)
        stateManager.define("lobby", LobbyState)

        stateManager.go("loading");

        await wait(200);
        stateManager.go("login")

        await wait(200);
        stateManager.go("lobby")

        await wait(200);
        stateManager.go("login");

        await wait(200);
        stateManager.back();

    }
}