import {openNewEntryForm, closeNewEntryForm, clearNewEntryForm,
        openNewProjectForm, closeNewProjectForm, clearNewProjectForm} from './modules/form';
import { loadPage } from './modules/pageLoad';
import {makeTask, showTaskDiv, updateTasks, openTaskDetails } from './modules/task';
import { displayProject, getProject, makeProject, removeTask, saveProject} from './modules/projects';


loadPage();


const Buttons =(function(){
    const newEntryButton = document.querySelector("#new-entry");
    const newProjectButton = document.querySelector("#new-project");
    const submitEntryButton = document.querySelector("#new-entry-submit-button");
    const cancelEntryButton = document.querySelector("#new-entry-cancel-button");
    const submitProjectButton = document.querySelector("#submit-project");
    const cancelProjectButton = document.querySelector("#cancel-project");
    let removeTaskButtons = document.querySelectorAll(".del-task-btn");
   
    let showMoreButtons = document.querySelectorAll(".collapsible");
    let projectsButtons = document.querySelectorAll(".display-project-button");
    let workingProject;
    
    // event listeners
    submitProjectButton.addEventListener("click", addProject);
    newEntryButton.addEventListener("click", openNewEntryForm);
    newProjectButton.addEventListener("click", openNewProjectForm);
    projectsButtons.forEach(projBtn => projBtn.addEventListener("click", openProject));
    showMoreButtons.forEach(showMoreBtn => showMoreBtn.addEventListener("click", openTaskDetails))
    //removeTaskButtons.forEach(removeBtn => removeBtn.addEventListener("click", removeTask));
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
        removeTaskButtons = document.querySelectorAll(".del-task-btn");
        showMoreButtons = document.querySelectorAll(".collapsible");

        removeTaskButtons.forEach(removeBtn => removeBtn.removeEventListener("click", removeTask));
        removeTaskButtons.forEach(removeBtn => removeBtn.addEventListener("click", removeEntry));  

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


    function removeEntry() {
        removeTask(workingProject, workingProject.tasks[this.dataset.index])
        updateTasks(workingProject.tasks) 
        //updateTaskButtons();
    }
    
    
})();



