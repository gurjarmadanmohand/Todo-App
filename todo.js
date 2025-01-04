const inputBox = document.getElementById("input-box");
const listConainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        // alert("Write something to add");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listConainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();

}
listConainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listConainer.innerHTML);
}
function loadData() {
    listConainer.innerHTML = localStorage.getItem("data");
}
loadData();
