
//command line arguments for beeps
const beepArgs = process.argv.slice(2);

//check if no numbers are provided
if (beepArgs.length === 0) {
  console.log("No numbers are provided");
  return 0;
} else {
  for (let beep of beepArgs) {
    //check if an input is a negative number
    if (Number(beep) < 0) {
      console.log("An input is a negative number");
      return 0;
    }
    //check if input is not a number
    if (!Number(beep)) {
      console.log("An input is not a number");
      return 0;
    }
  }
}

//convert string into number
var beeps = beepArgs.map((s) => parseInt(s));
//sorting beeps
beeps.sort(function (a, b) { return a - b });

var soundTime = [];
var lastBeep = 0;

//calculate the time betwwen two beeps
for (let i = 0; i < beeps.length; i++) {
  soundTime[i] = beeps[i] - lastBeep;
  lastBeep = beeps[i];
}

var delay = 0;
var index = 0;
for (let beep of beeps) {
  delay = delay + (soundTime[index] * 1000);
  setTimeout(() => {
    process.stdout.write('.')
    process.stdout.write(`\tbeep at ${beep} seconds\n`);
    //code for beep, but this line is not working due to macOS
    process.stdout.write('\x07');
  }, delay)
  index++;
}

// node timer1.js 10 3 5 15 9 

setTimeout(() => {
  console.log();
}, delay)
