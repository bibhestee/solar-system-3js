import * as Three from "three";

export function createPlanet(planet, geometry) {
  // Create planet texture
  const planetTexture = new Three.TextureLoader().load(
    `/textures/${planet.material}.jpg`
  );
  // Create planet material
  const planetMaterial = new Three.MeshStandardMaterial({
    map: planetTexture,
  });

  const newPlanet = new Three.Mesh(geometry, planetMaterial);
  //   Set the planet name
  newPlanet.name = planet.name;
  newPlanet.scale.setScalar(planet.diameter * 30);
  newPlanet.position.x = planet.distance * 10;

  return newPlanet;
}

export function createSatellite(satellite, geometry) {
  // Create Satellite material
  const satelliteMaterial = new Three.MeshStandardMaterial({
    color: satellite.material,
  });

  const newSatellite = new Three.Mesh(geometry, satelliteMaterial);
  //   Set the Satellite name
  newSatellite.name = satellite.name;
  newSatellite.scale.setScalar(satellite.diameter * 30);
  newSatellite.position.x = satellite.distance * 15;

  return newSatellite;
}
