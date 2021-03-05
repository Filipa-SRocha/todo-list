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

function makeCheckbox(){
    const customCheckbox = document.createElement("div");
    const label= document.createElement("label");
    label.classList.add("checkbox-container");
    const checkButton = document.createElement("input");

    label.setAttribute("for", "check");
    label.textContent=" ";
    checkButton.type="checkbox";
    checkButton.id="check";
    checkButton.classList.add("visually-hidden-checkbox");

    customCheckbox.classList.add("custom-checkbox");

    label.appendChild(checkButton);
    label.appendChild(customCheckbox);

    return label;
}

function displayTask(task){
    const tasksDiv=document.querySelector("#tasks-div");
    const thisTaskDiv=document.createElement("div");
    const customCheckbox = makeCheckbox();

    const titleParag = makeP("display-task", "display-task-title",task.title);
    
    thisTaskDiv.appendChild(customCheckbox);
    thisTaskDiv.appendChild(titleParag);

    tasksDiv.appendChild(thisTaskDiv);
}

export {makeTask, displayTask};