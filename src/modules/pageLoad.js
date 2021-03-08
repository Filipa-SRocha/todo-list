import { closeNewEntryForm, closeNewProjectForm, makeNewEntryForm, makeNewProjectForm } from "./form";
import {initializeProjects, saveProject} from './projects'

function loadPage(){
    const mainDiv=document.querySelector("#main-app-div");
    const projectsDiv = document.querySelector("#projects-div");
    const entryForm = makeNewEntryForm();
    const projectForm = makeNewProjectForm();

    mainDiv.appendChild(entryForm);
    projectsDiv.appendChild(projectForm);

    closeNewEntryForm();
    closeNewProjectForm();
    
    //inicialize variables
    initializeProjects();
    saveProject();
}

export{loadPage};