import * as THREE from "three";
import CelestialObject from "./CelestialObject.js";

export default class Sun extends CelestialObject {
  constructor(radius, widthSegment, heightSegment, texture, textureLoader) {
    super(radius, widthSegment, heightSegment, 0, texture);
    this.meshObject = new THREE.Mesh(
      new THREE.SphereGeometry(
        this.radius,
        this.heightSegment,
        this.widthSegment
      ),
      new THREE.MeshBasicMaterial({
        map: textureLoader.load(this.texture),
      })
    );
    this.widthSegment;
    this.axisLine = new THREE.Line();
  }
}

