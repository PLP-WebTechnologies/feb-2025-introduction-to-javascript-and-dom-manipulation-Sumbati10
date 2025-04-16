// Change text content when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("intro").textContent = "The text content has been changed!";
});

// Change CSS styles when button is clicked
document.getElementById("changeStyleBtn").addEventListener("click", function() {
    document.getElementById("intro").classList.add("highlight");
});

// Add a new element when the button is clicked
document.getElementById("addElementBtn").addEventListener("click", function() {
    const newElement = document.createElement("div");
    newElement.textContent = "This is a newly added element.";
    newElement.classList.add("new-element");
    document.getElementById("newElementContainer").appendChild(newElement);
});

// Remove the new element when the button is clicked
document.getElementById("removeElementBtn").addEventListener("click", function() {
    const newElementContainer = document.getElementById("newElementContainer");
    if (newElementContainer.lastChild) {
        newElementContainer.removeChild(newElementContainer.lastChild);
    }
});

