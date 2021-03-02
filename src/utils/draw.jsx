class DrawUtils {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    Circle(posX, posY, radius, color) {
        // draw basic circle
        this.ctx.beginPath();
        this.ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    hitCircle(posX, posY, radius, ar_dist) {

        // ar_dist will likely change 

        // Draw approach circle
        this.Circle(posX, posY, radius * ar_dist, "#ffffff");
        this.Circle(posX, posY, radius * (ar_dist - 0.05), "#26304F");

        // Draw main circle
        this.Circle(posX, posY, radius, "#425FB0");
        this.Circle(posX, posY, radius * 0.9, "#26304F");
        this.Circle(posX, posY, radius * 0.85, "#494949");
        this.Circle(posX, posY, radius * 0.75, "#26304F");

        
    }
    
}

export default DrawUtils;