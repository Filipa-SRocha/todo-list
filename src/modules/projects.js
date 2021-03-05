import { openNewProjectForm } from "./form";

const projectFactory = (title, description) =>{
    let tasks=[];

    function addTaskToProject(task){
        tasks.push(task);
    }

    return {title,
        description,
        addTaskToProject
    }
}


function makeProject(){
    const title = document.querySelector("#input-project-name").value;
    const description = document.querySelector("#input-project-description").value;

    const project = projectFactory(title, description);

    return project;
}



function displayProject(project){
    const projDiv = document.querySelector("#all-projects-display");
    const btn = document.createElement("button");
    btn.classList.add("display-project-button");

    btn.textContent = project.title;
    projDiv.appendChild(btn);
}
export{makeProject, displayProject}