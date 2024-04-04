let upgrades = {
    clicker: 
    {
        cost: 10,
        amount: 0,
    },
    granny:
    {
        isUnlocked: false,
        cost: 100,
        amount: 0,
    },
    farm:
    {
        isUnlocked: false,
        cost: 1000,
        amount: 0,
    },
    mine:
    {
        isUnlocked: false,
        cost: 10000,
        amount: 0,
    },
    factory:
    {
        isUnlocked: false,
        cost: 100000,
        amount: 0,
    },
    bank:
    {
        isUnlocked: false,
        cost: 1000000,
        amount: 0,
    }
}

let cookies = 0;
let clickValue = 1;

function updateCookies() { //Update current cookie counter
    let cookieCount = document.getElementById('cookieCount');
    cookieCount.innerHTML = cookies;
}

function updateUpgrades() {
    let clicker = document.getElementById('clicker');
    let granny = document.getElementById('granny');
    let farm = document.getElementById('farm');
    let mine = document.getElementById('mine');
    let factory = document.getElementById('factory');
    let bank = document.getElementById('bank');

    clicker.innerHTML = `Bought: ${upgrades.clicker.amount} | Cost: $${upgrades.clicker.cost}`;
    upgrades.granny.isUnlocked ? granny.innerHTML = `Bought: ${upgrades.granny.amount} Cost: $${upgrades.granny.cost}` : granny.innerHTML = `<button onclick="unlockUpgrade('granny')">Unlock for $${upgrades.granny.cost}</button>`;
    farm.innerHTML = `Bought: ${upgrades.farm.amount} Cost: ${upgrades.farm.cost}`;
    mine.innerHTML = `Bought: ${upgrades.mine.amount} Cost: ${upgrades.mine.cost}`;
    factory.innerHTML = `Bought: ${upgrades.factory.amount} Cost: ${upgrades.factory.cost}`;
    bank.innerHTML = `Bought: ${upgrades.bank.amount} Cost: ${upgrades.bank.cost}`;
}

function cookieClick() {
    cookies += clickValue; // Add one cookie per click
    updateCookies();
}

function Interval(callback){
    return setInterval(callback, 1000); // 1 second interval for upgrades
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
        upgrades[x].cost *= 1.3;
        updateCookies();
        updateUpgrades();
    }
}

updateCookies(); // Initial cookie counter start
updateUpgrades(); // Initial upgrade counter start