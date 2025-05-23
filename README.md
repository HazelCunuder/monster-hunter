# ⚔️ Hunter vs. Monster: A Classic Battle Arena 🛡️

**Unleash your inner hero and face off against a fearsome monster in this turn-based, browser-based combat game! Strategy, luck, and swift actions will determine your fate.**

## 📸 Game Screenshots

Here's a glimpse of the battlefield where mighty heroes clash:

![Hunter vs Monster Game Screenshot](image_7fbb2e.png)
_The main game interface, showcasing health bars, action buttons, and the dynamic fight log._

## ✨ Features

This game brings classic RPG combat directly to your browser, packed with intuitive features:

* **Dynamic Health Bars:** Visually track the health of both the Hunter and the Monster with vibrant, responsive health bars that change color based on remaining HP.
* **Strategic Action Buttons:**
  * **Attack:** Deal standard damage to the monster.
  * **Special Attack:** A powerful, high-risk, high-reward move.
  * **Heal:** Restore your health to continue the fight.
  * **Give Up:** Concede defeat and end the battle (though a true hero never surrenders!).
  * **Intuitive Grid Layout:** Action buttons are organized in a clear 2x2 grid for easy access, with distinct colors for quick identification (Attack: Red, Special: Blue, Heal: Green, Give Up: White).
* **Real-time Combat Log:** Follow every blow, heal, and critical moment in a dedicated fight log. Log entries are dynamically colored to highlight key events:
  * **Hunter Actions:** Blue 🔵
  * **Monster Attacks:** Red 🔴
  * **Healing:** Green 🟢
  * **Defeat:** Bold Red 💔
  * **Victory:** Bold Green 🎉
* **Responsive Design:** Enjoy the battle on any device, from desktop to mobile, with a fluid and adaptive layout.
* **Start & Play Again:** Easily initiate new games or restart the action with dedicated, prominent buttons.

## 🚀 Technologies Used

This project is built with robust and modern web technologies:

* **HTML5:** The core structure of the game interface.
* **SCSS (Sass):** Advanced CSS preprocessor for organized, maintainable, and efficient styling.
  * Leverages variables for consistent theming.
  * Utilizes mixins for reusable button styles.
  * Employs CSS Grid for flexible and responsive layouts.
* **JavaScript (ES6+):** Powers all game logic, interactions, health management, and dynamic UI updates.

## 🎮 How to Play

1. **Start Game:** Click the "Start a New Game" button.
2. **Choose Your Action:** Use the "Attack", "Special Attack", "Heal", or "Give Up" buttons.
3. **Hunter's Turn:** You make a move.
4. **Monster's Turn:** The monster retaliates immediately after your action.
5. **Monitor Health:** Keep an eye on both health bars and the fight log.
6. **Victory or Defeat:** The game ends when either the Hunter or the Monster's health drops to 0.
7. **Play Again:** Click "Play Again" to jump back into the fray!

## ⚙️ Installation & Setup

To run this game locally:

1. **Clone the Repository:**

    ```bash
    git clone [your-repository-url]
    cd hunter-vs-monster-game
    ```

2. **Open `index.html`:** Simply open the `index.html` file in your preferred web browser.

    _(Note: Since this is a client-side only application, no web server is required. However, for a more robust development setup, you might consider using a local server extension for your browser or editor.)_

3. **Compile SCSS (if making changes):** If you modify any `.scss` files, you will need a Sass compiler to convert them to `style.css`.

    ```bash
    # Example using npm:
    npm install -g sass # If you don't have it
    sass css/main.scss:style.css
    # Or for continuous watching during development:
    sass --watch css/main.scss:style.css
    ```

## 🗺️ Project Structure

.
├── index.html              # Main game interface
├── js/
│   └── main.js             # All game logic and DOM manipulation
└── css/
├── main.scss           # Main SCSS file, imports other modules
├── abstracts/          # SCSS variables and mixins
│   ├── _variables.scss
│   └── \_mixins.scss
├── base/               # Base styles and resets
│   ├── \_reset.scss
│   └── \_typography.scss
├── components/         # Reusable UI components (e.g., buttons)
│   └── \_buttons.scss
└── pages/              # Page-specific styles (e.g., game layout, fight log)
└── \_index.scss

## 💡 Future Enhancements

* **Different Monster Types:** Introduce monsters with varying stats and attack patterns.
* **Rebalance:** Tweak damage values, add cooldown to abilities...
* **Visual Effects:** Implement animations for attacks, heals, and game outcomes.
* **Sound Effects:** Enhance immersion with battle sounds.
* **Difficulty Levels:** Allow players to choose different challenge tiers.
* **Score Tracking:** Keep a tally of wins and losses.

## 🙋‍♂️ Contributing

Contributions are welcome! If you have ideas for new features, bug fixes, or improvements, feel free to open an issue or submit a pull request. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear messages.
4. Open a pull request describing your changes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

For questions, suggestions, or feedback, please open an issue on the repository or reach out via email.

Made with ❤️ by Hazel Cunuder
