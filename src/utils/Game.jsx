import hitNormal from '../assets/hitnormal.mp3'

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
                    if (o.time-gameTime > 0 && o.time-gameTime < this.canvas.width + 90 && o.score != 0) {
                        this.draw.hitCircle(o.time, this.canvas.height / 2, 90, this.ar, gameTime, this);
                    } else if (o.time - gameTime < -this.mehTime && o.score != 0) {
                        o.score = 0;
                        console.log("miss")
                    }
                    break;
                case "Slider":
                    if (o.endTime-gameTime > 0 && o.time-gameTime < this.canvas.width + 90) {  // if within canvas
                        this.draw.slider(o.time, o.endTime, this.canvas.height / 2, 90, this.ar, gameTime, this);
                    } else if (o.time - gameTime < -this.mehTime && o.score != 0) { // Beginning of slider and start / end are not scored yet
                        o.score = 0;
                        console.log("miss")
                    }
                    break;
            }
            
        })



    }

    getScore = (acc) => {
        // Return correct score value
        switch(true) {
            case acc <= this.mehTime && acc > this.goodTime:     // Meh  
                return 50;
            case acc <= this.goodTime && acc > this.greatTime:   // Good
                return 100;
            case acc <= this.greatTime:                          // Great
                return 300;
        }
    }

    hit(time, keyDown) {
        const audio = new Audio(hitNormal);

        // TEMP: Apply user input
        audio.volume = 0.2;

        const hitTime = time - this.startTime;

        // calculte accuracy
        let max_score = this.hitObjects.length * 300;
        let score = 0;
        
        // TODO: optimize this
        for (let i = 0; i < this.hitObjects.length; i++) {
            let obj = this.hitObjects[i];
            const isSlider = obj.constructor.name === "Slider";

            // Hit time relative to the object
            const r_hitTime = hitTime - obj.time;

            const withinThreshold = hitTime <= obj.time + this.mehTime && hitTime >= obj.time - this.mehTime;

            // Absolute value of actual hit-time
            if (keyDown && withinThreshold) {  // Within hit threshold
                if (!this.hitObjects[i].score) audio.play();
                this.hitObjects[i].score = isSlider ? 300 : this.getScore(Math.abs(r_hitTime));
                break;
            } else if (keyDown && hitTime <= obj.time + this.mehTime && isSlider) {  // ( hitting early on a slider will always result in a "Great" )
                this.hitObjects[i].score = 300;
            } else if (keyDown && hitTime > obj.time - this.mehTime) { // ( hitting in the middle of a slider will cause a "good" )
                this.hitObjects[i].score = 100;
            } else if (!keyDown && isSlider) {  // Lift key
                if (hitTime > obj.time - this.mehTime && hitTime <= obj.endTime) { // ( lifting up in the middle of a slider will decrease score value by 1 )
                    this.hitObjects[i].score = (obj.score === 300 ? 100 : 50);
                    score += this.hitObjects[i].score;
                }
            } else if (keyDown && this.notelock) {
                let prev_note = i > 0 ? this.hitObjects[i-1].time + this.mehTime : 0;
                if (prev_note < hitTime) { // If click is after previous note
                    // Notelock
                // console.log("Shake")
                }     
            }
            
            console.log(obj.score)

        }
    }
}

export default Game;
