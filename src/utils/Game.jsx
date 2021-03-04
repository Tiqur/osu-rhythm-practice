import { checkMaxIfStatementsInShader } from "pixi.js";

class Game {
    constructor(hitObjects, options, canvas, draw) {
        this.draw = draw;
        this.canvas = canvas;
        this.startTime = false;
        this.hitObjects = hitObjects;
        this.bpm = options.bpm;
        this.hp = options.hp;
        this.ar = options.ar;
        this.od = options.od;
        this.keys = options.keys;
        this.visual_aid = options.visual_aid;
        this.notelock = options.notelock;
        this.mehTime = 200 - 10 * this.od;
        this.goodTime = 140 - 8 * this.od;
        this.greatTime = 80 - 6 * this.od;
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
                    if (o.time-gameTime > 0 && o.time-gameTime < this.canvas.width + 90 && !o.score) {
                        this.draw.hitCircle(o.time, this.canvas.height / 2, 90, this.ar, gameTime, this);
                    }
                    break;
                case "Slider":
                    if (o.endTime-gameTime > 0 && o.time-gameTime < this.canvas.width + 90 && !o.score) {
                        this.draw.slider(o.time, o.endTime, this.canvas.height / 2, 90, this.ar, gameTime, this);
                    }
                    break;
            }
            
            // Miss
            if (o.time - gameTime < -this.mehTime && !o.score) {
                o.score = "miss";
                console.log("miss");
            }
        })



    }

    getScore = (acc) => {
        // Return correct score value
        switch(true) {
            case acc <= this.mehTime && acc > this.goodTime:     // Meh
                return "meh";
            case acc <= this.goodTime && acc > this.greatTime:   // Good
                return "good";
            case acc <= this.greatTime:                           // Great
                return "great";
        }
    }

    hit(time) {
        const hitTime = time - this.startTime;
        
        // TODO: optimize this
        for (let i = 0; i < this.hitObjects.length; i++) {
            let obj = this.hitObjects[i];
            
            // Hit time relative to the object
            const r_hitTime = hitTime - obj.time;

            // Absolute value of actual hit-time
            if (hitTime <= obj.time + this.mehTime && hitTime >= obj.time - this.mehTime && !obj.score) {
                this.hitObjects[i].score = this.getScore(Math.abs(r_hitTime))
                console.log(obj.score)
                break;
            } else if (this.notelock) {
                let prev_note = i > 0 ? this.hitObjects[i-1].time + this.mehTime : 0;
                if (prev_note < hitTime) { // If click is after previous note
                    // Notelock
                    console.log("Shake")
                }     
            }
        }
    }
}

export default Game;