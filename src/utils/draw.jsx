class DrawUtils {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    Circle(posX, posY, radius, ac_width, color) {
        // draw basic circle
        this.ctx.beginPath();
        this.ctx.arc(posX+125, posY, radius, 0, 2 * Math.PI, false);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = ac_width;
        this.ctx.closePath();
        this.ctx.stroke();
    }

    Line(posX1, posY1, posX2, posY2) {
        // draw basic line
        this.ctx.beginPath();
        this.ctx.moveTo(posX1, posY1);    
        this.ctx.lineTo(posX2, posY2);
        this.ctx.closePath();  
        this.ctx.stroke();  
    }

    Arcs(sliderStartTime, sliderEndTime, posY, radius, gameTime) {
        this.ctx.strokeStyle = "#494949";
        this.ctx.lineWidth = 9;
        this.ctx.beginPath();
        this.ctx.arc(sliderEndTime-gameTime+radius*1.5-12, posY, radius, 1.5 * Math.PI, 0.5 * Math.PI);
        this.ctx.stroke();  
        this.ctx.beginPath();
        this.ctx.arc(sliderStartTime-gameTime+radius*1.5-12, posY, radius, 0.5 * Math.PI, 1.5 * Math.PI);
        this.ctx.stroke();  
    }


    hitCircle(circleTime, posY, radius, AR, gameTime) {
        // Draw main circle
        this.Circle(circleTime-gameTime, posY, radius, 9, "#425FB0");
        this.Circle(circleTime-gameTime, posY, radius * 0.85, 12, "#494949");

        const preempt = AR == 5 ? 1200 : 1200 + (AR > 5 ? -750 : 600) * (AR + (AR > 5 ? -5 : 5)) / 5;
        const fadein = AR == 5 ? 800 : 800 + (AR > 5 ? -500 : 400) * (AR + (AR > 5 ? -5 : 5)) / 5;



        // Draw approach circle
        if (circleTime-gameTime < preempt) {
            const diameter = radius * 2;
            const ld = diameter * 3.0;
            const difference = circleTime - gameTime;        
            let ar_radius = Math.round((diameter + (ld - diameter) * (difference < preempt + fadein && difference > 0 ? difference / (preempt + fadein) : 1)) / 2);
            if (ar_radius == diameter+radius) ar_radius = 0;
            // TODO
            const alpha = 1.0
            
            this.Circle(circleTime-gameTime, posY, ar_radius, 5, `rgba(151, 159, 182, ${alpha})`);
        }
    }

    slider(sliderStartTime, sliderEndTime, posY, radius, AR, gameTime) {  
        this.Arcs(sliderStartTime, sliderEndTime, posY, radius, gameTime);
        this.Line(sliderStartTime-gameTime+radius*1.5-12, posY-radius, sliderEndTime-gameTime+radius*1.5, posY-radius);
        this.Line(sliderStartTime-gameTime+radius*1.5-12, posY+radius, sliderEndTime-gameTime+radius*1.5, posY+radius);
        if (sliderStartTime-gameTime < 0) sliderStartTime = gameTime;
        if (sliderStartTime > sliderEndTime) sliderStartTime = sliderEndTime;
        this.hitCircle(sliderStartTime, posY, radius, AR, gameTime);
    }


    
}

export default DrawUtils;
