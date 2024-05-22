
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var newTask = document.createElement("li");
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = ""; // Clear input field
    }
}
deleteTask=()=> {
    taskList.textContent="";
}

erase=()=>{
    let newStr = taskInput.textContent.slice(0, -1);
    taskInput.textContent=newStr.value;
}