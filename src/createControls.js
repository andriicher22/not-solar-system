import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function createControls(camera, renderer) {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 20;
  controls.maxDistance = 350;
  return controls;
}
