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
    lab:
    {
        isUnlocked: false,
        cost: 500000,
        amount: 0,
        value: 50000
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
let currentCPS = 0;


let cookie = document.getElementById('cookie');

function animateCookie() {
    cookie.classList.add('clicked');
    setTimeout(function() {
      cookie.classList.remove('clicked');
    }, 300); // Adjust the duration of animation in milliseconds
  }

  let manualClicksIntervalID = null; // Variable to store the interval ID for manual clicks
  let autoclickerIntervalId = null; // Variable to store the interval ID for autoclicker
  let grannyIntervalId = null; // Variable to store the interval ID for grannys
  let farmIntervalId = null; // Variable to store the interval ID for farms
  let mineIntervalId = null; // Variable to store the interval ID for mines
  let factoryIntervalId = null; // Variable to store the interval ID for factories
  let labIntervalId = null; // Variable to store the interval ID for labs
  let bankIntervalId = null; // Variable to store the interval ID for banks


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

        if (upgrades.farm.amount > 0 && farmIntervalId === null) { // Check if farm is active and interval is not already set
            farmIntervalId = setInterval(() => {
                cookieClick((upgrades.farm.amount * upgrades.farm.value));
            }, (1000));
        } else if (upgrades.farm.amount === 0 && farmIntervalId !== null) { // Check if farm is not active and interval is set
                clearInterval(farmIntervalId); // Clear the interval
                farmIntervalId = null; // Reset interval ID
        }

        if (upgrades.mine.amount > 0 && mineIntervalId === null) { // Check if mine is active and interval is not already set
            mineIntervalId = setInterval(() => {
                cookieClick((upgrades.mine.amount * upgrades.mine.value));
            }, (1000));
        } else if (upgrades.mine.amount === 0 && mineIntervalId !== null) { // Check if mine is not active and interval is set
                clearInterval(mineIntervalId); // Clear the interval
                mineIntervalId = null; // Reset interval ID
        }

        if (upgrades.factory.amount > 0 && factoryIntervalId === null) { // Check if factory is active and interval is not already set
            factoryIntervalId = setInterval(() => {
                cookieClick((upgrades.factory.amount * upgrades.factory.value));
            }, (1000));
        } else if (upgrades.factory.amount === 0 && factoryIntervalId !== null) { // Check if factory is not active and interval is set
                clearInterval(factoryIntervalId); // Clear the interval
                factoryIntervalId = null; // Reset interval ID
        }

        if (upgrades.lab.amount > 0 && labIntervalId === null) { // Check if lab is active and interval is not already set
            labIntervalId = setInterval(() => {
                cookieClick((upgrades.lab.amount * upgrades.lab.value));
            }, (1000));
        } else if (upgrades.lab.amount === 0 && labIntervalId !== null) { // Check if lab is not active and interval is set
                clearInterval(labIntervalId); // Clear the interval
                labIntervalId = null; // Reset interval ID
        }

        if (upgrades.bank.amount > 0 && bankIntervalId === null) { // Check if bank is active and interval is not already set
            bankIntervalId = setInterval(() => {
                cookieClick((upgrades.bank.amount * upgrades.bank.value));
            }, (1000));
        } else if (upgrades.bank.amount === 0 && bankIntervalId !== null) { // Check if bank is not active and interval is set
                clearInterval(bankIntervalId); // Clear the interval
                bankIntervalId = null; // Reset interval ID
        }
      cookieCount.innerHTML = cookies;
      currentCPS = (upgrades.clicker.amount * upgrades.clicker.value) + (upgrades.granny.amount * upgrades.granny.value) + (upgrades.farm.amount * upgrades.farm.value) + (upgrades.mine.amount * upgrades.mine.value) + (upgrades.factory.amount * upgrades.factory.value) + (upgrades.lab.amount * upgrades.lab.value) + (upgrades.bank.amount * upgrades.bank.value);
      cps.innerHTML = currentCPS;
  }

function updateUpgrades() {
    let clicker = document.getElementById('clicker');

    let buyGrannys = document.getElementById('buyGrannys');
    let granny = document.getElementById('granny');

    let buyLabs = document.getElementById('buyLabs');
    let lab = document.getElementById('lab');

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
    <img src="img/awela.png" alt="granny icon" height="50px" width="50px" style="margin-right: 20px;">
    <h3>GRANNY</h3>
    <button onclick="buyUpgrade('granny')">Buy</button> ` : buyGrannys.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.granny.isUnlocked ? granny.innerHTML = `Bought: ${upgrades.granny.amount} Cost: $${upgrades.granny.cost}` : granny.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('granny')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.granny.cost}</button></div>`;

    upgrades.farm.isUnlocked ? buyFarms.innerHTML = `
    <img src="img/lagranja.jpg" alt="farm icon" height="50px" width="50px" style="margin-right: 20px;">
    <h3>FARM</h3>
    <button onclick="buyUpgrade('farm')">Buy</button> ` : buyFarms.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.farm.isUnlocked ? farm.innerHTML = `Bought: ${upgrades.farm.amount} Cost: ${upgrades.farm.cost}` : farm.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('farm')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.farm.cost}</button></div>`;
    
    upgrades.mine.isUnlocked ? buyMines.innerHTML = `
    <img src="img/dontgiveup.png" alt="mine icon" height="50px" width="50px" style="margin-right: 20px;">
    <h3>MINE</h3>
    <button onclick="buyUpgrade('mine')">Buy</button> ` : buyMines.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.mine.isUnlocked ? mine.innerHTML = `Bought: ${upgrades.mine.amount} Cost: ${upgrades.mine.cost}` : mine.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('mine')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.mine.cost}</button></div>`;
    
    upgrades.factory.isUnlocked ? buyFactories.innerHTML = `
    <img src="img/factory.png" alt="factory icon" height="50px" width="50px" style="margin-right: 20px;">
    <h3>FACTORY</h3>
    <button onclick="buyUpgrade('factory')">Buy</button> ` : buyFactories.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.factory.isUnlocked ? factory.innerHTML = `Bought: ${upgrades.factory.amount} Cost: ${upgrades.factory.cost}` : factory.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('factory')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.factory.cost}</button></div>`;

    upgrades.lab.isUnlocked ? buyLabs.innerHTML = `
    <img src="img/lab.jpg" alt="lab icon" height="50px" width="50px" style="margin-right: 20px;">
    <h3>RESEARCH LAB</h3>
    <button onclick="buyUpgrade('lab')">Buy</button> ` : buyLabs.innerHTML = `<div style="text-align: center"></div>`;
    upgrades.lab.isUnlocked ? lab.innerHTML = `Bought: ${upgrades.lab.amount} Cost: ${upgrades.lab.cost}` : lab.innerHTML = `<div style="text-align: center"><button onclick="unlockUpgrade('lab')" style="width: 40%; margin-left: 0;">Unlock for $${upgrades.lab.cost}</button></div>`;
    
    upgrades.bank.isUnlocked ? buyBanks.innerHTML = `
    <img src="img/banco.jpg" alt="bank icon" height="50px" width="50px" style="margin-right: 20px;">
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