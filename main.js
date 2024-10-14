import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { planets } from "./planets";
import { Pane } from "tweakpane";
import { createPlanet, createSatellite } from "./utils";

// Add sphere Geometry
const geometry = new THREE.SphereGeometry(3, 32, 32);

// Load all textures
const sunTexture = new THREE.TextureLoader().load("/textures/sun.jpg");
const backgroundTexture = new THREE.CubeTextureLoader()
  .setPath("/textures/cubeMaps/")
  .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

// Create all materials
const sunMaterial = new THREE.MeshBasicMaterial({
  map: sunTexture,
});

// Create the planets and the sun
const Sun = new THREE.Mesh(geometry, sunMaterial);

// Create a scene
const scene = new THREE.Scene();

// Calculate aspect ratio of camera and renderer
const aspectRatio = window.innerWidth / window.innerHeight;

// Setup Perspective Camera
const camera = new THREE.PerspectiveCamera(35, aspectRatio, 0.0000001, 10000);
camera.position.set(0, 120, 0);


// Create a canvas element
const canvas = document.getElementById("three");

// Create a Renderer object
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
// Set the size of the renderer to the size of the canvas
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Initialize controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.autoRotate = true;

// Initialize and add lighting to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 3);
scene.add(pointLight);

// Add backgroundTexture to scene 
scene.background = backgroundTexture;

// Add planets to the scene
Sun.scale.setScalar(2);
scene.add(Sun);

let planetsMesh = [];
planets.forEach((planet) => {
  const newPlanet = createPlanet(planet, geometry);
  planet.satellites.forEach((satellite) => {
    const newSatellite = createSatellite(satellite, geometry);
    newPlanet.add(newSatellite);
  });
  planetsMesh.push(newPlanet);
  scene.add(newPlanet);
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
});
controls.update();

const renderLoop = () => {
  controls.update();
  planetsMesh.forEach((planet, index) => {
    planet.rotation.y +=  planets[index].speed / 100;
    planet.position.x = Math.sin(planet.rotation.y) * planets[index].distance;
    planet.position.z = Math.cos(planet.rotation.y) * planets[index].distance;
    planet.children.forEach((satellite, satIndex) => {
      satellite.rotation.y += planets[index].satellites[satIndex].speed / 100;
      satellite.position.x =
        Math.sin(satellite.rotation.y) *
        planets[index].satellites[satIndex].distance *
        10;
      satellite.position.z =
        Math.cos(satellite.rotation.y) *
        planets[index].satellites[satIndex].distance *
        10;
    });
  });
  // Render the scene
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
