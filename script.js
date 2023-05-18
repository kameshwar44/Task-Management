const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "X";
    li.appendChild(span);
    inputBox.value = "";
    savaData();
  }
}

listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    savaData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    savaData();
  }
});


function savaData(){
    localStorage.setItem("task", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("task");
}
showTask()