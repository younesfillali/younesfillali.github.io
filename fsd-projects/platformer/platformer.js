$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     // TODO 1 - Enable the Grid
     toggleGrid(); 

     // TODO 2 - Create Platforms
     createPlatform(200, 400, 150, 20, "green"); // Platform 1
     createPlatform(500, 300, 200, 20, "blue"); // Platform 2
     createPlatform(800, 200, 100, 20, "red"); // Platform 3
     createPlatform(1000, 350, 150, 20, "orange"); // Platform 4
     createPlatform(1200, 450, 300, 20, "purple"); // Platform 5
 
     // TODO 3 - Create Collectables
     createCollectable("diamond", 250, 370); // Collectable 1
     createCollectable("steve", 600, 270); // Collectable 2
     createCollectable("database", 850, 170); // Collectable 3
 
     // TODO 4 - Create Cannons
     createCannon("left", 200, 1500); // Cannon 1 on the left side
     createCannon("right", 500, 2000); // Cannon 2 on the right side
     createCannon("top", 300, 1000); // Cannon 3 on the top
 
     //////////////////////////////////
     // ONLY CHANGE ABOVE THIS POINT //
     //////////////////////////////////
   }
 
   registerSetup(setup);
 });
 