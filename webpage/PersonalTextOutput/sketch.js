// Creates two paths of points and puts them into an SVG file
// Hit 's' to save the SVG file

/**
 * Smooths a path by repeatedly “Chaikin‐izing” it.
 * @param {Array<{x:number,y:number}>} path  Original point‐list
 * @param {number} loops  How many smoothing passes (2–5 is usually good)
 * @returns {Array<{x:number,y:number}>} the smoothed path
 */
function smoothPath(path, loops) {
  // rcns[0] = a shallow copy of original
  let rcns = [ path.map(p => ({ x: p.x, y: p.y })) ];
  
  for (let l = 1; l < loops; l++) {
    const prev = rcns[l-1];
    let next = [];
    const N = prev.length;
    for (let i = 0; i < N; i++) {
      // keep endpoints
      if (i === 0 || i === N-1) {
        next.push(prev[i]);
      } else {
        // for interior points, insert two new points between neighbors
        const A = prev[i-1];
        const B = prev[i];
        const C = prev[i+1];
        next.push( lerpVector(A, B) );
        next.push( lerpVector(B, C) );
      }
    }
    rcns[l] = next;
  }
  return rcns[loops-1];
}

/**
 * Linearly interpolates between two points
 * @param {{x:number,y:number}} p0 
 * @param {{x:number,y:number}} p1 
 * @param {number} amt  interpolation factor (0–1; default 0.75)
 */
function lerpVector(p0, p1, amt = 0.75) {
  return {
    x: p0.x + (p1.x - p0.x) * amt,
    y: p0.y + (p1.y - p0.y) * amt
  };
}


let svg;
// let text="i am saher dev ";
let text = localStorage.getItem('userInput');
let data=null;

// // let path = []; this is the form
let path_i_dot = [];
let path_j_dot = [];
let paths = {}; // Create an empty object //main key object

// // Loop through letters and create properties dynamically
for (let letter of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    paths["path_" + letter] = []; // Create a property like path_a, path_b, etc., and assign it an empty array
}

 // grab the JSON out of localStorage


// ----------------------------------------------
// 1) RDP simplification (Douglas–Peucker)
// ----------------------------------------------
function simplifyPath(points, epsilon = 0.5) {
  if (points.length < 3) return points.slice();
  const sqr = x => x * x;
  // perpendicular distance from P to line AB
  function getSqSegDist(p, a, b) {
    let dx = b.x - a.x,
        dy = b.y - a.y;
    if (dx === 0 && dy === 0) {
      dx = p.x - a.x;
      dy = p.y - a.y;
      return dx * dx + dy * dy;
    }
    const t = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx*dx + dy*dy);
    let proj;
    if (t < 0) proj = a;
    else if (t > 1) proj = b;
    else proj = { x: a.x + t*dx, y: a.y + t*dy };
    dx = p.x - proj.x;
    dy = p.y - proj.y;
    return dx*dx + dy*dy;
  }
  function rdp(start, end, pts, out) {
    let maxDist = 0, idx = -1;
    for (let i = start + 1; i < end; i++) {
      const d = getSqSegDist(pts[i], pts[start], pts[end]);
      if (d > maxDist) { idx = i; maxDist = d; }
    }
    if (maxDist > epsilon*epsilon) {
      rdp(start, idx, pts, out);
      rdp(idx, end, pts, out);
    } else {
      out.push(pts[start]);
    }
  }
  const output = [];
  rdp(0, points.length - 1, points, output);
  output.push(points[points.length - 1]);
  return output;
}

// ----------------------------------------------
// 2) Run smoothing + simplification on every key
// ----------------------------------------------
function compressAllPaths(pathsObj, smoothLoops = 3, epsilon = 0.8) {
  for (let key in pathsObj) {
    if (!pathsObj.hasOwnProperty(key)) continue;
    // flatten nested arrays if needed
    let flat = [];
    const raw = pathsObj[key];
    if (Array.isArray(raw[0])) {
      raw.forEach(arr => flat.push(...arr));
    } else {
      flat = raw.slice();
    }
    // 1) smooth
    const sm = smoothPath(flat, smoothLoops);
    // 2) simplify
    const sq = simplifyPath(sm, epsilon);
    pathsObj[key] = sq;
    console.log(`✔ ${key}: ${flat.length}→${sq.length} points`);
  }
}

// ----------------------------------------------
// 3) Example usage right after JSON load:
// ----------------------------------------------
let raw = localStorage.getItem("handwritingPaths");
if (raw) {
  const data = JSON.parse(raw);
  Object.assign(paths, data);
  // compress in‑place:
  compressAllPaths(paths, /*smoothLoops=*/5, /*epsilon=*/0.5);
}





// let raw = localStorage.getItem("handwritingPaths");
//  if (!raw) return;

//  const data = JSON.parse(raw);
 
 

const emptyPath = [];

let Paths = []; // Store all paths for adjustment
let connectingCurve = []; // Store the connecting curve
let comma=[];

/*ESSENTIAL MAPPING*/
let Front = new Map();
let Back = new Map();

// Adding key-value pairs
/* join at base=0 no join=1 join at x=-1 join at top=-2 */
Front.set('a',0); Front.set('A',1);
Front.set('b',0); Front.set('B',1);
Front.set('c',0); Front.set('C',1);
Front.set('d',0); Front.set('D',1);
Front.set('e',0); Front.set('E',1);
Front.set('f',0); Front.set('F',1);
Front.set('g',0); Front.set('G',1);
Front.set('h',0); Front.set('H',1);
Front.set('i',0); Front.set('I',1);
Front.set('j',0); Front.set('J',1);
Front.set('k',0); Front.set('K',1);
Front.set('l',0); Front.set('L',1);
Front.set('m',-1); Front.set('M',1);
Front.set('n',-1); Front.set('N',1);
Front.set('o',0); Front.set('O',1);
Front.set('p',0); Front.set('P',1);
Front.set('q',0); Front.set('Q',1);
Front.set('r',0); Front.set('R',1);
Front.set('s',0); Front.set('S',1);
Front.set('t',-2); Front.set('T',1);
Front.set('u',0); Front.set('U',1);
Front.set('v',-1); Front.set('V',1);
Front.set('w',0); Front.set('W',1);
Front.set('x',-1); Front.set('X',1);
Front.set('y',0); Front.set('Y',1);
Front.set('z',0); Front.set('Z',1);

Back.set(',',1); Front.set(',',1);


Back.set('a',0); Back.set('A',-1);
Back.set('b',0); Back.set('B',0);
Back.set('c',0); Back.set('C',0);
Back.set('d',0); Back.set('D',-2);
Back.set('e',0); Back.set('E',-1);
Back.set('f',0); Back.set('F',1);
Back.set('g',0); Back.set('G',0);
Back.set('h',0); Back.set('H',-1);
Back.set('i',0); Back.set('I',-1);
Back.set('j',0); Back.set('J',0);
Back.set('k',0); Back.set('K',0);
Back.set('l',0); Back.set('L',0);
Back.set('m',0); Back.set('M',0);
Back.set('n',0); Back.set('N',1);
Back.set('o',-1); Back.set('O',1);
Back.set('p',0); Back.set('P',1);
Back.set('q',0); Back.set('Q',0);
Back.set('r',0); Back.set('R',0);
Back.set('s',0); Back.set('S',0);
Back.set('t',0); Back.set('T',0);
Back.set('u',0); Back.set('U',0);
Back.set('v',-1); Back.set('V',1);
Back.set('w',-1); Back.set('W',1);
Back.set('x',-1); Back.set('X',1);
Back.set('y',-1); Back.set('Y',1);
Back.set('z',0); Back.set('Z',0);





/*SETUP*/
function setup() {
  createCanvas(550, 500);
  angleMode(DEGREES);
  svg = new SvgBuilder();

  // Define initial paths
  /*  Create paths of points  */

  for (let key in data) {//key looks like path_a and path_s
    // console.log(key) checkpoint
   
    if (!data.hasOwnProperty(key)) continue;
    // flatten one level if needed
    const strokes = data[key];
    const pts = Array.isArray(strokes[0])
    ? strokes.reduce((all, s) => all.concat(s), [])
    : strokes;
  
    // const pts = Array.isArray(strokes[0]) ? strokes.flat() : strokes;
    console.log(pts);
     // make sure your paths[key] exists
     paths[key] = paths[key] || [];
    // // now fill your paths
    paths[key].push(...pts);
  }


  /*
   comma.push({x:10.9,y:23.5},{x:9.2,y:22.8},{x:10.4,y:21.0},{x:11.7,y:22.0},{x:11.4,y:23.8},{x:11.0,y:26.3},{x:9.9,y:28.2},{x:7.1,y:27.4});

   paths.path_a.push(
    {x:0.3,y:23.5},{x:1.8,y:21.4},{x:3.2,y:18.2},{x:4.9,y:12.3},{x:7.8,y:11.7},{x:10.6,y:12.7},{x:12.0,y:16.0},{x:12.3,y:17.4},{x:10.7,y:13.7},{x:7.7,y:12.2},{x:5.0,y:13.4},{x:4.2,y:16.1},{x:4.0,y:18.9},{x:5.7,y:21.6},{x:8.1,y:23.5},{x:11.1,y:23.2},{x:12.2,y:18.7},{x:11.5,y:15.3},{x:12.1,y:19.8},{x:13.3,y:21.6},{x:15.3,y:23.4},{x:17.6,y:23.3},{x:20.2,y:21.0}
  );

  
   
  paths.path_s.push(
    {x:0.8,y:23.3},{x:4.6,y:21.0},{x:6.8,y:18.3},{x:8.2,y:14.3},{x:9.1,y:10.9},{x:6.7,y:9.6},{x:5.0,y:10.1},{x:4.2,y:12.1},{x:4.1,y:15.3},{x:9.3,y:18.4},{x:11.6,y:21.6},{x:9.6,y:23.6},{x:7.1,y:23.6},{x:5.8,y:22.5},{x:2.7,y:19.7},{x:7.1,y:22.0},{x:10.0,y:22.8},{x:12.5,y:23.7},{x:14.8,y:22.8},{x:16.3,y:21.6}
  );
  */



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
  
  comma=chaikinSmooth(comma);
  svg.startGroup();
   svg.addPath(comma);
   svg.endGroup();


/*
 Collect paths like this
 paths.push(paths.path_y,paths.path_a,paths.path_b,paths.path_c);
*/

// pushing paths
for (let letter of text) {
   if(letter==','){
    Paths.push(comma);
  }
if(letter!=" "){
    Paths.push(paths["path_" + letter]) ;
} 
else{
    Paths.push(emptyPath);
}
}

 Paths = adjustPaths(Paths);

 let booljoin =true;
  for(let i=0;i<Paths.length-1;i++){//pushing the text in order
    
    if (Paths[i] === emptyPath || Paths[i + 1] === emptyPath) {
        continue; // Skip connection for empty paths
      }
      if (text[i] ==',' || text[i + 1] == ',') {
        continue; // Skip connection for comma
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
    if (charCount > 35 && path === emptyPath ||path=== emptyPath &&text[index]== "\n" ) {
        yOffset +=lineHeight; // Increment vertical offset
        xOffset = 0; // Reset horizontal offset
        charCount=0;
        lineswap=true;
      }
     
    

    if (path === emptyPath ) {
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
     
      // If the character is a comma, you might want to tweak its position slightly
      if (text[index] == ',') {
        // You can adjust the positioning of the comma here if needed
        xOffset += prevBounds.maxX - currBounds.minX - (kerning / 2); // Adjust comma positioning
      } 


      else{xOffset += prevBounds.maxX - currBounds.minX - kerning;}
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
  return chaikinCurve(curve, 10); // Apply Chaikin's algorithm
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
    

    /*
    possible combinations 
    :
    0-base 1-nojoin -2=join at top -1=join at x
    0-0
    0-(-1)
    0-(2)
    0-(1)
    */
    //case1 where they both do not want to be connected
    if(Front.get(text[i])==1||Back.get(text[i+1])==1){
     return splicedPaths;
    }

    if((Front.get(text[i+1])==-2)&& Back.get(text[i])==0){ //connect front at top and back at base 
    return splicedPaths;
     }

    
    // Replace the last point of path1 with the curve
    splicedPaths[i] = paths[i].slice(0, -1).concat(curve); // path1 ends with the curve
    
    // For path2, retain its first point but start with the curve's last point
    splicedPaths[i+1] = paths[i+1].slice(0); // copied path of next
    
    // Ensure path2 begins with the last point of the curve
    splicedPaths[i+1] = curve.slice(-1).concat(splicedPaths[i+1].slice(1)); // Remove first point of path2 and add the curve's last point
  
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
