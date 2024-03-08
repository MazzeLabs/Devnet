const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Function to execute the script
function runGenerateScript() {
    const process = spawn('node', [path.join(__dirname, 'generateData.js')]);

    process.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    process.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    process.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
}

runGenerateScript();

setInterval(() => {
    runGenerateScript();
}, 60000);