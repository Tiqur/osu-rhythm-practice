class CanvasUtils {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.winResizeHandle();
    }

    drawCanvasBackground = () => {
        this.ctx.fillStyle = "#26304F";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
      
    updateCanvasSize = () => {
        this.canvas.style.width='100%';
        this.canvas.style.height='100%';
        this.canvas.width  = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    winResizeHandle = () => {
        this.updateCanvasSize();
        this.drawCanvasBackground();
    }
}

export default CanvasUtils;