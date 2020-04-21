const playerAttackValue = 10;
const playerAttackStrongValue = 17;
const monsterAttackValue = 14;
let maxLife = 100;
let monsterCurrentHealth = maxLife;
let playerCurrentHealth = maxLife;

const monsterHealthProgress = document.getElementById('monsterHealthProgressId');
const playerHealthProgress = document.getElementById('playerHealthProgressId');
const playerButtonAttack = document.getElementById('playerButtonAttackId');
const playerButtonAttackStrong = document.getElementById('playerButtonAttackStrongId');
const monsterHealtPercent = document.getElementById('monsterHealtPercentId');
const playerHealtPercent = document.getElementById('playerHealtPercentId');

adjustHealthBars(maxLife);
function adjustHealthBars (maxLife) {
  monsterHealthProgress.max = maxLife;
  monsterHealthProgress.value = maxLife;
  playerHealthProgress.max = maxLife;
  playerHealthProgress.value = maxLife;
  monsterHealtPercent.value = maxLife;
  playerHealtPercent.value = maxLife;
}

playerButtonAttack.addEventListener('click', playerAttackHandler);
playerButtonAttackStrong.addEventListener('click', playerAttackStrongHandler);

function playerAttackHandler() {
  playerAttackMode('attack');
}

function playerAttackStrongHandler() {
  playerAttackMode('attackStrong');
}

function playerAttackMode(mode) {
  let playerAttackDamage;
  if (mode === 'attack') {
    playerAttackDamage = playerAttackValue;
  } else if (mode === 'attackStrong') {
    playerAttackDamage = playerAttackStrongValue;
  }

  const monsterDamage = monsterDeal(playerAttackDamage);
  const playerDamage = playerDeal(monsterAttackValue);

  function monsterDeal (damage) {
    const damageDeal = (Math.round(Math.random() * damage)*100)/100;
    monsterHealthProgress.value = monsterHealthProgress.value - damageDeal;
    monsterHealtPercent.textContent=monsterHealthProgress.value;
    return damageDeal;
  }
  
  function playerDeal (damage) {
    const damageDeal = (Math.round(Math.random() * damage)*100)/100;
    playerHealthProgress.value = playerHealthProgress.value - damageDeal;
    playerHealtPercent.textContent=playerHealthProgress.value;
    return damageDeal;
  }


  monsterCurrentHealth -= monsterDamage;
  playerCurrentHealth -= playerDamage;
  
  if (monsterCurrentHealth <= 0 && playerCurrentHealth > 0) {
    alert('You won!');
  } else if (playerCurrentHealth <= 0 && monsterCurrentHealth > 0) {
    alert('You lost!');
  } else if (playerCurrentHealth <= 0 && monsterCurrentHealth <= 0) {
    alert('You have a draw!');
  }
}

