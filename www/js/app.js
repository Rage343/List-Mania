var taskList = [];

function addTask()
{
    var task = document.getElementById("inputValue").value;
    document.getElementById("inputValue").value ="";
    taskList.push(task);
    displayList();
}

function removeTask()
{
    var arrayId = this.getAttribute("id");
    taskList.splice(arrayId, 1);
    displayList();
}

function displayList()
{
    var taskListContent = "<ul>";
    for(var i = 0; i < taskList.length; i++)
    {
        taskListContent += "<li>"+taskList[i]+"  <button class='deleteTask' id='"+i+"'>Remove</button></li>";

    }
    taskListContent += "</ul>";
    document.getElementById("TaskListValue").innerHTML = taskListContent;

    var removeBtnList = document.getElementsByClassName("deleteTask");
    for(i = 0; i<removeBtnList.length; i++)
    {
        removeBtnList[i].addEventListener("click", removeTask);
    }

}

displayList();
document.getElementById("Add").addEventListener("click", addTask);