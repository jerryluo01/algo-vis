# algo-vis

# 🔢 Sorting Algorithm Visualizer

An interactive **Sorting Algorithm Visualizer** built with **HTML, CSS, and JavaScript**.  
Watch your favorite sorting algorithms come to life with smooth animations, color cues, and adjustable speed and array sizes.

---

## 🚀 Features

✅ Visualizes multiple sorting algorithms:
- 🫧 **Bubble Sort**
- 🪣 **Selection Sort**
- 🧩 **Insertion Sort**
- ⚡ **Quick Sort**
- 🐚 **Shell Sort**

✅ Interactive controls:
- Adjust **array size**
- Change **animation speed**
- **Shuffle** the array
- Choose the **sorting algorithm** to visualize

✅ Real-time bar updates with smooth color transitions:
- 🔵 Blue → current comparison  
- 🔴 Red → swapping elements  
- 🟣 Purple → correctly placed element  
- 🟢 Green borders → gap or pivot highlights  

---

## 🧠 How It Works

This project uses asynchronous JavaScript (`async/await`) and a `sleep()` delay function to simulate sorting step-by-step.  
Each sorting algorithm updates the DOM in real-time by adjusting each bar’s height and color to represent comparisons, swaps, and placements.

### 🧮 Core Functions
- `update(array)` → Updates the height of each bar based on the array’s values.
- `sleep(ms)` → Delays animation for the given milliseconds.
- `graph()` → Generates a new array visualization.
- `sortit()` → Handles algorithm selection and execution.

---

## 🎮 Controls

| Control | Description |
|----------|--------------|
| **Length Slider** | Adjusts number of elements (array size). |
| **Speed Slider** | Controls the animation speed. |
| **Shuffle Button** | Randomizes the array. |
| **Sort Button** | Starts sorting using the selected algorithm. |
| **Dropdown Menu** | Select which sorting algorithm to run. |

---

## 🧱 Tech Stack

- **HTML5** — structure and interface  
- **CSS3** — styling and color animations  
- **JavaScript (ES6)** — core logic and visualization updates  
- **DOM manipulation** — to dynamically update bar heights and colors

---

## 💡 Visualization Color Key

| Color | Meaning |
|-------|----------|
| 🔵 Blue | Currently comparing elements |
| 🔴 Red | Element being swapped |
| 🟣 Purple | Element placed correctly |
| 🟢 Green Border | Pivot / gap marker |
| ⚪ White | Idle / unhighlighted |

---

## 📸 Example Preview

> (Optional — you
