const consultations = JSON.parse(localStorage.getItem("consultations")) || [];
const userName = localStorage.getItem("username");


const nameEl = document.getElementById("userName");
const latestEl = document.getElementById("latest");
const historyEl = document.getElementById("history");
const counterEl = document.getElementById("counter");


nameEl.textContent = userName ? `${userName}` : "Guest";


if (consultations.length === 0) {
  latestEl.innerHTML = `<p>No submissions found.</p>`;
  historyEl.innerHTML = `<p>No history available.</p>`;
} else {


  const latest = consultations[consultations.length - 1];

  latestEl.innerHTML = `
    <p><strong>Name:</strong> ${latest.name}</p>
    <p><strong>Age:</strong> ${latest.age}</p>
    <p><strong>Concern:</strong> ${latest.condition}</p>
    <p><strong>Details:</strong> ${latest.details}</p>
  `;

  consultations.forEach((item, index) => {
    historyEl.innerHTML += `
      <div class="history-item">
        <p><strong>#${index + 1}</strong></p>
        <p>${item.name} - ${item.condition}</p>
      </div>
    `;
  });


}

let count = localStorage.getItem("submissionCount");

if (!count) {
  count = 0;
}

count++;

localStorage.setItem("submissionCount", count);

counterEl.textContent = `Total Consultations Submitted: ${count}`;