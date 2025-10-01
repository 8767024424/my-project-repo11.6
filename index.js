// index.js (Updated with the fix)

const message = 'Application starting up...';

function init() {
  // eslint-disable-next-line no-console  <--- ADD THIS LINE to fix the console.log error
  console.log(message); 
  
  // Start the main application logic
  // ...
}

init();