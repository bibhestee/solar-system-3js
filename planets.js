export const planets = [
  { 
    name: "Mercury",
    distance: 7.79, 
    speed: 0.4787,  
    diameter: 4880 / 1391000,
    material: "mercury",
    satellites: []
  },
  { 
    name: "Venus",
    distance: 10.82, 
    speed: 0.3502,   
    diameter: 12104 / 1391000,
    material: "venus",
    satellites: []
  },
  { 
    name: "Earth",
    distance: 14.96, 
    speed: 0.2978,   
    diameter: 12742 / 1391000,
    material: "earth",
    satellites: [
      { 
        name: "Moon", 
        distance: 0.54, // Distance relative to Earth
        speed: 1.022, 
        diameter: 4880 / 1391000,
        material: "#F0E68C" // Khaki
      }
    ]
  },
  { 
    name: "Mars",
    distance: 22.79, 
    speed: 0.2413,   
    diameter: 6779 / 1391000,
    material: "mars",
    satellites: [
      { 
        name: "Phobos", 
        distance: 0.0000094, // Distance relative to Mars
        speed: 2.14, 
        diameter: 22.4 / 1391000,
        material: "#8B4513" // Saddle brown
      },
      { 
        name: "Deimos", 
        distance: 0.0000235, // Distance relative to Mars
        speed: 1.35, 
        diameter: 12.4 / 1391000,
        material: "#A9A9A9" // Dark gray
      }
    ]
  },
  { 
    name: "Jupiter",
    distance: 57.83, 
    speed: 0.1307,   
    diameter: 139820 / 1391000,
    material: "jupiter",
    satellites: [
      { 
        name: "Io", 
        distance: 0.4217, // Distance relative to Jupiter
        speed: 17.33, 
        diameter: 3643 / 1391000,
        material: "#FFA500" // Orange
      },
      { 
        name: "Europa", 
        distance: 0.6711, // Distance relative to Jupiter
        speed: 13.74, 
        diameter: 3122 / 1391000,
        material: "#87CEFA" // Light sky blue
      },
      { 
        name: "Ganymede", 
        distance: 1.0704, // Distance relative to Jupiter
        speed: 10.88, 
        diameter: 5268 / 1391000,
        material: "#D2B48C" // Tan
      },
      { 
        name: "Callisto", 
        distance: 1.8827, // Distance relative to Jupiter
        speed: 8.20, 
        diameter: 4820 / 1391000,
        material: "#4682B4" // Steel blue
      }
    ]
  },
  { 
    name: "Saturn",
    distance: 127.7, 
    speed: 0.0969,   
    diameter: 116460 / 1391000,
    material: "saturn",
    satellites: [
      { 
        name: "Titan", 
        distance: 1.222, // Distance relative to Saturn
        speed: 5.57, 
        diameter: 5150 / 1391000,
        material: "#F4A460" // Sandy brown
      },
      { 
        name: "Rhea", 
        distance: 0.527, // Distance relative to Saturn
        speed: 8.48, 
        diameter: 1528 / 1391000,
        material: "#808080" // Gray
      },
      { 
        name: "Iapetus", 
        distance: 3.561, // Distance relative to Saturn
        speed: 3.26, 
        diameter: 1469 / 1391000,
        material: "#B22222" // Firebrick
      }
    ]
  },
  { 
    name: "Uranus",
    distance: 148.1, 
    speed: 0.0681,   
    diameter: 50724 / 1391000,
    material: "uranus",
    satellites: [
      { 
        name: "Miranda", 
        distance: 0.129, // Distance relative to Uranus
        speed: 6.6, 
        diameter: 471 / 1391000,
        material: "#ADD8E6" // Light blue
      },
      { 
        name: "Ariel", 
        distance: 0.191, // Distance relative to Uranus
        speed: 5.51, 
        diameter: 1162 / 1391000,
        material: "#E6E6FA" // Lavender
      },
      { 
        name: "Umbriel", 
        distance: 0.266, // Distance relative to Uranus
        speed: 4.67, 
        diameter: 1169 / 1391000,
        material: "#9370DB" // Medium purple
      },
      { 
        name: "Titania", 
        distance: 0.436, // Distance relative to Uranus
        speed: 3.64, 
        diameter: 1578 / 1391000,
        material: "#B0E0E6" // Powder blue
      },
      { 
        name: "Oberon", 
        distance: 0.583, // Distance relative to Uranus
        speed: 3.15, 
        diameter: 1523 / 1391000,
        material: "#778899" // Light slate gray
      }
    ]
  },
  { 
    name: "Neptune",
    distance: 349.5, 
    speed: 0.0543,   
    diameter: 49244 / 1391000,
    material: "neptune",
    satellites: [
      { 
        name: "Triton", 
        distance: 0.354, // Distance relative to Neptune
        speed: 4.39, 
        diameter: 2707 / 1391000,
        material: "#4682B4" // Steel blue
      }
    ]
  }
];
