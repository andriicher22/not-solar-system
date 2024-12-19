import * as THREE from "three";

export default function createLight() {
  const light = new THREE.PointLight(0xffffff, 8000, 0, 1.7);
  light.position.set(0, 0, 0);
  return light;
}
