class DrawUtils {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    Circle(posX, posY, radius, ac_width, color) {
        // draw basic circle
        this.ctx.beginPath();
        this.ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false);
        this.ctx.strokeStyle  = color;
        this.ctx.lineWidth = ac_width;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    hitCircle(circleTime, posY, radius, AR, gameTime) {
        const preempt = AR == 5 ? 1200 : 1200 + (AR > 5 ? -750 : 600) * (AR + (AR > 5 ? -5 : 5)) / 5;
        const fadein = AR == 5 ? 800 : 800 + (AR > 5 ? -500 : 400) * (AR + (AR > 5 ? -5 : 5)) / 5;
       // let approachCircle = 0;
       // console.log(preempt, circleTime)
        //if (gameTime > preempt + circleTime) approachCircle = 10;
        // console.log(circleTime-gameTime)
        // Draw main circle
        this.Circle(circleTime-gameTime, posY, radius, 9, "#425FB0");
        this.Circle(circleTime-gameTime, posY, radius * 0.85, 12, "#494949");
        
        // if (gameTime >= circleTime && gameTime < circleTime + preempt) {
        //     // Draw approach circle
        //     this.Circle(circleTime-gameTime, posY, radius + 20, 5, "#979FB6");
        // }

        
    }
    
}

export default DrawUtils;