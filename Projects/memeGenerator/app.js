// Get form and memes container references
const memeForm = document.getElementById("meme-form");
const memesContainer = document.getElementById("memes-container");

// Event listener for form submission
memeForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get input values
    const topText = document.getElementById("top-text").value;
    const bottomText = document.getElementById("bottom-text").value;
    const imageUrl = document.getElementById("image-url").value;

    // Validate input values
    if (!topText || !bottomText || !imageUrl) {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new meme div
    const memeDiv = document.createElement("div");
    memeDiv.className = "meme";

    // Create meme content (image and text)
    memeDiv.innerHTML = `
        <img src="${imageUrl}" alt="Meme Image">
        <div class="delete-button" onclick="deleteMeme(this)">X</div>
        <div class="top-text">${topText}</div>
        <div class="bottom-text">${bottomText}</div>
    `;

    // Append meme to memes container
    memesContainer.appendChild(memeDiv);

    // Clear form fields
    memeForm.reset();
});

// Function to delete a meme
function deleteMeme(deleteButton) {
    const memeDiv = deleteButton.parentElement;
    memeDiv.remove();
}