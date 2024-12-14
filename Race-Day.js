let raceNum = Math.floor(Math.random() * 1000); // Generate a random race number between 0 and 999
let early = true; // Boolean to indicate if the runner registered early
let age = 19; // Runner's age

// If the runner is an early adult, add 1000 to their race number
if (early && age > 18) {
  raceNum += 1000;
}

// Define a key based on `early` and `age` to represent race conditions
let raceCase;
if (early && age > 18) {
  raceCase = "earlyAdult"; // Case for early adults
} else if (!early && age > 18) {
  raceCase = "lateAdult"; // Case for late adults
} else if (age < 18) {
  raceCase = "minor"; // Case for minors
} else {
  raceCase = "invalid"; // Case for invalid inputs
}

// Use a switch statement to handle race start times based on raceCase
switch (raceCase) {
  case "earlyAdult":
    // Early adults race at 09:00 am
    console.log(`Your race starts at 09:00 am and your race number is ${raceNum}`);
    break;

  case "lateAdult":
    // Late adults race at 11:00 am
    console.log(`Your race starts at 11:00 am and your race number is ${raceNum}`);
    break;

  case "minor":
    // Minors (under 18) race at 11:30 pm
    console.log(`Your race starts at 11:30 pm and your race number is ${raceNum}`);
    break;

  default:
    // For invalid inputs or cases not covered
    console.log("Sorry! Come to the registration counter.");
    break;
}
