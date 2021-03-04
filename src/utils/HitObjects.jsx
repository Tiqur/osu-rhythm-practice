class Circle {
    constructor(time) {
      this.time = time;
      this.hit = null;
    }
}


class Slider {
    constructor(time, endTime) {
        this.time = time;
        this.endTime = endTime;
        this.hit = null;
    }
}

export { Circle, Slider };