import { closeNewEntryForm, closeNewProjectForm, makeNewEntryForm, makeNewProjectForm } from "./form";
import {defaultProject, initializeProjects} from './projects'
import { exampleTask } from "./task";

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


    //default project
    let task = exampleTask();
    defaultProject(task);
}

export{loadPage};