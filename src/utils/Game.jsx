class Game {
    constructor(hitObjects, options, canvas, draw) {
        this.draw = draw;
        this.canvas = canvas;
        this.startTime = false;
        this.hitObjects = hitObjects;
        this.bpm = options.bpm;
        this.hp = options.hp;
        this.ar = options.ar;
        this.keys = options.keys;
        this.notelock = options.notelock;
    }

    render(time) {
        let gameTime = time - this.startTime;
        this.hitObjects.forEach(o => {
            
        // Object type
        const type = o.constructor.name;

        // TODO: optimize this
        // Draw only if within canvas ( for optimization )
        switch (type) {
            case "Circle":
                if (o.time-gameTime > 0 && o.time-gameTime < this.canvas.width + 90 && !o.hit) {
                    this.draw.hitCircle(o.time, this.canvas.height / 2, 90, this.ar, gameTime);
                }
                break;
            case "Slider":
                if (o.endTime-gameTime > 0 && o.time-gameTime < this.canvas.width + 90 && !o.hit) {
                    this.draw.slider(o.time, o.endTime, this.canvas.height / 2, 90, this.ar, gameTime);
                }
                break;
        }
        
        // Miss
        if ((type == "Circle" ? o.time : o.endTime) - gameTime < 0 && !o.hit) {
            o.hit = "miss";
            console.log("miss");
        }
      })



    }

    hit(time) {
        const hitTime = time - this.startTime;

        // TODO: optimize this
        for (let i = 0; i < this.hitObjects.length; i++) {
            let obj = this.hitObjects[i];
            if (hitTime > obj.time - 100 && hitTime < obj.time + 100) {
                obj.hit = "hit";
                console.log("hit");
                break;
            }  
        }
    }
}

export default Game;