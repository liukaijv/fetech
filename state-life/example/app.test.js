import App from "./app";

test('test app', async () => {
    let app = new App();
    await app.run();
})