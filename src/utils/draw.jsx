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

    hitCircle(posX, posY, radius, ar_dist) {



        // Draw main circle
        this.Circle(posX, posY, radius, 9, "#425FB0");
        this.Circle(posX, posY, radius * 0.85, 12, "#494949");
        
        // ar_dist will likely change 
        // Draw approach circle
        this.Circle(posX, posY, radius * ar_dist, 5, "#979FB6");
        
    }
    
}

export default DrawUtils;