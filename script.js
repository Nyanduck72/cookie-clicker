let upgrades = {
    clicker: 
    {
        isUnlocked: true,
        cost: 10,
        amount: 0,
        value: 1
    },
    granny:
    {
        isUnlocked: false,
        cost: 100,
        amount: 0,
        value: 10
    },
    farm:
    {
        isUnlocked: false,
        cost: 1000,
        amount: 0,
        value: 100
    },
    mine:
    {
        isUnlocked: false,
        cost: 10000,
        amount: 0,
        value: 1000
    },
    factory:
    {
        isUnlocked: false,
        cost: 100000,
        amount: 0,
        value: 10000
    },
    bank:
    {
        isUnlocked: false,
        cost: 1000000,
        amount: 0,
        value: 100000
    }
}

let cookies = 0;
let CPS = 0;

function animateCookie() {
    let cookie = document.getElementById('cookie');
    cookie.classList.add('clicked');
    setTimeout(function() {
      cookie.classList.remove('clicked');
    }, 300); // Adjust the duration of animation in milliseconds
  }

  
  let autoclickerIntervalId = null; // Variable to store the interval ID for autoclicker
  let grannyIntervalId = null; // Variable to store the interval ID for grannys

  function updateCookies() {
      let cookieCount = document.getElementById('cookieCount');
      let cps = document.getElementById('cps');

      if (upgrades.clicker.amount > 0 && autoclickerIntervalId === null) { // Check if autoclicker is active and interval is not already set
          autoclickerIntervalId = setInterval(() => {
              cookieClick((upgrades.clicker.amount * upgrades.clicker.value));
          }, (1000));
      } else if (upgrades.clicker.amount === 0 && autoclickerIntervalId !== null) { // Check if autoclicker is not active and interval is set
          clearInterval(autoclickerIntervalId); // Clear the interval
          autoclickerIntervalId = null; // Reset interval ID
      }
      if (upgrades.granny.amount > 0 && grannyIntervalId === null) { // Check if granny is active and interval is not already set
        grannyIntervalId = setInterval(() => {
            cookieClick((upgrades.granny.amount * upgrades.granny.value));
        }, (1000));
    } else if (upgrades.granny.amount === 0 && grannyIntervalId !== null) { // Check if granny is not active and interval is set
        clearInterval(grannyIntervalId); // Clear the interval
        grannyIntervalId = null; // Reset interval ID
    }
      cookieCount.innerHTML = cookies;
      cps.innerHTML = CPS;
  }

function updateUpgrades() {
    let clicker = document.getElementById('clicker');

    let buyGrannys = document.getElementById('buyGrannys');
    let granny = document.getElementById('granny');

    let buyFarms = document.getElementById('buyFarms');
    let farm = document.getElementById('farm');

    let buyMines = document.getElementById('buyMines');
    let mine = document.getElementById('mine');

    let buyFactories = document.getElementById('buyFactories');
    let factory = document.getElementById('factory');

    let buyBanks = document.getElementById('buyBanks');
    let bank = document.getElementById('bank');
    
    clicker.innerHTML = `Bought: ${upgrades.clicker.amount} | Cost: $${upgrades.clicker.cost}`;

    // Check if granny upgrades are unlocked. If so, render UI for buying. If not, render UI for unlocking. 
    upgrades.granny.isUnlocked ? buyGrannys.innerHTML = `
    <img src="img/granny.png" alt="granny icon" height="30px" width="30px" style="margin-right: 20px;">
    <h3>GRANNY</h3>
    <button onclick="buyUpgrade('granny')">Buy</button> ` : buyGrannys.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.granny.isUnlocked ? granny.innerHTML = `Bought: ${upgrades.granny.amount} Cost: $${upgrades.granny.cost}` : granny.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('granny')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.granny.cost}</button></div>`;

    upgrades.farm.isUnlocked ? buyFarms.innerHTML = `
    <img src="img/farm.png" alt="farm icon" height="30px" width="30px" style="margin-right: 20px;">
    <h3>FARM</h3>
    <button onclick="buyUpgrade('farm')">Buy</button> ` : buyFarms.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.farm.isUnlocked ? farm.innerHTML = `Bought: ${upgrades.farm.amount} Cost: ${upgrades.farm.cost}` : farm.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('farm')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.farm.cost}</button></div>`;
    
    upgrades.mine.isUnlocked ? buyMines.innerHTML = `
    <img src="img/mine.png" alt="mine icon" height="30px" width="30px" style="margin-right: 20px;">
    <h3>MINE</h3>
    <button onclick="buyUpgrade('mine')">Buy</button> ` : buyMines.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.mine.isUnlocked ? mine.innerHTML = `Bought: ${upgrades.mine.amount} Cost: ${upgrades.mine.cost}` : mine.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('mine')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.mine.cost}</button></div>`;
    
    upgrades.factory.isUnlocked ? buyFactories.innerHTML = `
    <img src="img/factory.png" alt="factory icon" height="30px" width="30px" style="margin-right: 20px;">
    <h3>FACTORY</h3>
    <button onclick="buyUpgrade('factory')">Buy</button> ` : buyFactories.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.factory.isUnlocked ? factory.innerHTML = `Bought: ${upgrades.factory.amount} Cost: ${upgrades.factory.cost}` : factory.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('factory')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.factory.cost}</button></div>`;
    
    upgrades.bank.isUnlocked ? buyBanks.innerHTML = `
    <img src="img/bank.png" alt="bank icon" height="30px" width="30px" style="margin-right: 20px;">
    <h3>BANK</h3>
    <button onclick="buyUpgrade('bank')">Buy</button> ` : buyBanks.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.bank.isUnlocked ? bank.innerHTML = `Bought: ${upgrades.bank.amount} Cost: ${upgrades.bank.cost}` : bank.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('bank')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.bank.cost}</button></div>`;
}

function cookieClick(x) {
    cookies += x; // Add one cookie per click 
    updateCookies();
}

function unlockUpgrade(upgrade) {
    let x = upgrade;
    if (cookies >= upgrades[x].cost) {
        cookies -= upgrades[x].cost;
        upgrades[x].isUnlocked = true;
        updateCookies();
        updateUpgrades();
    }
}

function buyUpgrade(upgrade) {
    let x = upgrade;
    if ((cookies >= upgrades[x].cost) && upgrades[x].isUnlocked) {
        cookies -= upgrades[x].cost;
        upgrades[x].amount++;
        upgrades[x].cost *= 2;
        updateCookies();
        updateUpgrades();
    }
}

updateCookies(); // Initial cookie counter start
updateUpgrades(); // Initial upgrade counter start