let allProjects;

const projectFactory = (title, description) =>{
    let tasks = [];
    let id = allProjects.length;

    function addTaskToProject(task){
        tasks.push(task);
    }

    function removeTaskFromProject(task){
        tasks.splice(task.id, 1);
    }

    return {title,
        description,
        id,
        tasks,
        addTaskToProject,
        removeTaskFromProject
    }
}

function initializeAllProjects(){
    allProjects=[];
}

function removeProject(index){
    allProjects.splice(index, 1);
    allProjects.forEach(proj => {
        if (proj.id>index) proj.id--;
    });
}

function parsedProject(parsedTitle, parsedDescription, parsedTasks){
    const title = parsedTitle;
    const description = parsedDescription;

    const project = projectFactory(title, description);
    parsedTasks.forEach(task => project.addTaskToProject(task));

    return project;
}

function makeProject(){
    const title = document.querySelector("#input-project-name").value;
    const description = document.querySelector("#input-project-description").value;

    const project = projectFactory(title, description);

    return project;
}

function defaultProject(task){
    const project = projectFactory("Default Project", "Default Project to keep your tasks");
    saveProject(project);
    addTask(project, task);
    return project;
}

function saveProject(project){
    allProjects.push(project);
}


function addTask(project, task){
    project.addTaskToProject(task);
}

function removeTask(project, task){
    project.removeTaskFromProject(task);
}

function getProject(index){
    return allProjects[index];
}


function displayProject(project){
    const allProjDiv = document.querySelector("#all-projects-display");
    
    const projDiv = document.createElement("div"); 
    projDiv.id="one-project";

    //delete button
    const deleteBtn=document.createElement("button");
    deleteBtn.classList.add("project-button-delete");
    deleteBtn.textContent = "X";
    
    //proj button
    const btn = document.createElement("button");
    btn.classList.add("display-project-button");
    btn.textContent = project.title;
    btn.setAttribute("data-index", project.id);

    projDiv.appendChild(deleteBtn);
    projDiv.appendChild(btn);

    allProjDiv.appendChild(projDiv);
}

function displayAllProjects(){
    allProjects.forEach(proj => displayProject(proj));
}

export{makeProject, displayProject, addTask, 
        initializeAllProjects, saveProject, getProject, 
        defaultProject, removeTask, parsedProject, displayAllProjects, removeProject}