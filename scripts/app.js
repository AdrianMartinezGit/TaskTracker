const addTaskBtn = document.getElementById('addTaskBtn');

const textToDo = document.getElementById('textToDo');
const textInProgress = document.getElementById('textInProgress');
const textCompleted = document.getElementById('textCompleted');

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const bottomCloseBtn = document.getElementById('bottomCloseBtn'); 
const bottomSaveBtn = document.getElementById('bottomSaveBtn'); 

const taskInfoNameField = document.getElementById('taskInfoNameField');
const taskInfoDescField = document.getElementById('taskInfoDescField');
const taskInfoPrioField = document.getElementById('taskInfoPrioField');
const taskInfoDateField = document.getElementById('taskInfoDateField');

const todoDiv = document.getElementById('todo-div');

addTaskBtn.addEventListener('click', () => {
    modal.style.display = "block";
});

const CreateTaskAddElement = (name = 'AAA', desc = 'BBB', priority = 'CCC', expire = 'DDD') => {
    let div = document.createElement('div');
    div.classList.add('task-box');

    let h1 = document.createElement('h1');
    h1.classList.add('text-start');
    h1.textContent = name;

    let button1 = document.createElement('button');
    button1.classList.add('btn', 'btn-primary', 'w-100');
    button1.innerText = 'Task Options';

    let button2 = document.createElement('button');
    button2.classList.add('btn', 'btn-success', 'w-100');
    button2.innerText = 'View Task';

    div.append(h1);
    div.append(button1);
    div.append(button2);
    todoDiv.append(div);
}

span.addEventListener('click', () => {
    modal.style.display = "none";
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
      }
});

bottomCloseBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

bottomSaveBtn.addEventListener('click', () => {
    modal.style.display = "none";
    CreateTaskAddElement();
});