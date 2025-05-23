'use strict';

const hunterDisplay = document.getElementById('hunter');
const monsterDisplay = document.getElementById('monster');

const hunterHealthNumber = document.getElementById('hunter-health-number');
const monsterHealthNumber = document.getElementById('monster-health-number');
const hunterHealthFill = document.getElementById('hunter-health-fill');
const monsterHealthFill = document.getElementById('monster-health-fill');

const startGameBtn = document.getElementById('startgame');

const hunterAttackBtn = document.getElementById('attack');
const hunterSpecialBtn = document.getElementById('spk');
const hunterHealBtn = document.getElementById('heal');
const hunterGiveUpBtn = document.getElementById('give-up');
const playAgainBtn = document.getElementById('play-again-btn');

const fightLog = document.getElementById('fight-log');

const HEAL_AMOUNT = 10;

let hunterHealth = 100;
let monsterHealth = 100;
let maxHealth = 100;
let gameActive = false;
let turn = "none";

toggleHunterActions(false);
playAgainBtn.style.display = 'none';

function startGame(){
    hunterHealth = maxHealth;
    monsterHealth = maxHealth;
    updateHealthBars();
    gameActive = true;
    toggleHunterActions(true);
    startGameBtn.style.display = 'none';
    playAgainBtn.style.display = 'none';
    turn = "hunter";
    fightLog.innerHTML = "";
    logMessage("Game Start! Hunter's turn.", "info"); 
};

function logMessage(message, type = 'default'){ // 
    let p = document.createElement("p");
    p.textContent = message;
    p.classList.add(`log--${type}`); 
    fightLog.prepend(p);
};

function getRandomDamage(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

function updateHealthBars() {
    hunterHealthFill.style.width = `${(hunterHealth/maxHealth)*100}%`;
    monsterHealthFill.style.width = `${(monsterHealth/maxHealth)*100}%`;
    hunterHealthNumber.textContent = `${Math.round((hunterHealth/maxHealth)*100)}`;
    monsterHealthNumber.textContent = `${Math.round((monsterHealth/maxHealth)*100)}`;

    if (hunterHealth > 50) {
        hunterHealthFill.style.backgroundColor = "green";
    } else if (hunterHealth > 25) {
        hunterHealthFill.style.backgroundColor = "orange";
    } else {
        hunterHealthFill.style.backgroundColor = "red";
    } 

    if (monsterHealth > 50) {
        monsterHealthFill.style.backgroundColor = "green";
    } else if (monsterHealth > 25) {
        monsterHealthFill.style.backgroundColor = "orange";
    } else {
        monsterHealthFill.style.backgroundColor = "red";
    } 
};

updateHealthBars();

startGameBtn.addEventListener('click', startGame);

playAgainBtn.addEventListener('click', startGame);

hunterAttackBtn.addEventListener('click', function(){
    let damage = getRandomDamage(3, 10);
    monsterHealth = Math.max(0, monsterHealth - damage);
    logMessage(`Hunter attacks, Monster has taken ${damage}HP of damage.`, 'hunter-attack'); 
    updateHealthBars();
    if (checkGameOver()) {
        return;
    } else {
        turn = 'monster';
        monsterTurn();
    };
});

hunterSpecialBtn.addEventListener('click', function(){
    let damage = getRandomDamage(10, 20);
    monsterHealth = Math.max(0, monsterHealth - damage);
    logMessage(`Hunter used his special attack, Monster as taken ${damage}HP of damage.`, 'hunter-attack');
    updateHealthBars();
    if (checkGameOver()) {
        return;
    } else {
        turn = 'monster';
        monsterTurn();
    };
});

hunterHealBtn.addEventListener('click', function(){
    hunterHealth = Math.min(maxHealth, hunterHealth + HEAL_AMOUNT);
    logMessage('Hunter has healed 10HP!', 'heal'); // Added type
    updateHealthBars();
    if (checkGameOver()) {
        return;
    } else {
        turn = 'monster';
        monsterTurn();
    };
});

hunterGiveUpBtn.addEventListener('click', function(){
    if (gameActive) {
        gameActive = false;
        logMessage("Hunter has given up! The Monster wins!", 'defeat');
        endGame(false);
    }
});

function checkGameOver() {
    if (monsterHealth <= 0){
        logMessage("You have killed the Monster! You win!", 'victory'); 
        endGame(true);
        return true;
    } else if (hunterHealth <= 0){
        logMessage("The Monster has slain you. You failed.", 'defeat'); 
        endGame(false);
        return true;
    };

    return false;
};

function endGame(playerWon){
    gameActive = false;
    playerWon ? logMessage("Congratulations! You have defeated the Monster!", 'victory') : logMessage("You Died.", 'defeat'); 
    toggleHunterActions(false);
    playAgainBtn.style.display = 'block';
};

function monsterTurn() {
    turn = 'monster';
    toggleHunterActions(false);
    let damage = getRandomDamage(5,10);
    hunterHealth = Math.max(0, hunterHealth - damage);
    logMessage(`Monster attacks, Hunter has taken ${damage}HP of damage.`, 'monster-attack'); 
    updateHealthBars();
    if (checkGameOver()) {
        return;
    } else {
        turn = 'hunter';
        toggleHunterActions(true);
    };
};

function toggleHunterActions(enable){
    hunterAttackBtn.disabled = !enable; 
    hunterSpecialBtn.disabled = !enable;
    hunterHealBtn.disabled = !enable;
    hunterGiveUpBtn.disabled = !enable;
    if (enable) {
        hunterAttackBtn.style.display = "block"; 
        hunterSpecialBtn.style.display = "block";
        hunterHealBtn.style.display = "block";
        hunterGiveUpBtn.style.display = "block";
    } else {
        hunterAttackBtn.style.display = "none";
        hunterSpecialBtn.style.display = "none";
        hunterHealBtn.style.display = "none";
        hunterGiveUpBtn.style.display = "none";
    };
};