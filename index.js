#!/usr/bin/env node

import chalk from 'chalk';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

// Sleep functions to wait for a specified time
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
const sleep2 = (ms = 4000) => new Promise((r) => setTimeout(r, ms));

// Function to return a Promise for figlet
const figletPromise = (text) => {
    return new Promise((resolve, reject) => {
        figlet(text, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

async function begin() {
    console.clear();
    const msg = 'Conner, Welcome to Hell ! !';
    const data = await figletPromise(msg);
    console.log(chalk.redBright(data));
}

async function connerHacked() {
    const rainbowTitle = chalkAnimation.rainbow('Conner Hacked! - Get shit on - Go Ducks! \n');
    await sleep2();
    rainbowTitle.stop();
}

async function handleSpinner(message) {
    const spinner = createSpinner(message).start();
    await sleep();
    spinner.success({ text: message.replace("Aquiring", "Acquired") });
}

async function hackConner() {
    await handleSpinner("Aquiring Conner O'Keefe's Internet History...");
    console.log("  Internet History: Collected");
    await handleSpinner("Checking for Pron Hub Account...");
    console.log("  Porn Hub Account: Found");
    await handleSpinner("Updating Conner O'Keefe's Facebook Relationship Status...");
    console.log("  Relationship Status: Single");
    await handleSpinner("Aquiring Conner O'Keefe's Phone Number...");
    console.log("  Phone Number: 614-571-7827");
    await handleSpinner("Aquiring Conner O'Keefe's Email Address...");
    console.log("  Email: conner_okeefe@yahoo.com");
    await handleSpinner("Aquiring Conner O'Keefe's Home Address...");
    console.log("  Home Address: 559 Harding Ln, Delaware, OH 43015");
    await handleSpinner("Aquiring Conner O'Keefe's Credit Card Number...");
    console.log("  Credit Card Number: Collected");
    await handleSpinner("Fetching Conner O'Keefe's Bank Statements...");
    console.log("  Bank Statements: Collected");
    await handleSpinner("Aquiring Conner O'Keefe's Social Security Number...");
    console.log("  Social Security: Collected");
    console.log(chalk.green("All information acquired successfully!"));
}

async function end(){
    const end_msg = `Go Ducks!`
    figlet(end_msg, (err, data) => {
        console.log(chalk.greenBright(data));
    });
}

// Execute functions in sequence
await begin();
await hackConner();
await end();
await connerHacked();
