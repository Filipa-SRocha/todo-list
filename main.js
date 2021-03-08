/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageLoad */ \"./src/modules/pageLoad.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects */ \"./src/modules/projects.js\");\n\n\n\n\n\n\n(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__.loadPage)();\n\n\nconst Buttons =(function(){\n    const newEntryButton = document.querySelector(\"#new-entry\");\n    const newProjectButton = document.querySelector(\"#new-project\");\n    const submitEntryButton = document.querySelector(\"#new-entry-submit-button\");\n    const cancelEntryButton = document.querySelector(\"#new-entry-cancel-button\");\n    const submitProjectButton = document.querySelector(\"#submit-project\");\n    const cancelProjectButton = document.querySelector(\"#cancel-project\");\n   \n    let projectsButtons = document.querySelectorAll(\".display-project-button\");\n    let workingProject;\n    \n    // event listeners\n    submitProjectButton.addEventListener(\"click\", addProject);\n    newEntryButton.addEventListener(\"click\", _modules_form__WEBPACK_IMPORTED_MODULE_0__.openNewEntryForm);\n    newProjectButton.addEventListener(\"click\", _modules_form__WEBPACK_IMPORTED_MODULE_0__.openNewProjectForm);\n    projectsButtons.forEach(projBtn => projBtn.addEventListener(\"click\", openProject));\n    submitEntryButton.addEventListener(\"click\", addNewEntry); \n    cancelEntryButton.addEventListener(\"click\", () => {\n        (0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.closeNewEntryForm)();\n        (0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.clearNewEntryForm)();\n    });\n    cancelProjectButton.addEventListener(\"click\", ()=>{\n        (0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.closeNewProjectForm)();\n        (0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.clearNewProjectForm)();\n    });\n\n\n    function updateButtons(){\n        projectsButtons = document.querySelectorAll(\".display-project-button\");\n        projectsButtons.forEach(projBtn => projBtn.removeEventListener(\"click\", openProject));\n        projectsButtons.forEach(projBtn => projBtn.addEventListener(\"click\", openProject));\n    }\n\n    function addProject(){\n        let project= (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.makeProject)();\n        (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.saveProject)(project);\n        (0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.closeNewProjectForm)();\n        (0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.clearNewProjectForm)();\n        (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.displayProject)(project);\n        updateButtons();            \n    }\n\n    function openProject(){\n        (0,_modules_task__WEBPACK_IMPORTED_MODULE_2__.showTaskDiv)();\n        let project = (0,_modules_projects__WEBPACK_IMPORTED_MODULE_3__.getProject)(this.dataset.index);\n        workingProject = project;\n        (0,_modules_task__WEBPACK_IMPORTED_MODULE_2__.updateTasks)(project.tasks);    \n    }\n\n    function addNewEntry(){\n        console.log(`aqui ${workingProject}`);\n        let task = (0,_modules_task__WEBPACK_IMPORTED_MODULE_2__.makeTask)(workingProject.tasks.length);\n        workingProject.addTaskToProject(task);\n        (0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.closeNewEntryForm)();\n        (0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.clearNewEntryForm)(); \n        (0,_modules_task__WEBPACK_IMPORTED_MODULE_2__.updateTasks)(workingProject.tasks);\n    }\n\n    \n\n\n    \n    \n})();\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeNewEntryForm\": () => (/* binding */ makeNewEntryForm),\n/* harmony export */   \"openNewEntryForm\": () => (/* binding */ openNewEntryForm),\n/* harmony export */   \"closeNewEntryForm\": () => (/* binding */ closeNewEntryForm),\n/* harmony export */   \"clearNewEntryForm\": () => (/* binding */ clearNewEntryForm),\n/* harmony export */   \"makeNewProjectForm\": () => (/* binding */ makeNewProjectForm),\n/* harmony export */   \"closeNewProjectForm\": () => (/* binding */ closeNewProjectForm),\n/* harmony export */   \"clearNewProjectForm\": () => (/* binding */ clearNewProjectForm),\n/* harmony export */   \"openNewProjectForm\": () => (/* binding */ openNewProjectForm)\n/* harmony export */ });\nfunction makeLabel(name){\n    const label = document.createElement(\"label\");\n    label.textContent = name;\n\n    return label;\n}\n\nfunction makeFormInput(inputId, type){\n    const input = document.createElement(\"input\");\n   \n    input.type = type;\n    input.id = inputId;\n\n    return input;\n}\n\nfunction makeNewEntryForm(){\n    const newEntryDiv = document.createElement(\"div\");\n    newEntryDiv.id=\"new-entry-div\";\n    const breakLine = document.createElement(\"br\");\n    //title\n    const titleLabel = makeLabel(\"Title: \");\n    const inputTitle = makeFormInput(\"input-title\", \"text\");\n    //description\n    const descriptionLabel = makeLabel(\"Description: \");\n    const inputDescription = makeFormInput(\"input-description\", \"text\");\n    //date\n    const dateLabel = makeLabel(\"Deadline: \");\n    const inputDate = makeFormInput(\"input-date\", \"date\");\n    //priority\n    const priorityLabel = makeLabel(\"Priority: \");\n    const inputPriority = makeFormInput(\"input-priority\", \"checkbox\");\n    // submit\n    const submit = document.createElement(\"button\");\n    submit.textContent = \"Submit\";\n    submit.id=\"new-entry-submit-button\";\n    //cancel \n    const cancel = document.createElement(\"button\");\n    cancel.textContent = \"Cancel\";\n    cancel.id = \"new-entry-cancel-button\"; \n\n    \n\n    newEntryDiv.appendChild(titleLabel);\n    newEntryDiv.appendChild(inputTitle);\n    newEntryDiv.appendChild(descriptionLabel);\n    newEntryDiv.appendChild(inputDescription);\n    newEntryDiv.appendChild(breakLine);\n    newEntryDiv.appendChild(dateLabel);\n    newEntryDiv.appendChild(inputDate);\n    newEntryDiv.appendChild(priorityLabel);\n    newEntryDiv.appendChild(inputPriority);\n    newEntryDiv.appendChild(submit);\n    newEntryDiv.appendChild(cancel);\n\n    return newEntryDiv;\n}\n\nfunction makeNewProjectForm(){\n    const projectDiv= document.createElement(\"div\");\n    projectDiv.id=\"new-project-form-div\";\n\n    const nameLabel = makeLabel(\"Project Name: \");\n    const inputName = makeFormInput(\"input-project-name\", \"text\");\n    const descriptionLabel = makeLabel(\"Project Description: \");\n    const inputDescription = makeFormInput(\"input-project-description\", \"text\");\n    const submitButton = document.createElement(\"button\");\n    submitButton.id=\"submit-project\";\n    submitButton.textContent = \"Submit\";\n    const cancel = document.createElement(\"button\");\n    cancel.textContent = \"Cancel\";\n    cancel.id = \"cancel-project\"; \n\n    projectDiv.appendChild(nameLabel);\n    projectDiv.appendChild(inputName);\n    projectDiv.appendChild(descriptionLabel);\n    projectDiv.appendChild(inputDescription);\n    projectDiv.appendChild(submitButton);\n    projectDiv.appendChild(cancel);\n\n    return projectDiv;\n}\n\nfunction openNewEntryForm(){\n    const entryForm = document.querySelector(\"#new-entry-div\");\n    entryForm.style.display = \"block\";\n}\n\nfunction closeNewEntryForm(){\n    const entryForm = document.querySelector(\"#new-entry-div\");\n    entryForm.style.display = \"none\";\n}\n\nfunction openNewProjectForm(){\n    const projectDiv = document.querySelector(\"#new-project-form-div\");\n    projectDiv.style.display = \"block\";\n}\n\nfunction closeNewProjectForm(){\n    const projectDiv = document.querySelector(\"#new-project-form-div\");\n    projectDiv.style.display = \"none\";\n}\n\nfunction clearNewEntryForm(){\n    const entryForm = document.querySelector(\"#new-entry-div\");\n    entryForm.childNodes.forEach(node => {\n        if (node.value) node.value=\"\";\n    })\n    return 1;\n}\n\nfunction clearNewProjectForm(){\n    const projForm = document.querySelector(\"#new-project-form-div\");\n    projForm.childNodes.forEach(node => {\n        if (node.value) node.value=\"\";\n    })\n    return 1;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/modules/form.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n\n\n\nfunction loadPage(){\n    const mainDiv=document.querySelector(\"#main-app-div\");\n    const projectsDiv = document.querySelector(\"#projects-div\");\n    const entryForm = (0,_form__WEBPACK_IMPORTED_MODULE_0__.makeNewEntryForm)();\n    const projectForm = (0,_form__WEBPACK_IMPORTED_MODULE_0__.makeNewProjectForm)();\n\n    mainDiv.appendChild(entryForm);\n    projectsDiv.appendChild(projectForm);\n\n    (0,_form__WEBPACK_IMPORTED_MODULE_0__.closeNewEntryForm)();\n    (0,_form__WEBPACK_IMPORTED_MODULE_0__.closeNewProjectForm)();\n    \n    //inicialize variables\n    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.initializeProjects)();\n    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.saveProject)();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/pageLoad.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeProject\": () => (/* binding */ makeProject),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"initializeProjects\": () => (/* binding */ initializeProjects),\n/* harmony export */   \"saveProject\": () => (/* binding */ saveProject),\n/* harmony export */   \"getProject\": () => (/* binding */ getProject)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/modules/form.js\");\n\nlet allProjects;\n\nconst projectFactory = (title, description) =>{\n    let tasks = [];\n    let id = allProjects.length;\n\n    function addTaskToProject(task){\n        tasks.push(task);\n    }\n\n    return {title,\n        description,\n        id,\n        tasks,\n        addTaskToProject\n    }\n}\n\n\n\nfunction makeProject(){\n    const title = document.querySelector(\"#input-project-name\").value;\n    const description = document.querySelector(\"#input-project-description\").value;\n\n    const project = projectFactory(title, description);\n\n    return project;\n}\nfunction initializeProjects(){\n    allProjects=[];\n}\n\nfunction saveProject(project){\n    allProjects.push(project);\n}\n\n\nfunction addTask(project, task){\n    project.addTaskToProject(task);\n}\n\nfunction getProject(index){\n    return allProjects[index];\n}\n\n\nfunction displayProject(project){\n    const projDiv = document.querySelector(\"#all-projects-display\");\n    const btn = document.createElement(\"button\");\n    btn.classList.add(\"display-project-button\");\n\n    btn.textContent = project.title;\n    btn.setAttribute(\"data-index\", project.id);\n    projDiv.appendChild(btn);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeTask\": () => (/* binding */ makeTask),\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask),\n/* harmony export */   \"showTaskDiv\": () => (/* binding */ showTaskDiv),\n/* harmony export */   \"updateTasks\": () => (/* binding */ updateTasks)\n/* harmony export */ });\n//task factory\nconst taskFactory = (title, description, date, priority, id) =>{\n\n    return {title, description, date, priority, id}; \n};\n\n\nfunction makeTask(index){\n    const title = document.querySelector(\"#input-title\").value;\n    const description= document.querySelector(\"#input-description\").value;\n    const date= document.querySelector(\"#input-date\").value;\n    const priority = document.querySelector(\"#input-priority\").value;\n    const id= index;\n    const task= taskFactory(title, description, date, priority, id);\n\n    return task;\n}\n\nfunction makeP(pclass, id ,text){\n    const paragraph = document.createElement(\"p\");\n    paragraph.class = pclass;\n    paragraph.textContent = text;\n\n    return paragraph;\n}\n\nfunction makeCheckbox(index){\n    const customCheckbox = document.createElement(\"div\");\n    const label= document.createElement(\"label\");\n    label.classList.add(\"checkbox-container\");\n    const checkButton = document.createElement(\"input\");\n\n    label.setAttribute(\"for\", \"check\"+index);\n    label.textContent=\" \";\n    checkButton.type=\"checkbox\";\n    checkButton.id=\"check\"+index;\n    checkButton.classList.add(\"visually-hidden-checkbox\");\n\n    customCheckbox.classList.add(\"custom-checkbox\");\n\n    label.appendChild(checkButton);\n    label.appendChild(customCheckbox);\n\n    return label;\n}\n\nfunction displayTask(task){\n    const tasksDiv=document.querySelector(\"#tasks-div\");\n    const thisTaskDiv=document.createElement(\"div\");\n    thisTaskDiv.classList.add(\"one-task\");\n    const customCheckbox = makeCheckbox(task.id);\n    const dateParag= makeP(\"display-task\", \"display-task-date\", task.date);\n    \n\n    const titleParag = makeP(\"display-task\", \"display-task-title\",task.title);\n    \n    thisTaskDiv.appendChild(customCheckbox);\n    thisTaskDiv.appendChild(titleParag);\n    thisTaskDiv.appendChild(dateParag);\n\n    tasksDiv.appendChild(thisTaskDiv);\n}\n\nfunction displayAllTasks(taskArray){\n    taskArray.forEach(task => displayTask(task));\n}\n\nfunction updateTasks(taskArray){\n    const taskDiv=document.querySelectorAll(\".one-task\");\n    taskDiv.forEach(task => task.remove());\n\n    if (taskArray.length>0) displayAllTasks(taskArray);\n}\n\nfunction showTaskDiv(){\n    const mainDiv= document.querySelector(\"#main-app-div\");\n    mainDiv.style.display=\"block\";\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;