export default  class Vector2 {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }
  
    addScalar(s) {
      this.x += s;
      this.y += s;
      return this;
    }
  
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      return this;
    }
  
    divideScalar(s) {
      this.x /= s;
      this.y /= s;
      return this;
    }
  
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      return this;
    }
  
    multiplyScalar(s) {
      this.x *= s;
      this.y *= s;
      return this;
    }
  
    subtract(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
  
    subtractScalar(s) {
      this.x -= s;
      this.y -= s;
      return this;
    }
  
    negate() {
      return this.multiplyScalar(-1);
    }
  
    normalize() {
      return this.divideScalar(this.getMagnitude());
    }
  
    set(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
  
    clone() {
      return new Vector2(this.x, this.y);
    }
  
    getDirection() {
      return Math.atan2(this.y, this.x);
    }
  
    setDirection(direction) {
      const magnitude = this.getMagnitude();
  
      this.x = Math.cos(direction) * magnitude;
      this.y = Math.sin(direction) * magnitude;
  
      return this;
    }
  
    getDot(v) {
      return (this.x * v.x) + (this.y * v.y);
    }
  
    getMagnitude() {
      return Math.sqrt(this.getMagnitudeSquared());
    }
  
    getMagnitudeSquared() {
      return (this.x * this.x) + (this.y * this.y);
    }
  
    static fromPolar(direction, magnitude) {
      const x = Math.cos(direction) * magnitude;
      const y = Math.sin(direction) * magnitude;
  
      return new Vector2(x, y);
    }
  
    static fromScalar(s) {
      return new Vector2(s, s);
    }
  
    static random() {
      return new Vector2(Math.random(), Math.random());
    }
  
    static lerp(a, b, t) {
      return b.clone().subtract(a).multiplyScalar(t).add(a);
    }
  
    static isVector2(v) {
      return v instanceof Vector2;
    }
  }
  