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

function checkTitle(){
    const warning = document.querySelector("#input-warning");
    let titleInput = document.querySelector("#input-project-name");
    let timeout = null;
    const submit = document.querySelector("#submit-project");
    submit.disabled = true;

    titleInput.addEventListener("keyup", function(e){
        clearTimeout(timeout);

        timeout = setTimeout(function(){

            if(checkLength(titleInput.value) && checkDuplicate(titleInput.value))
            {
                submit.disabled = false;
            }
        
        }, 1000);
    });


    function checkLength(title){
        if (title.length<1){
            warning.textContent = "Project name is too small!";
            return 0;
        }
        return 1;
    }

    function checkDuplicate(title){
        let noDuplicate = true;
        allProjects.forEach(proj => {
            if (proj.title == title) {
                warning.textContent = "Name already exists!";
                noDuplicate = false;
            }
        });
        return noDuplicate;
    }
   
}

function makeProject(){
    let title = document.querySelector("#input-project-name").value;
    const description = document.querySelector("#input-project-description").value;
    const project = projectFactory(title, description);

    return project;
}

function defaultProject(task){
    const project = projectFactory("My Project", "Default Project to keep your tasks");
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
        defaultProject, removeTask, parsedProject, displayAllProjects, removeProject, checkTitle}