// DS ASGN STARTER TEMPLATE

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'display-all') {
        outputEl.innerHTML = 'Display All';
    } else if (selection == 'display-range') {
        outputEl.innerHTML = 'Display Range';
    } else if (selection == 'generous-donor') {
        outputEl.innerHTML = 'Generous Donor';
    } else if (selection == 'hacker-attack') {
        outputEl.innerHTML = 'Hacker Attack';
    } else if (selection == 'investment-stats') {
        outputEl.innerHTML = 'Investment Stats';
    } else if (selection == 'add-account') {
        outputEl.innerHTML = 'Add Account';
    } else if (selection == 'remove-low-accounts') {
        outputEl.innerHTML = 'Remove Low Accounts';
    } else if (selection == 'robin-hood') {
        outputEl.innerHTML = 'Robin Hood';
    }
}