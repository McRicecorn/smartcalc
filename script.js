// Liste von Jobs (könnte später aus einer API kommen)
const jobs = [
  { titel: "Werkstudent IT bei Startup X", skills: "Java, Git, REST APIs" },
  { titel: "Werkstudent Webentwicklung bei Agentur Y", skills: "HTML, CSS, JavaScript" },
  { titel: "Werkstudent Data Science bei Unternehmen Z", skills: "Python, SQL, Machine Learning" }
];

// HTML-Element finden, wo Jobs rein sollen
const jobListe = document.getElementById("job-list");

// Jobs ins HTML einfügen
jobs.forEach((job, index) => {
  const jobDiv = document.createElement("div");
  jobDiv.className = "job";
  jobDiv.innerHTML = `
    <h2>${job.titel}</h2>
    <p>${job.skills}</p>
    <button onclick="bewerben(${index})">Bewerben</button>
  `;
  jobListe.appendChild(jobDiv);
});

// Funktion für Button-Klick
function bewerben(index) {
  alert(`Du hast dich auf "${jobs[index].titel}" beworben!`);
}
