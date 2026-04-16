const services = [
  {
    title: "Nutrition Guidance",
    description: "Learn basic healthy eating habits and balanced diet tips.",
    icon: "🥗"
  },
  {
    title: "Lifestyle Advice",
    description: "Improve sleep, exercise, and daily routines for better health.",
    icon: "🏃‍♂️"
  },
  {
    title: "Basic Health Awareness",
    description: "Understand common symptoms and when to seek medical help.",
    icon: "🩺"
  }
];

const container = document.getElementById("servicesContainer");

function displayServices() {
  services.forEach(service => {
    container.innerHTML += `
      <div class="card">
        <h3>${service.icon} ${service.title}</h3>
        <p>${service.description}</p>
      </div>
    `;
  });
}

displayServices();