const eventList = document.getElementById("eventList");

function addEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (!title || !date) {
    alert("Please enter title and date");
    return;
  }

  if (eventList.querySelector(".empty")) {
    eventList.innerHTML = "";
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${title}</strong><br>
    ${date} | ${category}<br>
    ${description}
  `;

  eventList.appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

function clearEvents() {
  eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
}

function addSample() {
  eventList.innerHTML = "";
  const samples = [
    "Tech Conference - 2026-02-15",
    "Workshop on AI - 2026-03-01",
    "Team Meeting - 2026-03-10"
  ];

  samples.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    eventList.appendChild(li);
  });
}

/* DOM Manipulation Demo */
const original = document.getElementById("original");

document.getElementById("innerHTML").innerHTML =
  "innerHTML: " + original.innerHTML;

document.getElementById("innerText").innerText =
  "innerText: " + original.innerText;

document.getElementById("textContent").textContent =
  "textContent: " + original.textContent;

/* Key Press Demo */
document.addEventListener("keydown", function (e) {
  document.getElementById("keyPress").innerText =
    "You pressed: " + e.key;
});
