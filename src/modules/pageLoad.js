import { closeNewEntryForm, closeNewProjectForm, makeNewEntryForm, makeNewProjectForm } from "./form";
import {initializeProjects} from './saveToLocalMemory';
import {initializeAllProjects} from './projects';

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
    initializeAllProjects();
    initializeProjects();



}

export{loadPage};