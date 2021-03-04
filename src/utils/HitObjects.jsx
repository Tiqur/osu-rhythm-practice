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
        this.startScore = null; // beginning hitcircle
        this.score = null;      // final score based on startScore
    }
}

export { Circle, Slider };