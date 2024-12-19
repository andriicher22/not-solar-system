import * as THREE from "three";
import { CircleMotion } from "./CircleMotion.js";
import CelestialObject from "./CelestialObject.js";

export default class Planet extends CelestialObject {
  #axisRadius;
  #speed;
  #motionEngine;

  constructor(
    radius,
    widthSegment,
    heightSegment,
    rotationSpeed,
    rotationAngle,
    axisRadius,
    speed,
    texture,
    textureLoader
  ) {
    super(radius, widthSegment, heightSegment, rotationSpeed, texture);

    this.#axisRadius = axisRadius;
    this.#speed = speed;
    this.#motionEngine = CircleMotion.createWithRandomPosition(this.#speed, this.#axisRadius);
    this.#axisRadius = axisRadius;
    this.meshObject = new THREE.Mesh(
      new THREE.SphereGeometry(
        this.radius,
        this.heightSegment,
        this.widthSegment
      ),
      new THREE.MeshStandardMaterial({
        map: textureLoader.load(this.texture),
      })
    );
    // Rotation angle
    this.meshObject.rotation.z = rotationAngle * (Math.PI / 180);
    // Axis line
    this.axisLine = this.#motionEngine.lineGenerator();
  }

  updatePosition() {
    this.#motionEngine.move();
    this.meshObject.position.setX(this.#motionEngine.positionX);
    this.meshObject.position.setZ(this.#motionEngine.positionZ);
    this.meshObject.rotation.y += this.rotationSpeed;
  }

  get speed(){
    return this.#speed;
  }

  set speed(object){
    this.#speed = object;
  }

  get motionEngine(){
    return this.#motionEngine;
  }
}
