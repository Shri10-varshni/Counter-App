function incrementor() {
    let count = document.getElementById("my-count")
    count.innerText = Number(count.innerText)+1
}

function decrementor() {
    let count = document.getElementById("my-count")
    count.innerText = Number(count.innerText)-1
}

function saver() {
    let saved = document.getElementById("prev-saved")
    let count = document.getElementById("my-count")
    if (saved.textContent == "Saved Counts: None") {
        saved.textContent = "Saved Counts: " + count.innerText
    }
    else(saved.textContent += " - " + count.innerText)
        
}