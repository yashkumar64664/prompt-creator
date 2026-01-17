const API_URL = " https://prompt-creator-2.onrender.com";

document.getElementById("promptForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const userInput = document.getElementById("userInput").value;
  const resultDiv = document.getElementById("result");

  resultDiv.innerText = "Generating...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userInput })
    });

    const data = await response.json();
    resultDiv.innerText = data.prompt || "No response from server";
  } catch (err) {
    resultDiv.innerText = "Error connecting to server";
    console.error(err);
  }
});
