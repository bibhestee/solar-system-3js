import * as THREE from "three";

// Create Sun geometry
const sunGeometry = new THREE.SphereGeometry(2, 32, 32);

// Create sun material with texture
const sunMaterial = new THREE.MeshStandardMaterial({
  color: 0xffcc33,
  emissive: 0xffa500,
  roughness: 0.8,
  metalness: 0.2,
});

// Add geometry and material to mesh object
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);

// Add sun to scene
const Sun = new THREE.Scene();

Sun.add(sunMesh);

// Add light to simulate sun light
const light = new THREE.PointLight(0xffffff, 2, 300);
light.position.set(0, 0, 0);

Sun.add(light);

// Export Sun
export default Sun;
