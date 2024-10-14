import { SphereGeometry, MeshBasicMaterial, Mesh } from "three";

// Create earth geometry 
const earthGeometry = new SphereGeometry(4);

// Create earth material 
const earthMaterial = new MeshBasicMaterial({ color: "green"})

// add geometry and material to mesh object 

const Earth = new Mesh(earthGeometry, earthMaterial);
// export earth 

export default Earth;