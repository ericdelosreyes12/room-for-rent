console.log("Room Rental Website Loaded");

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(targetId) {

  tabButtons.forEach(button => {
    button.classList.remove('active');
  });

  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  const activeButton = document.querySelector(`[data-tab="${targetId}"]`);
  const activeContent = document.getElementById(targetId);

  activeButton.classList.add('active');

  setTimeout(() => {
    activeContent.classList.add('active');
  }, 100);
}

// Button Event Listeners

tabButtons.forEach(button => {

  button.addEventListener('click', () => {

    const target = button.getAttribute('data-tab');

    switchTab(target);

  });

}););

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