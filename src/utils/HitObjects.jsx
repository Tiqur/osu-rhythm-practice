class Circle {
    constructor(time) {
      this.time = time;
      this.score = null;
      this.accuracy = null;
    }
}


class Slider {
    constructor(time, endTime) {
        this.time = time;
        this.endTime = endTime;
        this.score = null;
        this.accuracy = null;
    }
}

export { Circle, Slider };
