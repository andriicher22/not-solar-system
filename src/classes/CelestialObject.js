export default class CelestialObject {
  #radius;
  #widthSegment;
  #heightSegment;
  #rotationSpeed;
  #texture;
  #meshObject;
  #axisLine;

  constructor(radius, widthSegment, heightSegment, rotationSpeed, texture) {
    this.#radius = radius;
    this.#widthSegment = widthSegment;
    this.#heightSegment = heightSegment;
    this.#rotationSpeed = rotationSpeed;
    this.#texture = texture;
  }

  updatePosition() {
    // Children Override if needed
  }

  get radius() {
    return this.#radius;
  }

  get heightSegment() {
    return this.#heightSegment;
  }

  get widthSegment() {
    return this.#widthSegment;
  }

  get texture() {
    return this.#texture;
  }

  get rotationSpeed() {
    return this.#rotationSpeed;
  }

  get meshObject() {
    return this.#meshObject;
  }

  set meshObject(object) {
    this.#meshObject = object;
  }

  get axisLine() {
    return this.#axisLine;
  }
  
  set axisLine(object) {
    this.#axisLine = object;
  }
}
