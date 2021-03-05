function makeLabel(name){
    const label = document.createElement("label");
    label.textContent = name;

    return label;
}

function makeFormInput(inputId, type){
    const input = document.createElement("input");
   
    input.type = type;
    input.id = inputId;

    return input;
}

function makeNewEntryForm(){
    const newEntryDiv = document.createElement("div");
    newEntryDiv.id="new-entry-div";
    const breakLine = document.createElement("br");
    //title
    const titleLabel = makeLabel("Title: ");
    const inputTitle = makeFormInput("input-title", "text");
    //description
    const descriptionLabel = makeLabel("Description: ");
    const inputDescription = makeFormInput("input-description", "text");
    //date
    const dateLabel = makeLabel("Deadline: ");
    const inputDate = makeFormInput("input-date", "date");
    //priority
    const priorityLabel = makeLabel("Priority: ");
    const inputPriority = makeFormInput("input-priority", "checkbox");
    // submit
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.id="new-entry-submit-button";

    

    newEntryDiv.appendChild(titleLabel);
    newEntryDiv.appendChild(inputTitle);
    newEntryDiv.appendChild(descriptionLabel);
    newEntryDiv.appendChild(inputDescription);
    newEntryDiv.appendChild(breakLine);
    newEntryDiv.appendChild(dateLabel);
    newEntryDiv.appendChild(inputDate);
    newEntryDiv.appendChild(priorityLabel);
    newEntryDiv.appendChild(inputPriority);
    newEntryDiv.appendChild(submit);

    return newEntryDiv;
}

function makeNewProjectForm(){
    const projectDiv= document.createElement("div");
    projectDiv.id="new-project-form-div";

    const nameLabel = makeLabel("Project Name: ");
    const inputName = makeFormInput("input-project-name", "text");
    const descriptionLabel = makeLabel("Project Description: ");
    const inputDescription = makeFormInput("input-project-description", "text");
    const submitButton = document.createElement("button");
    submitButton.id="submit-project";
    submitButton.textContent = "Submit";

    projectDiv.appendChild(nameLabel);
    projectDiv.appendChild(inputName);
    projectDiv.appendChild(descriptionLabel);
    projectDiv.appendChild(inputDescription);
    projectDiv.appendChild(submitButton);

    return projectDiv;
}

function openNewEntryForm(){
    const entryForm = document.querySelector("#new-entry-div");
    entryForm.style.display = "block";
}

function closeNewEntryForm(){
    const entryForm = document.querySelector("#new-entry-div");
    entryForm.style.display = "none";
}

function openNewProjectForm(){
    const projectDiv = document.querySelector("#new-project-form-div");
    projectDiv.style.display = "block";
}

function closeNewProjectForm(){
    const projectDiv = document.querySelector("#new-project-form-div");
    projectDiv.style.display = "none";
}

function clearNewEntryForm(){
    const entryForm = document.querySelector("#new-entry-div");
    entryForm.childNodes.forEach(node => {
        if (node.value) node.value="";
    })
    return 1;
}

function clearNewProjectForm(){
    const projForm = document.querySelector("#new-project-form-div");
    projForm.childNodes.forEach(node => {
        if (node.value) node.value="";
    })
    return 1;
}


export{makeNewEntryForm, 
    openNewEntryForm, 
    closeNewEntryForm, 
    clearNewEntryForm, 
    makeNewProjectForm,
    closeNewProjectForm,
    clearNewProjectForm,
    openNewProjectForm};