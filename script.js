console.log("Room Rental Website Loaded");

function showTab(tabId) {

  // Hide all tab contents
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active button
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected tab
  document.getElementById(tabId).classList.add('active');

  // Activate clicked button
  event.currentTarget.classList.add('active');
}