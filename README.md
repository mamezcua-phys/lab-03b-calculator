# lab-03b-calculator

Outcome
===
User should be able to add two numbers. 
    - There should be two inputs and a button
    - When the button is clicked, the sum shows up on the page


Get DOM 
===
1) Grab the two inputs
   - Validate by logging them out
1) Grab the sum `span`: the place where we will inject the sum
   - Validate by logging it out
1) Grab the button
   - Validate by logging it out


Event Listener
===
1) We want to have an 'event listener' on the click of the button
   - Validate that the event listene is wired up by logging something ('Date') on click. 
2) When the user clicks the button: 
   - Get the values of the two inputs
   - Add together the VALUE of the two inputs
   - Inject the sum into our sum `span`