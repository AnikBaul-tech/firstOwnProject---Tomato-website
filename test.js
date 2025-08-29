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
    name: "Mutton Handi",
    description: "Slow cooked Mutton with Indian Spices",
    image: "./images/food card images/mutton_handi.avif",
    type: "non-veg",
    price: 350,
    qty: "3 Pcs."
  },
  {
    name: "Butter Chicken",
    description: "Soft tender Chicken with the authentic spices of India",
    image: "./images/food card images/butter_chicken.jpg",
    type: "non-veg",
    price: 250,
    qty: "2 Pcs."
  },
  {
    name: "Chicken Tikka",
    description: "Spicy grilled Chicken cheese with spices",
    image: "./images/food card images/chicken_tikka.jpg",
    type: "non-veg",
    price: 280,
    qty: "1 Stick."
  },
  {
    name: "Paneer Tikka",
    description: "Spicy grilled cottage cheese with veggies",
    image: "./images/food card images/paneer_tikka.jpeg",
    type: "veg",
    price: 230,
    qty: "1 Stick."
  },
  {
    name: "Choco Lava Cake",
    description: "Puffy outer layer with the burst of choco fountain inside",
    image: "./images/food card images/choco_lava.jpg",
    type: "veg",
    price: 150,
    qty: "1 Pc."
  },
  {
    name: "Mango Lassi",
    description: "Smooth mango pulps with the soothing sweet texture",
    image: "./images/food card images/mango_lassi.jpg",
    type: "all",
    price: 100,
    qty: "1 Glass"
  },
  {
    name: "Butter Naan",
    description: "Soft, fluffy Indian flatbread brushed with rich melted butter",
    image: "./images/food card images/butter_naan.jpg",
    type: "veg",
    price: 150,
    qty: "2 Pcs."
  },
  {
    name: "Virgin Mojito",
    description: "Gulp of the glacier, refreshing as the night shower",
    image: "./images/food card images/virgin_mojito.jpg",
    type: "all",
    price: 120,
    qty: "1 Glass"
  },
  {
    name: "Schezwan Momo",
    description: "Spice with the flavours of hills, top notch choice for a quickee",
    image: "./images/food card images/schezwan_momo.jpg",
    type: "veg",
    price: 180,
    qty: "5 Pcs."
  },
  {
    name: "Chicken Noodles",
    description: "Chicken mashup with the Noodles",
    image: "./images/food card images/chicken-noodles.avif",
    type: "non-veg",
    price: 230,
    qty: "1 Full Plate"
  },
  {
    name: "Fish Fry",
    description: "Touch of some sea with decent spices",
    image: "./images/food card images/fish-cutlet.jpg",
    type: "non-veg",
    price: 180,
    qty: "1 Pc"
  },
  {
    name: "Chicken Biriyani",
    description: "fragrant, spiced rice dish layered with tender chicken caramelized onions and aromatic herbs",
    image: "./images/food card images/chicken_biriyani.avif",
    type: "non-veg",
    price: 250,
    qty: "1 Full Plate"
  },
  {
    name: "Capuccino",
    description: "Creamy coffee drink made with equal parts espresso, steamed milk, and milk foam.",
    image: "./images/food card images/capuccino.jpg",
    type: "all",
    price: 180,
    qty: "1 Cup"
  },
  {
    name: "Fried Rice and Chili Chicken",
    description: "Rice with the sauted veggies and tossed chicken with sauces",
    image: "./images/food card images/fried_rice_chicken.jpg",
    type: "non-veg",
    price: 200,
    qty: "1 Plate with 2Pcs. of Chicken"
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
      <div class="food-price-description national-park-thin">${item.price}₹ || Qty: ${item.qty}</div>
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

const searchInput = document.querySelector('.search_input');
const notKeyWord =['||','₹','Qty',':','Pcs','.'];

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.food-card');

  cards.forEach(card => {
    const name = card.querySelector('.food-name').textContent.toLowerCase();
    const desc = card.querySelector('.food-description').textContent.toLowerCase();
    const price = card.querySelector('.food-price-description').textContent.toLowerCase();

    const combinedText = `${name} ${desc} ${price}`;
    
      if (combinedText.includes(keyword)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
  });
});

const openBtn = document.getElementById("openFeedbackBtn");
const closeBtn = document.getElementById("closeFeedbackBtn");
const feedbackSection = document.getElementById("feedbackSection");
const feedbackForm = document.getElementById("feedbackForm");
const communityFeedback = document.getElementById("communityFeedback");

// Load feedbacks from localStorage
let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

// Show stored feedbacks on load
window.onload = () => {
  renderFeedbacks();
};

// Open Feedback Section
let isOpen = false;

openBtn.addEventListener("click", () => {
  isOpen = !isOpen; // Toggle the state

  if (isOpen) {
    feedbackSection.style.display = "flex";
  } else {
    feedbackSection.style.display = "none";
  }
});


// Close Feedback Section
closeBtn.addEventListener("click", () => {
  feedbackSection.style.display = "none";
});

// Handle Feedback Submission
feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("userName").value.trim();
  const feedback = document.getElementById("userFeedback").value.trim();

  if (name && feedback) {
    const newFeedback = { id: Date.now(), name, feedback };
    feedbacks.push(newFeedback);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    renderFeedbacks();
    feedbackForm.reset();
  }
});

// Render Feedbacks
function renderFeedbacks() {
  communityFeedback.innerHTML = "";
  feedbacks.forEach(fb => {
    const fbDiv = document.createElement("div");
    fbDiv.classList.add("feedback-card");
    fbDiv.innerHTML = `
      <strong>${fb.name}</strong>
      <p>${fb.feedback}</p>
      <button class="btn btn-sm btn-danger" onclick="deleteFeedback(${fb.id})">Delete</button>
    `;
    communityFeedback.appendChild(fbDiv);
  });
}

// Delete Feedback
function deleteFeedback(id) {
  feedbacks = feedbacks.filter(fb => fb.id !== id);
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  renderFeedbacks();
}

// Expose deleteFeedback to global scope
window.deleteFeedback = deleteFeedback;