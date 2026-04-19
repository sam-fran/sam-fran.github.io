const inputEl = document.getElementById("input");
const resultsEl = document.getElementById("results");
const words = ["pear", "apple", "goat"];

function inputChanged() {
const query = inputEl.value.trim().toLowerCase();
const matches = query ? words.filter(word => word.toLowerCase().includes(query)) : words;

resultsEl.innerHTML = "";

function addResult(text) {
    const el = document.createElement("div");
    el.style = `
        border:2px black solid;
        border-radius:5px;
        padding:2px;
        margin:2px;
    
    `
    el.textContent = text;
    resultsEl.appendChild(el);
}

if (matches.length === 0) {
    addResult("No matches");
    return;
}

matches.forEach(match => addResult(match));
}

inputChanged();