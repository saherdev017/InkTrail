```markdown

  _____       _ _______        _ _ 
 |_   _|     | |__   __|      (_) |
   | |  _ __ | | _| |_ __ __ _ _| |
   | | | '_ \| |/ / | '__/ _` | | |
  _| |_| | | |   <| | | | (_| | | |
 |_____|_| |_|_|\_\_|_|  \__,_|_|_|  
```

# INK TRAIL

A web-based tool that lets you build a custom handwriting font by **drawing each letter**. Once you’ve sketched A–Z (and punctuation) on the canvas, the app exports a JSON file of all your strokes. You can then type any text and have it rendered in your own handwriting!

---

## Features
- **Draw Your Alphabet**  
  Sketch each character (A–Z, a–z, digits, punctuation) on a guided canvas with baseline, x-height, cap height, ascender, and descender lines.  
- **Export JSON**  
  Save all stroke data as a single JSON file of letter-to-path mappings.  
- **Render Any Text**  
  Load your JSON to instantly render typed text in your custom handwriting style.  
- **Interactive UI**  
  Choose paper style (plain, lined, margined, grid), upload pre-drawn JSON, or clear and redraw.  
- **Built with Web Tech**  
  HTML5 Canvas, SVG path generation, p5.js, and vanilla JavaScript.

---

## Demo
[![Watch the demo on YouTube](https://img.youtube.com/vi/eKGKVnFmdgw/0.jpg)](https://youtu.be/eKGKVnFmdgw?feature=shared)  
[▶️ Live Demo](https://youtu.be/eKGKVnFmdgw?feature=shared)

---

## How It Works

1. **Draw Each Character**  
   - Open the “Draw Alphabet” mode.  
   - Sketch one letter on the canvas, using the guideline marks to align your baseline and heights.  
   - Press **Enter** to save the strokes under that character.  
2. **Export JSON**  
   - Press **S** (or click “Download JSON”) to generate `handwritingPaths.json`, mapping `"path_A"`, `"path_b"`, `"path_1"`, `"path_period"`, etc., to arrays of `{x,y}` stroke points.  
3. **Render Text**  
   - Load your JSON in “Render Text” mode.  
   - Type any text; the app pieces together your drawn paths, applies kerning and line breaks, then draws the result on canvas or exports as SVG.

---

## Installation
 Clone the repository:
   ```bash
   git clone https://github.com/saherdev017/InkTrail.git
```

---

## JSON Format Example

```json
{
  "path_A": [
    [{"x":12.3,"y":34.2}, {"x":14.1,"y":30.5}, …],
    …
  ],
  "path_b": [ … ],

}
```
```
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
```



   
