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


function NewProject(){
    const title = document.querySelector("#input-project-name").value;
    const description = document.querySelector("input-project-description").value;

    const project = projectFactory(title, description);
}