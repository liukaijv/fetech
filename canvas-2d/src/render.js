import {stage} from "./index"

export default class Render {

    constructor(ctx, container) {

        window.requestAnimationFrame(loop);

        function loop() {
            ctx.save();
            ctx.clearRect(0, 0, container.width, container.height);
            stage.render(ctx);
            ctx.restore();
            window.requestAnimationFrame(loop);
        }
    }
}