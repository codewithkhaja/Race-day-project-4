
# Race Registration Program

This program simulates a race registration system that assigns race numbers and start times to participants based on their age and registration status (early or late). It also generates a random race number for each participant.

---

## Features
- Assigns a random race number between 0 and 999.
- Adds 1000 to the race number for early adult registrants.
- Determines race start times based on age and registration status.
- Provides feedback for invalid or missing input conditions.

---

## Logic Overview

### Variables
1. **`raceNum`**:
   - A random number between 0 and 999 is generated using `Math.random()` and `Math.floor()`.
   - For early adult registrants (age > 18), 1000 is added to this number.

2. **`early`**:
   - A boolean value (`true` or `false`) indicating whether the runner registered early.

3. **`age`**:
   - An integer representing the age of the participant.

### Decision-Making Process
The program determines the start time and race number based on the following conditions:

1. **Early Adult (Age > 18 and registered early):**
   - Start time: `09:00 am`
   - Race number: Random number + 1000.

2. **Late Adult (Age > 18 and registered late):**
   - Start time: `11:00 am`
   - Race number: Random number (no additional increment).

3. **Minor (Age < 18):**
   - Start time: `11:30 pm`
   - Race number: Random number (no additional increment).

4. **Invalid Cases:**
   - If none of the above conditions are met (e.g., age = 18 or invalid data), the program prompts the user to visit the registration counter.

---

## How the Program Works

1. **Initial Setup:**
   - A random race number is generated.
   - The user's `age` and `early` status are set.

2. **Condition Evaluation:**
   - The program evaluates conditions using a combination of `if-else` or a `switch` statement (both approaches are implemented).
   - The race number is adjusted (if necessary), and the start time is assigned based on the participant's details.

3. **Output:**
   - The program outputs the race start time and race number to the console.
   - For invalid inputs, it displays a message asking the participant to visit the registration counter.

---

## Example Outputs

1. **Early Adult (age = 25, early = true):**
   ```
   Your race starts at 09:00 am and your race number is 1456
   ```

2. **Late Adult (age = 30, early = false):**
   ```
   Your race starts at 11:00 am and your race number is 756
   ```

3. **Minor (age = 16):**
   ```
   Your race starts at 11:30 pm and your race number is 523
   ```

4. **Invalid Case (age = 18):**
   ```
   Sorry! Come to the registration counter.
   ```

---

## How to Run
1. Copy the code into a JavaScript file (e.g., `raceRegistration.js`).
2. Run the file using Node.js:
   ```bash
   node raceRegistration.js
   ```
3. Observe the output in the console.

---

## Possible Enhancements
- Add input validation for `age` and `early` to prevent invalid entries.
- Allow user input for `age` and `early` using a prompt or a UI form.
- Include more race categories (e.g., senior citizens).

---

## Notes
- This program demonstrates conditional logic (`if-else` and `switch`), random number generation, and basic control flow in JavaScript.
- Designed for educational purposes to practice decision-making constructs in JavaScript.
