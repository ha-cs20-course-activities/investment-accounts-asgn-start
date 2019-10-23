// INVESTMENT ACCOUNTS ASSIGNMENT

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 500;

// Global Variables
let accounts = [1000, 2000, 3000, 4000, 5000, 6000];
let max = 6000; // array values should be b/t 0 and max

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / accounts.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < accounts.length; i++) {
        // Calculate scaled bar height based on cnv.height and canvasMax
        let barHeight = accounts[i] * (cnv.height / max);

        ctx.fillRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);
        ctx.strokeRect(i * barWidth, cnv.height - barHeight, barWidth, barHeight);        
    }

    // Request another Animation Frame
    requestAnimationFrame(draw);
}

// MAIN MENU EVENTS

// DOM Elements
let outputEl = document.getElementById('output');

// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'generous-donor') {
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