import * as THREE from "three";

export default function createRenderer() {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    powerPreference: "high-performance",
    antialias: false,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  return renderer;
}
