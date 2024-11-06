// Creates two paths of points and puts them into an SVG file
// Hit 's' to save the svg file
let svg; 

let text="abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz";

// let path = []; this is the form
let path_i_dot = [];
let path_j_dot = [];
let paths = {}; // Create an empty object

// Loop through letters and create properties dynamically
for (let letter of "abcdefghijklmnopqrstuvwxyz") {
    paths["path_" + letter] = []; // Create a property like path_a, path_b, etc., and assign it an empty array
}


   
// Define the offset for path2
const xOffset = 10;  // Shift path2 to the right by 10 pixels
const yOffset = 0;   // Optional y-axis shift

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  svg = new SvgBuilder();
  
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

       // Generate a new path with Perlin noise
       paths[key] = generatePerlinPath(paths[key]);

      // Put each path into the svg, in a GROUP
      svg.startGroup();
      svg.addPath(paths[key]);
      svg.endGroup();
  }


 
  // Put each path into the svg, in a GROUP
//   svg.startGroup();
//   svg.addPath(paths.path_e);
//   svg.endGroup();


  // End the SVG
  svg.end();
}
/*  The place where actual drawing takes place */
function draw() {

  background("#ffffff");
  
  noFill();
  stroke("#000000");
  
  // Draw path1

//   beginShape();
//    for (let p of paths.path_s) {
//     vertex(p.x  , p.y ); // Apply offsets
//   }
//   endShape();

  // Draw a connecting line from the last point of path1 to the first point of path2
//   let lastPointPath1 = paths.path_e[paths.path_e.length - 1];
//   let firstPointPath2 = paths.path_b[0];
//   line(lastPointPath1.x, lastPointPath1.y, firstPointPath2.x, firstPointPath2.y);
 
  // Draw path2 with offset
//   beginShape();
//   for(let p of paths.path_a){
//     vertex(p.x+1.3*xOffset, p.y+ yOffset);
//   }
//   endShape();

  
//   beginShape();
//    for (let p of paths.path_h) {
//     vertex(p.x+3*xOffset, p.y ); // Apply offsets
//   }
//   endShape();

//   beginShape();
//    for (let p of paths.path_e) {
//     vertex(p.x+ 4.5*xOffset, p.y ); // Apply offsets
//   }
//   endShape();

//   beginShape();
//    for (let p of paths.path_r) {
//     vertex(p.x+5.5*xOffset, p.y ); // Apply offsets
//   }
//   endShape();

//   beginShape();
//    for (let p of paths.path_d) {
//     vertex(p.x+8.5*xOffset, p.y ); // Apply offsets
//   }
//   endShape();
  
//   beginShape();
//    for (let p of paths.path_i) {
//     vertex(p.x+ 10*xOffset, p.y ); // Apply offsets
//   }
//   endShape();

//   beginShape();
//    for (let p of paths.path_v) {
//     vertex(p.x+ 11*xOffset, p.y ); // Apply offsets
//   }
//   endShape();
  /*
   i=0;
  for (let key of Object.keys(paths)) {//going thru each key
       //stem
       

       beginShape();
       for (let p of paths[key] ) {
        vertex(p.x+ i*xOffset, p.y ); // Apply offsets
      }
      endShape();
     

     i+=1.5;
  }
  */

  
  // Loop through letters and create properties dynamically
  
i=0;
j=0;
count=0;
k=0;

for (let letter of text) {
  count++;
    // paths["path_" + letter]  // Create a property like path_a, path_b, etc., and assign it an empty array

   if(letter==" "){
    j+=2.5;
   }
    else{ 
      let ip = paths["path_" + letter];

      beginShape();
       for (let p of paths["path_" + letter] ) {
        vertex(p.x+ j*xOffset, p.y + yOffset+k); // Apply offsets
      }
      endShape();
        

      if (i < text.length - 1 && text[i + 1] !== " ") {
        let lastPointCurrent = ip[ip.length - 1]; // Last point of the current letter's path
        let nextLetter = text[i + 1]; // The next character
        let firstPointNext = paths["path_" + nextLetter][0]; // First point of the next letter's path
         

       // Control points for the Bezier curve
      let controlPoint1 = { 
        x: lastPointCurrent.x + (firstPointNext.x - lastPointCurrent.x) / 2, 
        y: lastPointCurrent.y
      };
      let controlPoint2 = { 
        x: firstPointNext.x + (firstPointNext.x - lastPointCurrent.x) / 2, 
        y: firstPointNext.y
      };

      // Draw a cubic Bezier curve connecting the last point of the current letter to the first point of the next letter
      bezierVertex(
        controlPoint1.x + j * xOffset, 
        controlPoint1.y + yOffset + k , 
        controlPoint2.x + j * xOffset, 
        controlPoint2.y + yOffset + k ,
        firstPointNext.x + j * xOffset, 
        firstPointNext.y + yOffset + k 
      );

        // Draw a line connecting the last point of the current letter to the first point of the next letter
        
        // line(lastPointCurrent.x + j * xOffset, lastPointCurrent.y + yOffset + k ,
        //      firstPointNext.x + j * xOffset, firstPointNext.y + yOffset + k );

         
      }




     j+=1.5;
    }



    if(count==30){
      count=0;
      k+=30;
      j=0;
    }

   i+=1;//iterator
}


  

  noLoop();
}

// Chaikin's algorithm for smoothing paths
function chaikinSmooth(path, iterations = 2) {
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

//beizer curve
function bezierVertex(x0, y0, x1, y1, x2, y2, x3, y3, t) {
  // Parametric equation of cubic Bezier curve
  let xt = Math.pow(1 - t, 3) * x0 + 3 * Math.pow(1 - t, 2) * t * x1 + 3 * (1 - t) * Math.pow(t, 2) * x2 + Math.pow(t, 3) * x3;
  let yt = Math.pow(1 - t, 3) * y0 + 3 * Math.pow(1 - t, 2) * t * y1 + 3 * (1 - t) * Math.pow(t, 2) * y2 + Math.pow(t, 3) * y3;

  return {x: xt, y: yt};
}

// Function to calculate the height adjustment for a given letter (you can customize this)
function letterHeightAdjustment(letter) {
  // Example logic for adjusting height. Customize as needed.
  if (["b", "d", "f", "h"].includes(letter)) {
    return 5; // Adjust higher for taller letters
  } else if (["j", "l", "p", "q"].includes(letter)) {
    return -3; // Adjust lower for letters with descenders
  }
  return 0; // Default no adjustment
}


// Save the SVG when the 's' key is pressed
function keyPressed(){
  if(key == "s"){
    svg.save();
  }
}
