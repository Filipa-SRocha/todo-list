import {openNewEntryForm, closeNewEntryForm, clearNewEntryForm,
        openNewProjectForm, closeNewProjectForm, clearNewProjectForm} from './modules/form';
import { loadPage } from './modules/pageLoad';
import { displayTask, makeTask } from './modules/task';
import { displayProject, makeProject} from './modules/projects';

let projects=[];
loadPage();
const allTasks=[];
const test= document.querySelector("#test");


const Buttons =(function(){
    const newEntryButton = document.querySelector("#new-entry");
    const newProjectButton = document.querySelector("#new-project");

    newEntryButton.addEventListener("click", newEntry);

    newProjectButton.addEventListener("click", newProject);

    function newEntry(){
        newEntryButton.removeEventListener("click", newEntry)
        const submitButton = document.querySelector("#new-entry-submit-button");

        openNewEntryForm();
        submitButton.addEventListener("click",addTask);  

        function addTask(){
            submitButton.removeEventListener("click", addTask);
            let task = makeTask();
            allTasks.push(task);
            closeNewEntryForm();
            clearNewEntryForm(); 
            displayTask(task);
            newEntryButton.addEventListener("click", newEntry);
        }

    }

    function newProject(){
        const submitButton = document.querySelector("#submit-project")
        openNewProjectForm();
        submitButton.addEventListener("click", addProject);
        
        function addProject(){
            submitButton.removeEventListener("click", addProject);
            let project= makeProject();
            projects.push(project);
            closeNewProjectForm();
            clearNewProjectForm();
            displayProject(project);
        }
    }
})();



