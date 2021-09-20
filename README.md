# Drug Search
by Mason Aviles

Search interaction data between drugs

Tech used:
- React
- React Hooks: useState, useEffect

## Context
Ro’s platform enables physicians to diagnose patients and prescribe medications for many common conditions. When prescribing medications, our physicians are constantly looking for a risk known as a drug interaction, which occurs when a patient's response to a drug is affected by factors such as food, supplements, environmental factors, other drugs or disease.
At Ro, we dedicate ourselves to ensuring the safety of our patients. Before prescribing any medication, we ask patients to tell us any other drugs they’re currently taking, which allows our physicians to find any potential risks the patient may face by introducing a new medication.

## Problem
Given a window.interactions global variable containing a list of drug-drug interactions, build a UI tool that accepts a space-separated list of drugs per line (multiple lines of input are allowed) and determines if there is a risk of interaction between any drugs in the list.
If there are multiple interactions detected for a single line of input, the program should return the most severe interaction. If there are multiple interactions of the same severity, the program should return the interaction that appears first in the interactions list.
Each line of input should generate a line of output in the same order, and with the following format:
{SEVERITY}: {interaction message}
Note: it is important that the program does not output anything other than the result matching the pattern above (such as debugging information). See the examples below for more detail.

## Example Input/Output
Note: all examples are based on the interactions.json file included with this description. Interaction checks for each line should happen on user submit of the UI tool.

In order for tests to pass, you will need to have elements on the page with the following IDs:
* input element - drug-input
* submit button - submit-button
* result output - drug-output
Input:
sildenafil tamsulosin valaciclovir
sildenafil ibuprofen
valaciclovir doxepin ticlopidine ibuprofen
Output:
MODERATE: Sildenafil may potentiate the hypotensive effect of alpha blockers, resulting in symptomatic hypotension in some patients.
No interaction
MAJOR: Valaciclovir may decrease the excretion rate of Doxepin which could result in a higher serum level.
Constraints Number of medications provided in input array between 1 and 20 Number of interactions provided in the JSON object between 1 and 10,000
* [execution time limit] 60 seconds
