document.getElementById("addPersonForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    const response = await fetch("http://localhost:5000/api/add-missing", {
        method: "POST",
        body: formData
    });

    const result = await response.json();
    document.getElementById("message").innerText = result.message;
});

