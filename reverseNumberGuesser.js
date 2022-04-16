"use strict";
setTimeout(() => {
  let firstNumber = 1;
  let lastNumber = 100;
  let midNumber = Math.floor(lastNumber / 2);
  let turns = 0;
  alert(`Pick a number between ${firstNumber} and ${lastNumber}`);
  while (lastNumber - firstNumber > 0) {
    let size = prompt(
      `Is your number higher or lower than ${midNumber} or a bingo?`
    ).toLowerCase();
    console.log(size);
    if (size === "lower") {
      lastNumber = midNumber;
      midNumber = Math.round((lastNumber + firstNumber) / 2);
      turns++;
    } else if (size === "higher") {
      firstNumber = midNumber;
      midNumber = Math.round((lastNumber + firstNumber) / 2);
      turns++;
    } else if (size === "bingo") {
      alert(`Your number is ${midNumber}
(and it took me ${turns} turns to guess your number!)`);
      break;
    } else if (size === "cancel") {
      break;
    } else {
      alert(`Please enter either "higher" or "lower" or "bingo "`);
    }
  }
}, 20);
