// Popup Basic - JavaScript for the popup interface

// Track click count
let clickCount = 0;

// Get DOM elements
const clickMeBtn = document.getElementById('clickMe');
const counterDisplay = document.getElementById('counter');
const messageDiv = document.getElementById('message');

// Handle button click
clickMeBtn.addEventListener('click', () => {
  clickCount++;
  
  // Update the counter display
  counterDisplay.textContent = clickCount;
  
  // Show a success message
  messageDiv.textContent = `Button clicked ${clickCount} time${clickCount === 1 ? '' : 's'}!`;
  messageDiv.className = 'success';
  
  // Log to console (visible in popup dev tools)
  console.log('Popup clicked:', clickCount, 'times');
});

// Initialize - log when popup opens
console.log('Popup Basic initialized');

// Optional: Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    clickMeBtn.click();
  }
});
