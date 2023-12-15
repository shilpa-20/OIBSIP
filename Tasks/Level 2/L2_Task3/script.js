const inputbox = document.getElementById("inputbox");
const list = document.getElementById("list");

function addTask() {
    if (inputbox.value === '') {
        alert("you must Write Something");

    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

list.addEventListener("click", function(e) {
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
    localStorage.setItem("data", list.innerHTML);
}
function showTask() {
    list.innerHTML = localStorage.getItem("data");

}
showTask();
