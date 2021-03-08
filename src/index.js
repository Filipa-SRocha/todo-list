import {openNewEntryForm, closeNewEntryForm, clearNewEntryForm,
        openNewProjectForm, closeNewProjectForm, clearNewProjectForm} from './modules/form';
import { loadPage } from './modules/pageLoad';
import {makeTask, showTaskDiv, updateTasks } from './modules/task';
import { displayProject, getProject, makeProject, saveProject} from './modules/projects';


loadPage();


const Buttons =(function(){
    const newEntryButton = document.querySelector("#new-entry");
    const newProjectButton = document.querySelector("#new-project");
    const submitEntryButton = document.querySelector("#new-entry-submit-button");
    const submitProjectButton = document.querySelector("#submit-project");
    let projectsButtons = document.querySelectorAll(".display-project-button");
    let workingProject;
    
    // event listeners
    submitProjectButton.addEventListener("click", addProject);
    newEntryButton.addEventListener("click", openNewEntryForm);
    newProjectButton.addEventListener("click", openNewProjectForm);
    projectsButtons.forEach(projBtn => projBtn.addEventListener("click", openProject));
    submitEntryButton.addEventListener("click", addNewEntry); 

    
    function updateButtons(){
        projectsButtons = document.querySelectorAll(".display-project-button");
        projectsButtons.forEach(projBtn => projBtn.removeEventListener("click", openProject));
        projectsButtons.forEach(projBtn => projBtn.addEventListener("click", openProject));
    }

    function addProject(){
        let project= makeProject();
        saveProject(project);
        closeNewProjectForm();
        clearNewProjectForm();
        displayProject(project);
        updateButtons();            
    }

    function openProject(){
        showTaskDiv();
        let project = getProject(this.dataset.index);
        workingProject = project;
        updateTasks(project.tasks);    
    }

    function addNewEntry(){
        console.log(`aqui ${workingProject}`);
        let task = makeTask(workingProject.tasks.length);
        workingProject.addTaskToProject(task);
        closeNewEntryForm();
        clearNewEntryForm(); 
        updateTasks(workingProject.tasks);

    }

    


    
    
})();



