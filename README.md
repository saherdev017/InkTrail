```markdown
```text
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

```bash
git clone https://github.com/saherdev017/InkTrail.git
cd InkTrail
# Serve via local web server, e.g.:
npx http-server .
```

Open `http://localhost:8080` (or your server’s address) to start drawing!

---

## JSON Format Example

```json
{
  "path_A": [
    [{"x":12.3,"y":34.2}, {"x":14.1,"y":30.5}, …],
    …
  ],
  "path_b": [ … ],
  "path_period": [ {"x":8,"y":25}, {"x":10,"y":25}, … ]
}
```
```
```
                            
A web-based application where users can upload a sample of their handwriting to generate custom text in their style. Alternatively, users can type text and receive it rendered in your pre-trained handwriting.

---

## Features
- Upload a picture of handwriting to analyze contours and style.
- Type text and see it rendered in your handwriting.
- Interactive and user-friendly interface with a responsive design.
- Built using HTML, CSS, and JavaScript.

---

## Demo
[![Watch the demo on YouTube](https://img.youtube.com/vi/eKGKVnFmdgw/0.jpg)](https://youtu.be/eKGKVnFmdgw?feature=shared)

[▶️ View Live Demo on YouTube](https://youtu.be/eKGKVnFmdgw?feature=shared)


---

## How It Works
1. **Upload Your Handwriting**:  
   Users upload an image containing handwritten text. The application extracts contours and converts the style into a font-like structure.

2. **Render Custom Text**:  
   Users can type text to see it displayed in either the uploaded handwriting style or a default handwriting style.

3. **SVG Path Generation**:  
   The handwriting paths are processed into SVGs for scalable, high-quality rendering.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saherdev017/InkTrail.git

   
