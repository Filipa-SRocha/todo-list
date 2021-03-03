//task factory
const taskFactory = (title, description, date, priority) =>{

    return {title, description, date, priority}; 
};


function makeTask(){
    const title = document.querySelector("#input-title").value;
    const description= document.querySelector("#input-description").value;
    const date= document.querySelector("#input-date").value;
    const priority = document.querySelector("#input-priority").value;

    const task= taskFactory(title, description, date, priority);

    return task;
}

function makeP(pclass, id ,text){
    const paragraph = document.createElement("p");
    paragraph.class = pclass;
    paragraph.textContent = text;

    return paragraph;
}


function displayTask(task){
    const tasksDiv=document.querySelector("#tasks-div");
    const thisTaskDiv=document.createElement("div");

    const checkButton = document.createElement("input");
    checkButton.type="checkbox";

    const titleParag = makeP("display-task", "display-task-title",task.title);
    
    thisTaskDiv.appendChild(checkButton);
    thisTaskDiv.appendChild(titleParag);

    tasksDiv.appendChild(thisTaskDiv);
}

export {makeTask, displayTask};