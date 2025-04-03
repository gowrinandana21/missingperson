document.addEventListener("DOMContentLoaded", async function() {
    const res = await fetch("http://localhost:5000/api/missing");
    const missingPersons = await res.json();

    const missingList = document.getElementById("missingList");

    missingPersons.forEach(person => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${person.photo}" alt="Missing Person">
            <h3>${person.name}</h3>
            <p><strong>Last Seen:</strong> ${person.last_seen}</p>
            <p><strong>Location:</strong> ${person.location}</p>
            <p><strong>Body Metrics:</strong> ${person.body_metrics}</p>
        `;

        missingList.appendChild(card);
    });
});
