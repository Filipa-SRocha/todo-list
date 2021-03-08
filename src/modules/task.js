//task factory
const taskFactory = (title, description, date, priority, id) =>{

    return {title, description, date, priority, id}; 
};


function makeTask(index){
    const title = document.querySelector("#input-title").value;
    const description= document.querySelector("#input-description").value;
    const date= document.querySelector("#input-date").value;
    const priority = document.querySelector("#input-priority").value;
    const id= index;
    const task= taskFactory(title, description, date, priority, id);

    return task;
}

function makeP(pclass, id ,text){
    const paragraph = document.createElement("p");
    paragraph.class = pclass;
    paragraph.textContent = text;

    return paragraph;
}

function makeCheckbox(index){
    const customCheckbox = document.createElement("div");
    const label= document.createElement("label");
    label.classList.add("checkbox-container");
    const checkButton = document.createElement("input");

    label.setAttribute("for", "check"+index);
    label.textContent=" ";
    checkButton.type="checkbox";
    checkButton.id="check"+index;
    checkButton.classList.add("visually-hidden-checkbox");

    customCheckbox.classList.add("custom-checkbox");

    label.appendChild(checkButton);
    label.appendChild(customCheckbox);

    return label;
}

function displayTask(task){
    const tasksDiv=document.querySelector("#tasks-div");
    const thisTaskDiv=document.createElement("div");
    thisTaskDiv.classList.add("one-task");
    const customCheckbox = makeCheckbox(task.id);
    

    const titleParag = makeP("display-task", "display-task-title",task.title);
    
    thisTaskDiv.appendChild(customCheckbox);
    thisTaskDiv.appendChild(titleParag);

    tasksDiv.appendChild(thisTaskDiv);
}

function displayAllTasks(taskArray){
    taskArray.forEach(task => displayTask(task));
}

function updateTasks(taskArray){
    const taskDiv=document.querySelectorAll(".one-task");
    taskDiv.forEach(task => task.remove());

    if (taskArray.length>0) displayAllTasks(taskArray);
}

function showTaskDiv(){
    const mainDiv= document.querySelector("#main-app-div");
    mainDiv.style.display="block";
}

export {makeTask, displayTask, showTaskDiv, updateTasks};