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

document.addEventListener("DOMContentLoaded", () => {
const foodItems = [
  {
    name: "Butter Chicken",
    description: "Soft tender Chicken with the authentic spices of India",
    image: "./images/food card images/butter_chicken.jpg",
    type: "non-veg"
  },
  {
    name: "Chicken Tikka",
    description: "Spicy grilled Chicken cheese with spices",
    image: "./images/food card images/chicken_tikka.jpg",
    type: "non-veg"
  },
  {
    name: "Paneer Tikka",
    description: "Spicy grilled cottage cheese with veggies",
    image: "./images/food card images/paneer_tikka.jpeg",
    type: "veg"
  },
  {
    name: "Choco Lava Cake",
    description: "Puffy outer layer with the burst of choco fountain inside",
    image: "./images/food card images/choco_lava.jpg",
    type: "veg"
  },
  {
    name: "Mango Lassi",
    description: "Smooth mango pulps with the soothing sweet texture",
    image: "./images/food card images/mango_lassi.jpg",
    type: "all"
  },
  {
    name: "Butter Naan",
    description: "Soft, fluffy Indian flatbread brushed with rich melted butter",
    image: "./images/food card images/butter_naan.jpg",
    type: "veg"
  },
  {
    name: "Virgin Mojito",
    description: "Gulp of the glacier, refreshing as the night shower",
    image: "./images/food card images/virgin_mojito.jpg",
    type: "all"
  },
  {
    name: "Schezwan Momo",
    description: "Spice with the flavours of hills, top notch choice for a quickee",
    image: "./images/food card images/schezwan_momo.jpg",
    type: "veg"
  },
  {
    name: "Chicken Noodles",
    description: "Chicken mashup with the Noodles",
    image: "./images/food card images/chicken-noodles.avif",
    type: "non-veg"
  },
  {
    name: "Fish Fry",
    description: "Touch of some sea with decent spices",
    image: "./images/food card images/fish-cutlet.jpg",
    type: "non-veg"
  }
];
console.log(foodItems);
const container = document.querySelector(".food-card-container"); // Make sure your HTML has this container

foodItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "food-card";
  card.setAttribute("data-type", item.type);

  card.innerHTML = `
    <div class="food-info">
      <div class="food-name national-park-bold">${item.name}</div>
      <div class="food-description national-park-thin">${item.description}</div>
    </div>
    <div class="food-image">
      <img src="${item.image}" alt="${item.name}">
    </div>
  `;

  container.appendChild(card);
});
});

function setFilter(type) {
  const cards = document.querySelectorAll('.food-card');
  cards.forEach(card => {
    const foodType = card.getAttribute('data-type');
    card.style.display = (type === 'all' || type === foodType) ? 'flex' : 'none';
  });
}
