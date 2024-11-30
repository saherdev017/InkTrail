// Creates two paths of points and puts them into an SVG file
// Hit 's' to save the SVG file

let svg;

let text = localStorage.getItem('userInput');


// let text="i am saher dev i am from ropar punjab i like to study and pka and i enjy soorts it makes me happy as well as sad but life goes aon ebahydbge bhagdbyfbr dgshajdudgrb jsiudyfhfjhndyfjifjfufjdgdhufjfhd";

// // let path = []; this is the form
let path_i_dot = [];
let path_j_dot = [];
let paths = {}; // Create an empty object

// // Loop through letters and create properties dynamically
for (let letter of "abcdefghijklmnopqrstuvwxyz") {
    paths["path_" + letter] = []; // Create a property like path_a, path_b, etc., and assign it an empty array
}

const emptyPath = [];
let path1 = [];
let path2 = [];
let Paths = []; // Store all paths for adjustment
let connectingCurve = []; // Store the connecting curve

function setup() {
  createCanvas(550, 500);
  angleMode(DEGREES);
  svg = new SvgBuilder();

  // Define initial paths
  /*  Create paths of points  */

   paths.path_a.push(
    {x:0.3,y:23.5},{x:1.8,y:21.4},{x:3.2,y:18.2},{x:4.9,y:12.3},{x:7.8,y:11.7},{x:10.6,y:12.7},{x:12.0,y:16.0},{x:12.3,y:17.4},{x:10.7,y:13.7},{x:7.7,y:12.2},{x:5.0,y:13.4},{x:4.2,y:16.1},{x:4.0,y:18.9},{x:5.7,y:21.6},{x:8.1,y:23.5},{x:11.1,y:23.2},{x:12.2,y:18.7},{x:11.5,y:15.3},{x:12.1,y:19.8},{x:13.3,y:21.6},{x:15.3,y:23.4},{x:17.6,y:23.3},{x:20.2,y:21.0}
  );

    paths.path_b.push(
    {x:0.2,y:23.0},{x:6.2,y:19.3},{x:7.9,y:13.2},{x:6.6,y:6.6},{x:5.3,y:0.6},{x:3.4,y:3.0},{x:3.6,y:6.0},{x:3.7,y:9.5},{x:4.3,y:13.5},{x:4.8,y:17.6},{x:6.0,y:20.9},{x:6.6,y:22.3},{x:11.2,y:23.2},{x:13.2,y:20.4},{x:14.3,y:16.5},{x:12.4,y:14.3},{x:9.9,y:13.8},{x:7.4,y:16.0},{x:6.8,y:17.9},{x:5.5,y:19.7},{x:12.2,y:23.4},{x:15.8,y:23.0},{x:19.0,y:21.7}
  );

    paths.path_c.push({x:0.4,y:23.1},{x:2.8,y:23.1},{x:4.1,y:21.4},{x:4.8,y:19.6},{x:6.6,y:15.1},{x:8.4,y:13.7},{x:11.5,y:12.2},{x:14.4,y:13.4},{x:11.2,y:12.6},{x:8.5,y:13.8},{x:6.8,y:15.5},{x:6.0,y:17.3},{x:6.6,y:19.8},{x:7.2,y:21.4},{x:8.1,y:22.8},{x:9.7,y:23.5},{x:12.1,y:23.2},{x:14.3,y:22.7},{x:16.0,y:21.7},{x:17.6,y:19.6},{x:19.9,y:18.6});

  
  
    paths.path_d.push(
    {x:0.9,y:23.3},{x:2.3,y:19.2},{x:3.8,y:14.9},{x:7.1,y:14.0},{x:9.1,y:15.7},{x:10.6,y:19.3},{x:11.6,y:23.5},{x:9.1,y:17.4},{x:7.3,y:15.1},{x:3.1,y:16.1},{x:3.0,y:20.1},{x:3.6,y:22.4},{x:7.3,y:23.5},{x:10.2,y:23.5},{x:11.7,y:19.9},{x:11.7,y:11.8},{x:11.4,y:5.5},{x:10.4,y:2.0},{x:8.4,y:1.5},{x:8.4,y:4.0},{x:8.4,y:9.5},{x:9.4,y:14.0},{x:10.7,y:17.6},{x:12.5,y:21.4},{x:14.1,y:23.5},{x:16.8,y:21.6},{x:18.5,y:19.6},{x:19.3,y:17.6}
  );

   paths.path_e.push({x:0.4, y:22.8}, {x:4.3, y:20.7}, {x:7.3, y:17.1},
    {x:8.3, y:12.7}, {x:5.7, y:11.4}, {x:3.2, y:14.0},
    {x:3.0, y:17.0}, {x:6.0, y:21.5}, {x:9.8, y:21.4},
    {x:14.8, y:21.7});
    
   paths.path_f.push({x:0.2,y:22.6},{x:3.2,y:21.1},{x:5.4,y:16.4},{x:6.6,y:10.9},{x:7.0,y:4.8},{x:6.3,y:2.4},{x:4.3,y:4.1},{x:4.4,y:6.2},{x:4.7,y:12.6},{x:5.3,y:21.3},{x:6.4,y:30.6},{x:8.4,y:34.6},{x:10.7,y:31.3},{x:10.3,y:25.1},{x:8.9,y:21.5},{x:6.4,y:18.4},{x:5.0,y:17.4},{x:8.9,y:18.9},{x:10.9,y:19.0},{x:14.3,y:18.6});
    
   paths.path_g.push({x:0.6,y:22.2},{x:5.3,y:16.1},{x:7.7,y:14.7},{x:11.4,y:16.6},{x:8.2,y:16.6},{x:5.6,y:16.0},{x:3.7,y:19.0},{x:5.7,y:23.9},{x:9.7,y:23.4},{x:10.8,y:17.4},{x:9.7,y:15.8},{x:9.4,y:17.1},{x:10.0,y:23.0},{x:11.3,y:35.6},{x:9.9,y:36.8},{x:7.6,y:35.2},{x:6.3,y:29.5},{x:7.9,y:26.1},{x:11.2,y:22.1},{x:14.7,y:21.0});

   paths.path_h.push(
    {x:0.7,y:23.2},{x:3.5,y:20.6},{x:6.0,y:14.2},{x:6.4,y:6.4},{x:5.4,y:0.9},{x:3.6,y:2.1},{x:3.6,y:4.7},{x:4.0,y:8.1},{x:4.3,y:13.2},{x:6.0,y:20.8},{x:6.8,y:24.7},{x:6.1,y:17.6},{x:6.7,y:15.6},{x:9.9,y:13.9},{x:11.1,y:16.3},{x:12.1,y:20.9},{x:12.9,y:22.7},{x:15.3,y:23.8},{x:18.1,y:20.0}
  );

   paths.path_i.push({x:1.3,y:23.5},{x:4.2,y:21.5},{x:5.0,y:18.6},{x:5.8,y:13.8},{x:5.5,y:12.2},{x:4.6,y:13.3},{x:4.7,y:17.6},{x:5.9,y:22.2},{x:8.1,y:23.5});
   //dot
   paths.path_i.push({x:5.3,y:7.1},{x:4.9,y:8.8},{x:5.5,y:9.9},{x:6.4,y:9.6},{x:6.8,y:8.3},{x:6.4,y:7.1},{x:5.5,y:6.8});

   path_i_dot.push({x:5.3,y:7.1},{x:4.9,y:8.8},{x:5.5,y:9.9},{x:6.4,y:9.6},{x:6.8,y:8.3},{x:6.4,y:7.1},{x:5.5,y:6.8});
   
   paths.path_j.push({x:0.5,y:23.4},{x:3.2,y:19.2},{x:6.2,y:13.3},{x:6.3,y:17.7},{x:6.5,y:25.1},{x:7.1,y:31.0},{x:6.8,y:36.6},{x:2.8,y:32.2},{x:3.7,y:24.5},{x:8.6,y:21.3},{x:12.2,y:18.9},{x:14.5,y:16.3});
    //dot
    paths.path_j.push({x:5.3,y:7.1},{x:4.9,y:8.8},{x:5.5,y:9.9},{x:6.4,y:9.6},{x:6.8,y:8.3},{x:6.4,y:7.1},{x:5.5,y:6.8});

    path_j_dot.push({x:5.3,y:7.1},{x:4.9,y:8.8},{x:5.5,y:9.9},{x:6.4,y:9.6},{x:6.8,y:8.3},{x:6.4,y:7.1},{x:5.5,y:6.8});

   paths.path_k.push({x:0.4,y:22.9},{x:3.6,y:18.9},{x:4.5,y:14.8},{x:5.8,y:4.5},{x:4.0,y:1.0},{x:2.5,y:2.7},{x:2.7,y:6.7},{x:2.7,y:13.6},{x:3.9,y:24.8},{x:3.7,y:21.3},{x:3.7,y:18.3},{x:5.7,y:14.6},{x:8.2,y:13.2},{x:9.8,y:15.5},{x:9.6,y:17.9},{x:7.0,y:18.8},{x:5.3,y:19.4},{x:3.8,y:19.7},{x:5.8,y:20.2},{x:7.8,y:21.5},{x:9.9,y:23.2},{x:11.2,y:24.1},{x:13.0,y:23.3},{x:15.0,y:20.7});

   paths.path_l.push(
    {x:1.3,y:23.6},{x:4.0,y:21.3},{x:6.3,y:16.8},{x:7.4,y:8.1},{x:5.4,y:1.4},{x:3.0,y:3.4},{x:3.3,y:6.8},{x:4.5,y:14.9},{x:6.8,y:23.0},{x:8.6,y:23.8},{x:13.4,y:20.3}
   );
   paths.path_m.push({x:0.7,y:16.7},{x:1.7,y:13.7},{x:4.1,y:11.7},{x:4.4,y:14.7},{x:4.6,y:18.8},{x:4.8,y:23.6},{x:4.6,y:16.5},{x:6.4,y:14.0},{x:9.1,y:13.5},{x:9.4,y:17.3},{x:9.4,y:22.1},{x:9.4,y:23.8},{x:9.1,y:18.0},{x:10.1,y:15.3},{x:12.3,y:13.8},{x:14.4,y:13.4},{x:15.2,y:15.4},{x:13.9,y:18.4},{x:14.3,y:21.7},{x:14.9,y:23.6},{x:17.4,y:23.2},{x:18.5,y:21.7});

   paths.path_n.push(
    {x:0.8,y:16.8},{x:2.5,y:14.4},{x:4.0,y:11.9},{x:4.8,y:23.4},{x:4.5,y:18.0},{x:6.3,y:15.0},{x:8.9,y:13.2},{x:10.1,y:13.8},{x:11.1,y:17.6},{x:11.3,y:22.5},{x:11.8,y:23.3},{x:15.6,y:20.8},{x:16.8,y:18.4},{x:18.9,y:17.0}
  );

   paths.path_o.push({x:0.9,y:23.6},{x:4.0,y:14.4},{x:6.9,y:11.2},{x:10.6,y:14.7},{x:6.8,y:11.9},{x:4.9,y:13.8},{x:3.9,y:17.3},{x:5.4,y:24.2},{x:9.6,y:23.9},{x:10.9,y:21.1},{x:10.2,y:13.8},{x:5.9,y:12.4},{x:4.7,y:15.8},{x:8.1,y:16.5},{x:11.5,y:16.3},{x:14.5,y:14.9},{x:16.6,y:13.5});

   paths.path_p.push(
    {x:0.5,y:22.8},{x:4.3,y:20.9},{x:6.0,y:13.1},{x:6.0,y:3.4},{x:3.7,y:2.8},{x:4.1,y:6.0},{x:4.1,y:18.2},{x:4.4,y:28.1},{x:5.1,y:34.6},{x:4.7,y:18.2},{x:6.0,y:14.7},{x:9.2,y:15.9},{x:9.6,y:19.7},{x:8.8,y:22.1},{x:7.0,y:23.5},{x:4.7,y:22.0},{x:6.7,y:23.1},{x:10.0,y:23.5},{x:13.0,y:21.2},{x:14.3,y:19.4}
   );

   paths.path_q.push(
    {x:0.5,y:23.3},{x:2.6,y:17.2},{x:5.2,y:12.6},{x:8.6,y:13.1},{x:9.6,y:15.8},{x:5.7,y:12.7},{x:3.3,y:14.8},{x:3.2,y:21.7},{x:6.2,y:23.3},{x:9.3,y:22.8},{x:9.9,y:18.6},{x:9.3,y:14.5},{x:9.4,y:17.6},{x:9.1,y:29.2},{x:9.8,y:34.5},{x:9.9,y:35.9},{x:13.8,y:27.0},{x:16.3,y:21.7},{x:17.4,y:19.5}
   );

   paths.path_r.push(
    {x:0.3,y:23.3},{x:3.6,y:21.7},{x:5.3,y:19.1},{x:6.9,y:14.9},{x:7.1,y:11.9},{x:5.2,y:9.8},{x:2.4,y:12.0},{x:3.4,y:14.5},{x:8.6,y:16.7},{x:12.0,y:16.1},{x:14.3,y:12.5},{x:11.7,y:13.5},{x:11.4,y:17.4},{x:11.7,y:20.7},{x:12.5,y:23.2},{x:15.3,y:23.8},{x:17.0,y:21.7},{x:18.6,y:19.7},{x:19.3,y:17.7}
  );
   
  paths.path_s.push(
    {x:0.8,y:23.3},{x:4.6,y:21.0},{x:6.8,y:18.3},{x:8.2,y:14.3},{x:9.1,y:10.9},{x:6.7,y:9.6},{x:5.0,y:10.1},{x:4.2,y:12.1},{x:4.1,y:15.3},{x:9.3,y:18.4},{x:11.6,y:21.6},{x:9.6,y:23.6},{x:7.1,y:23.6},{x:5.8,y:22.5},{x:2.7,y:19.7},{x:7.1,y:22.0},{x:10.0,y:22.8},{x:12.5,y:23.7},{x:14.8,y:22.8},{x:16.3,y:21.6}
  );

   paths.path_t.push( {x:10.7,y:8.6},{x:4.0,y:8.4},{x:4.1,y:8.5},{x:6.6,y:8.6},{x:8.1,y:6.3},{x:7.6,y:2.5},{x:6.3,y:2.7},{x:6.5,y:7.1},{x:7.0,y:15.1},{x:7.1,y:21.5},{x:7.8,y:23.8},{x:11.0,y:23.5},{x:16.8,y:19.0},{x:10.0,y:22.5},{x:7.7,y:21.8},{x:7.3,y:19.8},{x:7.3,y:17.5},{x:7.3,y:21.8},{x:4.2,y:23.0},{x:2.4,y:23.8},{x:0.1,y:23.3});


   paths.path_u.push({x:1.0,y:23.3},{x:4.2,y:20.1},{x:4.2,y:14.3},{x:4.0,y:12.9},{x:4.2,y:19.9},{x:6.6,y:23.3},{x:9.5,y:22.2},{x:10.0,y:14.8},{x:10.3,y:12.6},{x:10.8,y:18.4},{x:11.4,y:22.1},{x:12.7,y:23.8},{x:14.8,y:21.8},{x:16.8,y:20.2});
   
   paths.path_v.push(
    {x:0.5,y:16.2},{x:3.1,y:12.5},{x:4.4,y:16.6},{x:5.2,y:20.1},{x:6.9,y:22.8},{x:8.6,y:23.6},{x:10.4,y:22.0},{x:11.0,y:19.2},{x:12.2,y:14.0},{x:11.9,y:12.5},{x:9.6,y:12.6},{x:9.6,y:13.7},{x:11.3,y:16.0},{x:14.0,y:16.1},{x:15.6,y:15.3},{x:16.8,y:13.7}
  );

   paths.path_w.push({x:0.6,y:23.3},{x:3.6,y:16.8},{x:3.3,y:13.0},{x:2.4,y:13.8},{x:2.4,y:18.2},{x:3.5,y:22.7},{x:5.5,y:24.0},{x:7.6,y:22.8},{x:8.6,y:17.7},{x:7.7,y:13.8},{x:6.7,y:15.9},{x:7.8,y:19.9},{x:8.6,y:21.8},{x:11.2,y:23.7},{x:12.6,y:23.3},{x:13.8,y:18.5},{x:13.8,y:16.4},{x:12.7,y:13.3},{x:11.8,y:14.5},{x:12.8,y:16.5},{x:15.5,y:17.0},{x:18.2,y:14.6});

   paths.path_x.push(
    {x:0.4,y:23.0},{x:3.2,y:14.1},{x:4.4,y:13.3},{x:6.3,y:13.5},{x:8.3,y:17.1},{x:8.4,y:21.0},{x:7.1,y:23.6},{x:4.2,y:22.7},{x:3.2,y:21.1},{x:6.9,y:22.5},{x:8.6,y:18.6},{x:8.6,y:16.5},{x:12.4,y:13.5},{x:13.3,y:14.0},{x:15.6,y:16.9},{x:11.2,y:13.9},{x:9.4,y:15.1},{x:9.1,y:19.9},{x:9.1,y:22.2},{x:9.8,y:23.9},{x:15.0,y:23.8},{x:17.5,y:21.5},{x:18.7,y:18.6}
   );

   paths.path_y.push(
    {x:0.5,y:23.4},{x:2.9,y:20.4},{x:3.2,y:17.5},{x:3.4,y:15.6},{x:3.7,y:20.1},{x:4.5,y:22.2},{x:5.5,y:23.3},{x:7.1,y:22.1},{x:8.6,y:19.7},{x:8.7,y:14.8},{x:9.3,y:17.8},{x:9.4,y:20.5},{x:10.4,y:28.7},{x:10.4,y:32.3},{x:8.6,y:32.8},{x:5.8,y:29.4},{x:6.1,y:26.8},{x:8.6,y:23.3},{x:10.7,y:20.3},{x:13.0,y:19.1},{x:14.5,y:17.9}
  );

   paths.path_z.push({x:0.9,y:23.8},{x:2.9,y:16.7},{x:6.3,y:13.2},{x:9.7,y:16.6},{x:9.0,y:20.1},{x:6.9,y:22.9},{x:5.1,y:24.2},{x:8.3,y:22.5},{x:10.7,y:23.9},{x:11.5,y:28.4},{x:11.7,y:34.2},{x:10.1,y:36.4},{x:7.0,y:33.6},{x:7.0,y:30.8},{x:8.5,y:25.9},{x:10.9,y:22.5},{x:13.0,y:20.5},{x:16.6,y:19.2});

  
/* chaikin's algorithm for smoothening */

for (let key of Object.keys(paths)) {//going thru each key
    /*
    smoothening all parts via a loop
    for eg:  paths.path_b = chaikinSmooth(paths.path_b); 
    */

      paths[key] = chaikinSmooth(paths[key]);

       //Generate a new path with Perlin noise
    //    paths[key] = generatePerlinPath(paths[key]);

    /*   Put each path into the svg, in a GROUP */
      svg.startGroup();
      svg.addPath(paths[key]);
      svg.endGroup();
  }



/*
 Collect paths like this
 paths.push(paths.path_y,paths.path_a,paths.path_b,paths.path_c);
*/

// pushing paths
for (let letter of text) {

if(letter!=" "){
    Paths.push(paths["path_" + letter]) ;
} 
else{
    Paths.push(emptyPath);
}
}

 Paths = adjustPaths(Paths);

 let booljoin =true;
  for(let i=0;i<Paths.length-1;i++){
    
    if (Paths[i] === emptyPath || Paths[i + 1] === emptyPath) {
        continue; // Skip connection for empty paths
      }
     
    // Adjust paths and generate connecting curve
    booljoin=true;
    Paths = adjustPaths(Paths);
    connectingCurve = createConnectingCurve(Paths[i], Paths[i+1]);
    // Splice paths with the connecting curve
    Paths = splicePathsWithConnectingCurve(Paths, connectingCurve,i);
    Paths = adjustPaths(Paths);
    

   
   

    /*
    if text[i]==space --> skip
    text[i+1]== not to be connected 
    text[i-1]==space -->not to be connected

     if(text[i]!=" "&&text[i+1]!=" "){

  
    Paths = adjustPaths(Paths);
    connectingCurve = createConnectingCurve(Paths[i], Paths[i+1]);
     // Splice paths with the connecting curve
    Paths = splicePathsWithConnectingCurve(Paths, connectingCurve,i);
    Paths = adjustPaths(Paths);
    

   
    }
    

    */

    // else if(text[i+1]==" "){//next letter is space no need to connect
    //     Paths = adjustPaths(Paths);
    // }
    
    // else if(text[i-1]==)
    // else{
    //     booljoin=false;
    // Paths = adjustPaths(Paths,booljoin);
   
    // }
  }
  Paths = adjustPaths(Paths);



//   Add paths to SVG
  for (let path of Paths) {
    svg.startGroup();
    svg.addPath(path);
    svg.endGroup();
  }

  // End the SVG
  svg.end();
}

function draw() {
  background("#ffffff");

  noFill();
  stroke("#000000");

  // Draw adjusted paths
  for (let path of Paths) {
    beginShape();
    for (let p of path) {
      vertex(p.x, p.y);
    }
    endShape();
  }

  noLoop();
}

// Save the SVG when the 's' key is pressed
function keyPressed() {
  if (key == "s") {
    svg.save();
  }
}



// Adjust paths with kerning
function adjustPaths(paths) {
  let adjustedPaths = [];
  let xOffset = 0; // Starting x-offset
  let yOffset = 0; // Starting y-offset
  const lineHeight = 0; // Space between lines
  const kerning = 1; // Space between letters
  let charCount = 0; // Tracks the number of characters in the current line
  booljoin=true;
  lineswap=false;

  paths.forEach((path, index) => {
    if (charCount > 35 && path === emptyPath) {
        yOffset +=lineHeight; // Increment vertical offset
        xOffset = 0; // Reset horizontal offset
        charCount=0;
        lineswap=true;
      }
     
    

    if (path === emptyPath) {
        adjustedPaths.push(path); // Just add the empty path as-is
        booljoin=false;
        charCount++;
        return;
      }
    

    if (index === 0 ) {
      adjustedPaths.push(path);
      charCount++;
    } 

    else if(lineswap){//line has been changed
        lineswap=!lineswap; //false
        booljoin=!booljoin; //true
        const prevBounds = getBounds(adjustedPaths[index - 2]);
        const currBounds = getBounds(path);
        yOffset += prevBounds.maxY - currBounds.minY;
        yOffset+=10;
        const translatedPath = translatePath(path, xOffset, yOffset);
      adjustedPaths.push(translatedPath);
        // adjustedPaths.push(path);
        charCount++;
    }
    

    else if(!booljoin){// false meaning before one was space
        booljoin=!booljoin; //true
        
        const prevBounds = getBounds(adjustedPaths[index - 2]);
      const currBounds = getBounds(path);

      xOffset += prevBounds.maxX - currBounds.minX + 6*kerning;//add spacing

      const translatedPath = translatePath(path, xOffset, yOffset);
      adjustedPaths.push(translatedPath);
      charCount++;
        
    }

    
    

    else {
      const prevBounds = getBounds(adjustedPaths[index - 1]);
      const currBounds = getBounds(path);

      xOffset += prevBounds.maxX - currBounds.minX - kerning;
      const translatedPath = translatePath(path, xOffset,yOffset);
      adjustedPaths.push(translatedPath);
      charCount++;
    }
  });
  return adjustedPaths;
}



// Translate a path by offset
function translatePath(path, xOffset, yOffset) {
  return path.map(({ x, y }) => ({ x: x + xOffset, y: y + yOffset }));
}

// Get bounds of a path
function getBounds(path) {
  const xs = path.map(({ x }) => x);
  const ys = path.map(({ y }) => y);
  return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
}




// Create a connecting curve using Chaikin's algorithm
function createConnectingCurve(path1, path2) {
  const start = path1[path1.length - 2];
  const end = path2[0]; // Use second point of the second path
  const mid = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
  const mid2 = { x: (mid.x + end.x) / 2, y: (mid.y + end.y) / 2 };
  let curve = [start, mid,mid2, end];
  return chaikinCurve(curve, 8); // Apply Chaikin's algorithm
}

// Chaikin's algorithm for smoothing
function chaikinCurve(points, iterations) {
  for (let i = 0; i < iterations; i++) {
    let newPoints = [];
    for (let j = 0; j < points.length - 1; j++) {
      const p0 = points[j];
      const p1 = points[j + 1];
      const q = { x: 0.75 * p0.x + 0.25 * p1.x, y: 0.75 * p0.y + 0.25 * p1.y };
      const r = { x: 0.25 * p0.x + 0.75 * p1.x, y: 0.25 * p0.y + 0.75 * p1.y };
      newPoints.push(q, r);
    }
    points = newPoints;
  }
  return points;
}

// Splice the connecting curve into paths
// function splicePathsWithConnectingCurve(paths, curve) {
//   let splicedPaths = [...paths];
//   splicedPaths[0] = paths[0].slice(0, -1).concat(curve); // Replace last point of path1 with curve
// //   splicedPaths[1] = paths[1].concat(curve); // Remove first point of path2
// splicedPaths[1] = paths[1].slice(0); // Remove first point of path2
// // splicedPaths[1] = curve.slice(1).concat(paths[1]);
//   return splicedPaths;
// }

// Function to splice the connecting curve into paths
function splicePathsWithConnectingCurve(paths, curve ,i) {
    let splicedPaths = [...paths];
    
    // Replace the last point of path1 with the curve
    splicedPaths[i] = paths[i].slice(0, -1).concat(curve); // path1 ends with the curve
    
    // For path2, retain its first point but start with the curve's last point
    splicedPaths[i+1] = paths[i+1].slice(0); // Retain path2 as is
    
    // Ensure path2 begins with the last point of the curve
    splicedPaths[i+1] = curve.slice(-1).concat(splicedPaths[i+1].slice(1)); // Remove first point of path2 and add the curve's last point
    
    // for(let i=1;i<paths.length;i++){// For path2, retain its first point but start with the curve's last point
    // splicedPaths[i] = paths[i].slice(0); // Retain path2 as is
    
    // // Ensure path2 begins with the last point of the curve
    // splicedPaths[i] = curve.slice(-1).concat(splicedPaths[i].slice(1));} // Remove first point of path2 and add the curve's last point
    
    return splicedPaths;
  }

// Chaikin's algorithm for smoothing paths
function chaikinSmooth(path, iterations = 10) {
    for (let i = 0; i < iterations; i++) {
      let newPath = [];
      for (let j = 0; j < path.length - 1; j++) {
        let p0 = path[j];
        let p1 = path[j + 1];
        let q = {
          x: 0.75 * p0.x + 0.25 * p1.x,
          y: 0.75 * p0.y + 0.25 * p1.y
        };
        let r = {
          x: 0.25 * p0.x + 0.75 * p1.x,
          y: 0.25 * p0.y + 0.75 * p1.y
        };
        newPath.push(q);
        newPath.push(r);
      }
      path = newPath;
    }
    return path;
  }  

  
  function generatePerlinPath(path, noiseScale = 0) {
    let newPath = [];
    for (let i = 0; i < path.length; i++) {
        let p = path[i];
        let noiseX = noise(p.x * noiseScale, p.y * noiseScale) * 10; // Scale for noise
        let noiseY = noise(p.y * noiseScale, p.x * noiseScale) * 10; // Scale for noise
        newPath.push({ x: p.x + noiseX, y: p.y + noiseY });
    }
    return newPath;
}


















// // Get bounds of a path


// // // Creates two paths of points and puts them into an SVG file
// // // Hit 's' to save the svg file

// // let svg; 

// // let path1 = [];
// // let path2 = [];

// // function setup() {
// //   createCanvas(500, 500);
// //   angleMode(DEGREES);
// //   svg = new SvgBuilder();

// //   path1.push(
// //     {x:0.3,y:23.5},{x:1.8,y:21.4},{x:3.2,y:18.2},{x:4.9,y:12.3},{x:7.8,y:11.7},{x:10.6,y:12.7},{x:12.0,y:16.0},{x:12.3,y:17.4},{x:10.7,y:13.7},{x:7.7,y:12.2},{x:5.0,y:13.4},{x:4.2,y:16.1},{x:4.0,y:18.9},{x:5.7,y:21.6},{x:8.1,y:23.5},{x:11.1,y:23.2},{x:12.2,y:18.7},{x:11.5,y:15.3},{x:12.1,y:19.8},{x:13.3,y:21.6},{x:15.3,y:23.4},{x:17.6,y:23.3},{x:20.2,y:21.0}
// //   );

// //   path2.push(
// //     {x:0.2,y:23.0},{x:6.2,y:19.3},{x:7.9,y:13.2},{x:6.6,y:6.6},{x:5.3,y:0.6},{x:3.4,y:3.0},{x:3.6,y:6.0},{x:3.7,y:9.5},{x:4.3,y:13.5},{x:4.8,y:17.6},{x:6.0,y:20.9},{x:6.6,y:22.3},{x:11.2,y:23.2},{x:13.2,y:20.4},{x:14.3,y:16.5},{x:12.4,y:14.3},{x:9.9,y:13.8},{x:7.4,y:16.0},{x:6.8,y:17.9},{x:5.5,y:19.7},{x:12.2,y:23.4},{x:15.8,y:23.0},{x:19.0,y:21.7}
// //   );


// //   // Put each path into the svg, in a group
// //   svg.startGroup();
// //   svg.addPath(path1);
// //   svg.endGroup();

// //   svg.startGroup();
// //   svg.addPath(path2);
// //   svg.endGroup();

// //   // End the svg
// //   svg.end();

// // }

// // function draw() {
// //   background("#ffffff")
  
// //   noFill();
// //   stroke("#000000");
  
//   beginShape();
//   for(let p of path1){
//     vertex(p.x, p.y);
//   }
//   endShape();

//   beginShape();
//   for(let p of path2){
//     vertex(p.x, p.y);
//   }
//   endShape();

//   noLoop();
// }

// // Save the svg when the 's' key is pressed
// function keyPressed(){
//   if(key == "s"){
//     svg.save();
//   }
// }

