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
createPlatform(200, 650, 150, 20, "green"); 
createPlatform(400, 600, 200, 20, "blue");  
createPlatform(600, 550, 100, 20, "red");   
createPlatform(800, 500, 150, 20, "orange"); 
createPlatform(1000, 450, 300, 20, "purple"); 

// TODO 3 - Create Collectables
createCollectable("diamond", 250, 630);  
createCollectable("steve", 450, 580);    
createCollectable("database", 750, 530); 

// TODO 4 - Create Cannons
createCannon("left", 200, 1200); 
createCannon("right", 400, 1500); 
createCannon("top", 600, 1000); 
createCannon("left", 800, 1300); 
createCannon("right", 1000, 1600); 
createCannon("top", 900, 1400); 






 
     //////////////////////////////////
     // ONLY CHANGE ABOVE THIS POINT //
     //////////////////////////////////
   }
 
   registerSetup(setup);
 });