const botMessageElement = document.querySelector('.bot-message');

const messages = [
  "Welcome to TOMATO 🍅 — your hunger ends here!",
  "I am your Tomato-Bot to suggest the delicacies of the cutlery.",
  "Feeling spicy? Try our fiery Chicken Tikka 🌶️",
  "Sweet tooth alert! How about a Choco Lava Cake 🍫",
  "Season's pick: Mango Lassi is in! 🥭",
  "Craving comfort? Our Butter Naan & Paneer combo is unbeatable 🫓",
  "Need a refresh? Grab a chilled Virgin Mojito 🍹",
  "Try something new: Schezwan Momos are 🔥"
];

let messageIndex = 0;

function splitIntoCharacters(str) {
  return Array.from(str); //emojis and special characters
}

function typeMessage(text, element, speed = 60) {
  element.textContent = '';
  element.classList.add('typing');

  const chars = splitIntoCharacters(text);
  let i = 0;

  function typeNextChar() {
    if (i < chars.length) {
      element.textContent += chars[i];
      i++;
      setTimeout(typeNextChar, speed);
    } else {
      element.classList.remove('typing');
    }
  }

  typeNextChar();
}

function updateBotMessage() {
  const message = messages[messageIndex];
  typeMessage(message, botMessageElement);
  messageIndex = (messageIndex + 1) % messages.length;
}

// Initial message
updateBotMessage();

// Update every 10 seconds
setInterval(updateBotMessage, 10000);

const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });

  gl.viewport(0, 0, canvas.width, canvas.height);
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function setFilter(type) {
  const cards = document.querySelectorAll('.food-card');
  cards.forEach(card => {
    const foodType = card.getAttribute('data-type');
    card.style.display = (type === 'all' || type === foodType) ? 'flex' : 'none';
  });
}
