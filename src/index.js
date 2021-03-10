import {openNewEntryForm, closeNewEntryForm, clearNewEntryForm,
        openNewProjectForm, closeNewProjectForm, clearNewProjectForm} from './modules/form';
import { loadPage } from './modules/pageLoad';
import {makeTask, showTaskDiv, updateTasks, openTaskDetails } from './modules/task';
import { displayProject, getProject, makeProject, saveProject} from './modules/projects';


loadPage();


const Buttons =(function(){
    const newEntryButton = document.querySelector("#new-entry");
    const newProjectButton = document.querySelector("#new-project");
    const submitEntryButton = document.querySelector("#new-entry-submit-button");
    const cancelEntryButton = document.querySelector("#new-entry-cancel-button");
    const submitProjectButton = document.querySelector("#submit-project");
    const cancelProjectButton = document.querySelector("#cancel-project");
   
    let showMoreButtons = document.querySelectorAll(".collapsible");
    let projectsButtons = document.querySelectorAll(".display-project-button");
    let workingProject;
    
    // event listeners
    submitProjectButton.addEventListener("click", addProject);
    newEntryButton.addEventListener("click", openNewEntryForm);
    newProjectButton.addEventListener("click", openNewProjectForm);
    projectsButtons.forEach(projBtn => projBtn.addEventListener("click", openProject));
    showMoreButtons.forEach(showMoreBtn => showMoreBtn.addEventListener("click", openTaskDetails))
    submitEntryButton.addEventListener("click", addNewEntry); 
    cancelEntryButton.addEventListener("click", () => {
        closeNewEntryForm();
        clearNewEntryForm();
    });
    cancelProjectButton.addEventListener("click", ()=>{
        closeNewProjectForm();
        clearNewProjectForm();
    });


    function updateProjectButtons(){
        projectsButtons = document.querySelectorAll(".display-project-button");
        projectsButtons.forEach(projBtn => projBtn.removeEventListener("click", openProject));
        projectsButtons.forEach(projBtn => projBtn.addEventListener("click", openProject));
    }

    function updateTaskButtons(){
        showMoreButtons = document.querySelectorAll(".collapsible");
        showMoreButtons.forEach(showMoreBtn => showMoreBtn.removeEventListener("click", openTaskDetails))
        showMoreButtons.forEach(showMoreBtn => showMoreBtn.addEventListener("click", openTaskDetails))
    }

    function addProject(){
        let project= makeProject();
        saveProject(project);
        closeNewProjectForm();
        clearNewProjectForm();
        displayProject(project);
        updateProjectButtons();       
    }

    function openProject(){
        showTaskDiv();
        let project = getProject(this.dataset.index);
        workingProject = project;
        updateTasks(project.tasks);
        updateTaskButtons();    
    }

    function addNewEntry(){
        let task = makeTask(workingProject.tasks.length);
        workingProject.addTaskToProject(task);
        closeNewEntryForm();
        clearNewEntryForm(); 
        updateTasks(workingProject.tasks);
        updateTaskButtons();

    }
    
    
})();



