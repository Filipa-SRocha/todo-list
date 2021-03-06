import{format, parseISO, differenceInCalendarDays}  from 'date-fns';

//task factory
const taskFactory = (title, description, date, priority, id, done) => {
    

    return {title, description, date, priority, id, done}; 
};

function makeBtn(className, text, index){
    const btn = document.createElement("button");
    btn.classList.add(className);
    btn.textContent=text;
    btn.setAttribute("data-index", index);

    return btn;
}

function makeCheckbox(index, task){
    const customCheckbox = document.createElement("div");
    const label= document.createElement("label");
    label.classList.add("checkbox-container");
    const checkButton = document.createElement("input");

    label.setAttribute("for", "check"+index);
    label.textContent=" ";
    checkButton.type="checkbox";
    checkButton.id="check"+index;
    checkButton.classList.add("visually-hidden-checkbox");
    checkButton.checked = task.done;

    customCheckbox.classList.add("custom-checkbox");

    label.appendChild(checkButton);
    label.appendChild(customCheckbox);

    return label;
}

function makeP(pclass, id ,text){
    const paragraph = document.createElement("p");
    paragraph.class = pclass;
    paragraph.textContent = text;

    return paragraph;
}

function paintPriority(priorityLevel, divToPaint){
    if (priorityLevel == "medium") divToPaint.style.background = "rgba(255, 205, 5, 0.30)";
    else if (priorityLevel == "high") divToPaint.style.background = "rgba(248, 6, 6, 0.20)";
    else if (priorityLevel == "low") divToPaint.style.background = "rgba(5, 5, 5, 0.10)"
    else if (priorityLevel == "done") divToPaint.style.background = "white";
}

function makeTask(index){
    const title = document.querySelector("#input-title").value;
    const description= document.querySelector("#input-description").value;
    let date= document.querySelector("#input-date").value;
    console.log(date);
    const priority = document.querySelector("#input-priority").value;
    const id= index;
    let done = false;
    const task= taskFactory(title, description, date, priority, id, done);

    return task;
}

function populateForm(task){
    document.querySelector("#input-title").value = task.title;
    document.querySelector("#input-description").value = task.description;
    document.querySelector("#input-date").value = task.date;
    document.querySelector("#input-priority").value = task.priority;
    const index= task.id;
}

function exampleTask(){
    const description ="Go to the Odin Project and chose a path to get your web dev career started";
    const exTask = taskFactory("Finish the Odin Project", description, "2021-03-09", "high", 0);
    return exTask;
}

function displayTask(task){
    const tasksDiv=document.querySelector("#tasks-div");

    //this task Div
    const thisTaskDiv=document.createElement("div");
    thisTaskDiv.setAttribute("data-task-div-index", task.id);
    thisTaskDiv.classList.add("one-task");

    // task info
    const customCheckbox = makeCheckbox(task.id, task);
    let date;
    if(!task.date) date = format(new Date(), 'dd MMM');
    else date = format(parseISO(task.date), 'dd MMM');
    const dateParag= makeP("display-task", "display-task-date", date);
    const titleParag = makeP("display-task", "display-task-title",task.title);
    
    //button for collapsible details div
    const showMoreButton = makeBtn("collapsible", "Show Details", task.id);
    showMoreButton.innerHTML= '<i class="material-icons">arrow_drop_down</i>';
    
    //collapsible div content
    const moreContent = showMoreContent(task);

    //delete task button
    const delTaskBtn = makeBtn("del-task-btn", "X", task.id);
    delTaskBtn.innerHTML='<i class="material-icons md-18">delete_forever</i>';

    //edit task button
    const editTaskBtn = makeBtn("edit-task-btn", "edit", task.id);
    editTaskBtn.innerHTML= '<i class="material-icons md-18">edit</i>';

    //change task color in relation to priority

    thisTaskDiv.appendChild(customCheckbox);
    thisTaskDiv.appendChild(titleParag);
    thisTaskDiv.appendChild(dateParag);
    thisTaskDiv.appendChild(showMoreButton);
    thisTaskDiv.appendChild(delTaskBtn);
    thisTaskDiv.appendChild(editTaskBtn);
    thisTaskDiv.appendChild(moreContent); //last child
    
    if (task.done) taskIsDone(task, thisTaskDiv);
    else paintPriority(task.priority, thisTaskDiv);

    tasksDiv.appendChild(thisTaskDiv);
    
}

function taskIsDone(task, thisDiv){
    thisDiv.querySelector("p").style.textDecoration = "line-through";
    paintPriority("done", thisDiv);
}

function showMoreContent(task){
    const breakLine = document.createElement("br");
    const moreContent = document.createElement("div");
    moreContent.classList.add("more-content");
    //task description
    const description = "Description: " +  task.description;
    const taskDescription = makeP("display-task", "description-extra", description);

    
    //days to end
    const daysLeft = differenceInCalendarDays(parseISO(task.date),new Date());
    let daysLeftText;
    if (daysLeft >=0) daysLeftText = daysLeft + " days to deadline.";
    else daysLeftText = "Your time is up."

    const addedDate = makeP("display-task", "display-extra-added-date", daysLeftText);

    moreContent.appendChild(taskDescription);
    moreContent.appendChild(breakLine);
    moreContent.appendChild(addedDate);

    return moreContent;
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

function openTaskDetails(){

    let contentDiv = this.parentElement.lastChild;

    if (!contentDiv.style.height || contentDiv.style.height == "0px"){
        contentDiv.style.height = "80px";
    } 
    else {
        contentDiv.style.height = "0px";
    }
}

export {makeTask, displayTask, showTaskDiv, 
        updateTasks, openTaskDetails, exampleTask, 
        populateForm, paintPriority, taskIsDone};