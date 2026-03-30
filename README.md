# ✂️ Stone Paper Scissors — Play vs Computer

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-blue?style=for-the-badge)

A fast, responsive **Stone Paper Scissors** game where you compete against a computer opponent — built entirely with vanilla HTML, CSS, and JavaScript. No frameworks, no installs, just click and play.

---

## 🌐 Live Demo

🔗 **[Play Now → marutsharma.github.io/Stone_Paper_Scissor_Game](https://marutsharma.github.io/Stone_Paper_Scissor_Game/)**
*(Activate via GitHub Pages in your repo Settings → Pages)*

---

## 🎮 About The Game

You pick **Stone**, **Paper**, or **Scissors** by clicking the image. The computer instantly makes a random choice. The result is displayed immediately and the scoreboard updates — first to rack up the most wins takes the crown. Built as a front-end fundamentals project to demonstrate JavaScript logic, randomness, real-time DOM updates, and responsive UI design.

---

## 🖥️ Preview

```
┌─────────────────────────────────┐
│       Stone  Paper  Scissors    │
│        🪨      📄      ✂️        │
│                                 │
│    You 👤   5  —  3   💻 Computer│
│                                 │
│      🎉 You Win This Round!     │
└─────────────────────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖱️ One-Click Gameplay | Click an image to instantly make your move |
| 🤖 Computer Opponent | Computer picks randomly using `Math.random()` |
| 📊 Live Scoreboard | Tracks Player vs Computer score in real time |
| 📢 Round Result Message | Instantly shows Win / Lose / Draw after each move |
| 🖼️ Image-Based UI | Visual choice buttons using custom images |
| 📱 Responsive Design | Playable on both desktop and mobile browsers |

---

## 🛠️ Built With

- **HTML5** — Semantic layout, image-based choice buttons, scoreboard structure
- **CSS3** — Flexbox layout, card styling, responsive design
- **JavaScript (ES6)** — Random computer logic, result evaluation, live DOM updates

No libraries. No build tools. No package manager.

---

## 💡 Key Concepts Demonstrated

> What this project shows a recruiter or interviewer:

- **DOM Manipulation** — Dynamically updating score counters and result messages on every move
- **Randomness & Logic** — Using `Math.random()` and `Math.floor()` to simulate a computer decision
- **Conditional Logic** — Evaluating all 9 possible move combinations (3 choices × 3 choices) to determine win/draw/loss
- **Event Handling** — Attaching click listeners to image elements and routing game logic through them
- **Separation of Concerns** — HTML handles structure, CSS handles presentation, JS handles all game logic
- **Score State Management** — Maintaining and incrementing player/computer score variables across rounds
- **UX Design** — Immediate visual feedback on every interaction without any page reload

---

## 📁 Project Structure

```
Stone_Paper_Scissor_Game/
│
├── index.html        ← Game layout: choice buttons, scoreboard, result message
├── style.css         ← Styling: flex layout, card design, score board, responsiveness
├── app.js            ← Logic: computer random pick, result check, score update, DOM render
└── image/
    ├── rock.png      ← Rock choice image
    ├── paper.png     ← Paper choice image
    └── scissors.png  ← Scissors choice image
```

---

## 🚀 Getting Started

### Option 1 — Open directly in browser

```bash
git clone https://github.com/MarutSharma/Stone_Paper_Scissor_Game.git
cd Stone_Paper_Scissor_Game
# Double-click index.html or run:
open index.html
```

### Option 2 — Use Live Server (VS Code)

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Game opens at `http://127.0.0.1:5500`

---

## 📖 How to Play

```
Step 1 → Look at the three choices: Rock 🪨, Paper 📄, Scissors ✂️
Step 2 → Click on your chosen image
Step 3 → Computer instantly picks its move at random
Step 4 → Result is shown — Win 🎉, Lose 😞, or Draw 🤝
Step 5 → Scores update automatically — keep playing to outscore the computer!
```

---

## 🗺️ Game Rules

| Your Move | Computer Move | Result |
|:---------:|:-------------:|:------:|
| 🪨 Rock | ✂️ Scissors | ✅ You Win |
| ✂️ Scissors | 📄 Paper | ✅ You Win |
| 📄 Paper | 🪨 Rock | ✅ You Win |
| ⚡ Same | ⚡ Same | 🤝 Draw |
| Any | Stronger | ❌ You Lose |

---

## 🔮 Planned Improvements

- [ ] 🏆 Best-of-5 / Best-of-10 tournament mode
- [ ] 🎵 Sound effects on win, lose, and draw
- [ ] 🎉 Confetti or animation on winning streak
- [ ] 📈 Game history log showing past rounds
- [ ] 🌙 Dark Mode toggle

---

## 👤 Author

**Marut Sharma**
GitHub → [@MarutSharma](https://github.com/MarutSharma)

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ using vanilla HTML, CSS & JavaScript</p>
