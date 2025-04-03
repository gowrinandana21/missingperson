document.addEventListener("DOMContentLoaded", async function() {
    const res = await fetch("http://localhost:5000/api/stats");
    const data = await res.json();

    document.getElementById("totalMissing").innerText = data.totalMissing;
    document.getElementById("foundPersons").innerText = data.foundPersons;
    document.getElementById("lastReported").innerText = data.lastReported;
});
