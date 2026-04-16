const user = {
  name: "User",
  visits: 0
};

const tips = [
  "Drink at least 8 glasses of water daily.",
  "Sleep at least 7–8 hours every night.",
  "Exercise for 30 minutes daily.",
  "Eat more fruits and vegetables.",
  "Take breaks from screens regularly."
];

const greetingEl = document.getElementById("greeting");
const tipEl = document.getElementById("tip");

function greetUser() {
  let storedName = localStorage.getItem("username");

  if (!storedName) {
    storedName = "Guest";
  }

  greetingEl.textContent = `Welcome, ${storedName}`;
}

function showTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipEl.textContent = `Health Tip: ${tips[randomIndex]}`;
}

function trackVisits() {
  let visits = localStorage.getItem("visits");

  if (!visits) {
    visits = 0;
  }

  visits++;

  localStorage.setItem("visits", visits);

  console.log(`You have visited ${visits} times`);
}

greetUser();
showTip();
trackVisits();