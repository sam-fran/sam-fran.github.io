const inputEl = document.getElementById("input");
const resultsEl = document.getElementById("results");
const words = ["people", "number", "called", "system", "public", "school", "should", "around", "family", "health", "during", "always", "period", "service", "toward", "enough", "policy", "appear", "market", "expect", "nation", "course", "change", "result", "member", "reason", "before", "moment", "office", "return", "action", "person", "others", "record", "social", "effect", "little", "within", "nature", "matter", "center", "common", "recent", "myself", "series", "animal", "factor", "decade", "author", "accept"];

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