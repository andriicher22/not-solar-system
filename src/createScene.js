import * as THREE from "three";

function getBackgroundSphere(textureLoader) {
  return new THREE.Mesh(
    new THREE.SphereGeometry(800, 32, 32),
    new THREE.MeshBasicMaterial({
      map: textureLoader.load("img/milky.jpg"),
      side: THREE.BackSide,
      fog: false,
    })
  );
}

export default function createScene(textureLoader) {
  const scene = new THREE.Scene();
  const backgroundSphere = getBackgroundSphere(textureLoader);
  backgroundSphere.encoding = THREE.sRGBEncoding;
  scene.backgroundIntensity = 0.8;
  scene.add(backgroundSphere);
  return scene;
}
