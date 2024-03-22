
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")
let totalEl = document.getElementById("total-el")

function increment() {
    console.log("clicked")
    count += 1
    console.log(count)
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}

function reset() {
    //delete everything in previus entries
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous entries: " + " "
}






