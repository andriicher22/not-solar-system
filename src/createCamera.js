import * as THREE from "three";

export default function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.3,
    1200
  );
  camera.position.setZ(200);
  camera.position.setY(45);

  return camera;
}
