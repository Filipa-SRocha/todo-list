import {openNewEntryForm, closeNewEntryForm, clearNewEntryForm,
        openNewProjectForm, closeNewProjectForm, clearNewProjectForm} from './modules/form';
import { loadPage } from './modules/pageLoad';
import {makeTask, showTaskDiv, updateTasks, openTaskDetails, populateForm, paintPriority, taskIsDone } from './modules/task';
import { checkTitle, displayAllProjects, displayProject, getProject, makeProject, removeProject, removeTask, saveProject} from './modules/projects';
import {saveToMemory, clearMemory, deleteFromLocalStorage} from './modules/saveToLocalMemory';

clearMemory();
loadPage();




const Buttons =(function(){
    const newEntryButton = document.querySelector("#new-entry");
    const newProjectButton = document.querySelector("#new-project");
    const submitEntryButton = document.querySelector("#new-entry-submit-button");
    const cancelEntryButton = document.querySelector("#new-entry-cancel-button");
    const submitProjectButton = document.querySelector("#submit-project");
    const cancelProjectButton = document.querySelector("#cancel-project");
    

    let checkboxes = document.querySelectorAll(".visually-hidden-checkbox");
    let removeTaskButtons = document.querySelectorAll(".del-task-btn");
    let editTaskButtons = document.querySelectorAll(".edit-task-btn");
    let showMoreButtons = document.querySelectorAll(".collapsible");
    let projectsButtons = document.querySelectorAll(".display-project-button");
    let projectButtonDelete = document.querySelectorAll(".project-button-delete");

    let workingProject;
    
    // event listeners
    submitProjectButton.addEventListener("click", addProject);
    newEntryButton.addEventListener("click", openNewEntryForm);
    newProjectButton.addEventListener("click", () => {
        openNewProjectForm();
        checkTitle();
    });
    editTaskButtons.forEach(editBtn => editBtn.addEventListener("click", editTask));
    projectsButtons.forEach(projBtn => projBtn.addEventListener("click", openProject));
    showMoreButtons.forEach(showMoreBtn => showMoreBtn.addEventListener("click", openTaskDetails))
    //removeTaskButtons.forEach(removeBtn => removeBtn.addEventListener("click", removeTask));
    submitEntryButton.addEventListener("click", addNewEntry); 

    projectButtonDelete.forEach(deleteBtn => deleteBtn.addEventListener("click", deleteProject));

    cancelEntryButton.addEventListener("click", () => {
        closeNewEntryForm();
        clearNewEntryForm();
    });
    
    cancelProjectButton.addEventListener("click", ()=>{
        closeNewProjectForm();
        clearNewProjectForm();
    });

    checkboxes.forEach(box => box.addEventListener("click", testCheck));

    
    function testCheck(){

        let thisDiv = this.parentElement.parentElement;
        let index = thisDiv.dataset.taskDivIndex;
        let thisTask = workingProject.tasks[index];
        

        if (this.checked){
            taskIsDone(thisTask, thisDiv);
            thisTask.done=true;
        } 
        else{
            thisDiv.querySelector("p").style.textDecoration = "none";
            paintPriority(thisTask.priority, thisDiv);
            thisTask.done=false;
        }
    }

    function updateProjectButtons(){
       
        projectsButtons = document.querySelectorAll(".display-project-button");
        projectButtonDelete = document.querySelectorAll(".project-button-delete");

        projectsButtons.forEach(projBtn => projBtn.removeEventListener("click", openProject));
        projectsButtons.forEach(projBtn => projBtn.addEventListener("click", openProject));

        projectButtonDelete.forEach(deleteBtn => deleteBtn.removeEventListener("click", deleteProject));
        projectButtonDelete.forEach(deleteBtn => deleteBtn.addEventListener("click", deleteProject));        
    }

    function deleteProject(){
        const index= this.parentElement.lastChild.dataset.index;

        //apagar proj do local memory
        deleteFromLocalStorage(getProject(index));

        //apagar proj do all projects
        removeProject(index);

        //remove div proj button
        this.parentElement.remove();

    }

    function updateTaskButtons(){
        removeTaskButtons = document.querySelectorAll(".del-task-btn");
        showMoreButtons = document.querySelectorAll(".collapsible");
        editTaskButtons = document.querySelectorAll(".edit-task-btn");
        checkboxes = document.querySelectorAll(".visually-hidden-checkbox");

        checkboxes.forEach(box => box.addEventListener("click", testCheck));

        editTaskButtons.forEach(editBtn => editBtn.removeEventListener("click", editTask));
        removeTaskButtons.forEach(removeBtn => removeBtn.removeEventListener("click", removeTask));
        removeTaskButtons.forEach(removeBtn => removeBtn.addEventListener("click", removeEntry));  

        editTaskButtons.forEach(editBtn => editBtn.addEventListener("click", editTask));
        showMoreButtons.forEach(showMoreBtn => showMoreBtn.removeEventListener("click", openTaskDetails))
        showMoreButtons.forEach(showMoreBtn => showMoreBtn.addEventListener("click", openTaskDetails))
    }

    function addProject(){

        let project= makeProject();
        saveProject(project);
        saveToMemory(project);
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
        saveToMemory(workingProject);

    }

    function removeEntry() {
        removeTask(workingProject, workingProject.tasks[this.dataset.index])
        updateTasks(workingProject.tasks) 
        updateTaskButtons();
        saveToMemory(workingProject);
    }

    function editTask(){
        let thisTask=workingProject.tasks[this.dataset.index];
        openNewEntryForm();
        populateForm(thisTask);
        submitEntryButton.removeEventListener("click", addNewEntry);
        submitEntryButton.addEventListener("click", changeTask); 

        function changeTask(){
            let index= thisTask.id; 
            let newTask= makeTask(index);
            workingProject.tasks.splice(index, 1, newTask);
            updateTasks(workingProject.tasks);
            closeNewEntryForm();
            clearNewEntryForm();
            updateTaskButtons();
            saveToMemory(workingProject);
            submitEntryButton.removeEventListener("click", changeTask); 
            submitEntryButton.addEventListener("click", addNewEntry);
        }
    }
    
})();



