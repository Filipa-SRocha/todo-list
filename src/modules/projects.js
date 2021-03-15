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
    const projDiv = document.querySelector("#all-projects-display");
    const btn = document.createElement("button");
    btn.classList.add("display-project-button");

    btn.textContent = project.title;
    btn.setAttribute("data-index", project.id);
    projDiv.appendChild(btn);
}

function displayAllProjects(){
    allProjects.forEach(proj => displayProject(proj));
}

export{makeProject, displayProject, addTask, 
        initializeAllProjects, saveProject, getProject, 
        defaultProject, removeTask, parsedProject, displayAllProjects}