// Obtener referencias a los elementos HTML
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.addEventListener('change', toggleTaskCompletion);
        const taskLabel = document.createElement('label');
        taskLabel.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', deleteTask);
        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        newTaskInput.value = '';
    }
}

// Función para marcar/desmarcar una tarea como completada
function toggleTaskCompletion(event) {
    const taskLabel = event.target.nextElementSibling;
    taskLabel.classList.toggle('completed');
}

// Función para eliminar una tarea
function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
}

// Agregar evento al input para agregar tareas al presionar Enter
newTaskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});