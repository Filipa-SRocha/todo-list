import {exampleTask} from './task';
import {defaultProject, displayAllProjects, displayProject, parsedProject, saveProject} from './projects';

function saveToMemory(project){
    let objectString = turnToString(project);

    localStorage.setItem(project.id, objectString);
}

function turnToString(project){
    return JSON.stringify(project);
}

function turnToObject(projectString){
    let projectObject = JSON.parse(projectString);
    const project = parsedProject(projectObject.title, projectObject.description, projectObject.tasks);
    saveProject(project);
}

function clearMemory(){
    localStorage.clear();
}


function initializeProjects(){
    if (localStorage.length<1){
        //default project
        const task = exampleTask();
        const defaultProj = defaultProject(task);
        saveToMemory(defaultProj);
        displayAllProjects();
    }
    else{
        Object.keys(localStorage).forEach(key => turnToObject(localStorage.getItem(key)));
        displayAllProjects();
    }
}

export{saveToMemory, initializeProjects, clearMemory};