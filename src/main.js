import "./style.css";
import * as THREE from "three";
import { InteractionManager } from "three.interactive";
import Planet from "./classes/Planet.js";
import Sun from "./classes/Sun.js";
import createRenderer from "./createRenderer.js";
import createScene from "./createScene.js";
import createCamera from "./createCamera";
import createLight from "./createLight.js";
import createControls from "./createControls.js";
import animate from "./animate.js";

const textureLoader = new THREE.TextureLoader();
const renderer = createRenderer();
const scene = createScene(textureLoader);
const camera = createCamera();
const controls = createControls(camera, renderer);

renderer.render(scene, camera);

const pointLight = createLight();
scene.add(pointLight);

const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);

// Planet object creation
const planets = {
  sun: new Sun(20, 32, 32, "img/sun.jpg", textureLoader),
  mercury: new Planet(
    3,
    32,
    32,
    0.01,
    0,
    40,
    0.08,
    "img/mercury.jpg",
    textureLoader
  ),
  venus: new Planet(
    4.5,
    32,
    32,
    0.003,
    177,
    55,
    0.06,
    "img/venus.jpg",
    textureLoader
  ),
  earth: new Planet(
    5,
    32,
    32,
    0.007,
    23.4,
    75,
    0.05,
    "img/earth.jpg",
    textureLoader
  ),
  mars: new Planet(
    4,
    32,
    32,
    0.007,
    25,
    95,
    0.04,
    "img/mars.jpg",
    textureLoader
  ),
  jupiter: new Planet(
    15,
    32,
    32,
    0.04,
    3,
    130,
    0.02,
    "img/jupiter.jpg",
    textureLoader
  ),
  saturn: new Planet(
    12,
    32,
    32,
    0.038,
    27,
    170,
    0.016,
    "img/saturn.jpg",
    textureLoader
  ),
  uranus: new Planet(
    8,
    32,
    32,
    0.006,
    98,
    200,
    0.012,
    "img/uranus.jpg",
    textureLoader
  ),
  neptune: new Planet(
    7.5,
    32,
    32,
    0.005,
    28,
    230,
    0.01,
    "img/neptune.jpg",
    textureLoader
  ),
};

//Adding event listeners and adding object ot scene
for (const [name, planet] of Object.entries(planets))  {
  interactionManager.add(planet.meshObject)
  scene.add(planet.meshObject, planet.axisLine);
  planet.meshObject.addEventListener("click", (event) => {
    planet.motionEngine.increaseSpeed(2);
    console.log("My name is: ", name, "Please don't touch me");
  });
}

// Animating function
animate(() => {
  for (const object of Object.values(planets)) {
    object.updatePosition();
  }
  controls.update();
  interactionManager.update();
  renderer.render(scene, camera);
});
