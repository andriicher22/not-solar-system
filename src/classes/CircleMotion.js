import * as THREE from "three";

export class CircleMotion {
  #x;
  #z;
  #speed;
  #radius;
  #angle;

  constructor(speed, radius, x, z) {
    this.#speed = speed;
    this.#radius = radius;
    this.#x = x;
    this.#z = z;
    // Calculate initial angle based on position
    this.#angle = Math.atan2(z, x);
  }

  static createWithRandomPosition(speed, radius) {
    const randomAngle = Math.random() * Math.PI * 2;
    const x = Math.cos(randomAngle) * radius;
    const z = Math.sin(randomAngle) * radius;
    return new CircleMotion(speed, radius, x, z);
  }

  move() {
    // Update angle for circular motion
    this.#angle += this.#speed / 10;
    // Calculate new positions using angle
    this.#x = Math.cos(this.#angle) * this.#radius;
    this.#z = Math.sin(this.#angle) * this.#radius;
  }

  increaseSpeed(int){
    this.#speed = this.#speed * int;
  }

  lineGenerator() {
    const points = [];
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 1,
      fog: true,
      opacity: 0.5
    });
    for (let angle = 0; angle <= Math.PI * 2; angle += Math.PI / 180) {
      points.push(
        new THREE.Vector3(
          Math.cos(angle) * this.#radius,
          0,
          Math.sin(angle) * this.#radius
        )
      );
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geometry, material);
  }

  get positionX() {
    return this.#x;
  }

  get positionZ() {
    return this.#z;
  }

  get speed(){
    return this.#speed;
  }

  set speed(number){
    this.#speed = number;
  }
}
