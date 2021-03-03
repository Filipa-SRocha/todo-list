import {makeNewEntryForm, openNewEntryForm, closeNewEntryForm, clearNewEntryForm,
        makeNewProjectForm, openNewProjectForm, closeNewProjectForm} from './modules/form';
import { loadPage } from './modules/pageLoad';
import { displayTask, makeTask } from './modules/task';


loadPage();
const allTasks=[];
const test= document.querySelector("#test");


const Buttons =(function(){
    const newEntryButton = document.querySelector("#new-entry");
    const newProjectButton = document.querySelector("#new-project");

    newEntryButton.addEventListener("click", newEntry);

    newProjectButton.addEventListener("click", newProject);

    function newEntry(){
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
        }

    }

    function newProject(){
        openNewProjectForm();
    }
})();



