class Circle {
    constructor(time) {
      this.time = time;
    }

    draw() {
        console.log("Circle")
    }
}


class Slider {
    constructor(time, endTime) {
        this.time = time;
        this.endTime = endTime;
    }

    draw() {
        console.log("Slider")
    }
}

export { Circle, Slider };