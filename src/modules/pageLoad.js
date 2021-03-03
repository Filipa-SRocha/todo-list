import { closeNewEntryForm, closeNewProjectForm, makeNewEntryForm, makeNewProjectForm } from "./form";

function loadPage(){
    const mainDiv=document.querySelector("#main-app-div");
    const projectsDiv = document.querySelector("#projects-div");
    const entryForm = makeNewEntryForm();
    const projectForm = makeNewProjectForm();

    mainDiv.appendChild(entryForm);
    projectsDiv.appendChild(projectForm);

    closeNewEntryForm();
    closeNewProjectForm();
    
}

export{loadPage};