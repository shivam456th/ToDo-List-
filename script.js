const inptBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");

function AddTask() {
    if (inptBox.value==="") {
        alert("your must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inptBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u2716";
        li.append(span)
    }
    inptBox.value="";
    saveData()
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        console.log(e);
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();