'use strict';

const hunterDisplay = document.getElementById('hunter');
const monsterDisplay = document.getElementById('monster');
const hunterHealthFill = document.getElementById('hunter-health-fill');
const monsterHealthFill = document.getElementById('monster-health-fill');
const startGameBtn = document.getElementById('startgame');
const hunterAttackBtn = document.getElementById('attack');
const hunterSpecialBtn = document.getElementById('spk');
const hunterHealBtn = document.getElementById('heal');
const hunterGiveUpBtn = document.getElementById('give-up');
const fightLog = document.getElementById('fight-log');

let hunterHealth = 100;
let monsterHealth = 100;
let maxHealth = 100;
let gameActive = true;
let turn = "none";

function startGame(){
    hunterHealth = maxHealth;
    monsterHealth = maxHealth;
    updateHealthBars();
    gameActive = true;
    turn = "hunter";
    fightLog.innerHTML = "";
    fightLog.innerHTML = "Game Start! Hunter's turn";
};

function updateHealthBars() {
    hunterHealthFill.style.width = `${(hunterHealth/maxHealth)*100}%`;
    monsterHealthFill.style.width = `${(monsterHealth/maxHealth)*100}%`;
}