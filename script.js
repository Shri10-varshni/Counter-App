function incrementor() {
    let count = document.getElementById("my-count");
    count.innerText = Number(count.innerText) + 1;
}

function decrementor() {
    let count = document.getElementById("my-count");
    count.innerText = Number(count.innerText) - 1;
}

function saver() {
    let saved = document.getElementById("prev-saved");
    let count = document.getElementById("my-count");
    if (saved.textContent == "Saved Counts: None") {
        saved.textContent = "Saved Counts: " + count.innerText;
    } else {
        saved.textContent += " - " + count.innerText;
    }
}

function updateButtonLabels() {
    const decButton = document.getElementById("dec-btn");
    const incButton = document.getElementById("inc-btn");
    if (window.innerWidth <= 600) {
        decButton.textContent = "Dec";
        incButton.textContent = "Inc";
    } else {
        decButton.textContent = "Decrement";
        incButton.textContent = "Increment";
    }
}

updateButtonLabels();

window.addEventListener("resize", updateButtonLabels);
