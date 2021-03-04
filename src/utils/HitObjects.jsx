class Circle {
    constructor(time) {
      this.time = time;
      this.score = null;
    }
}


class Slider {
    constructor(time, endTime) {
        this.time = time;
        this.endTime = endTime;
        this.score = null;
    }
}

export { Circle, Slider };