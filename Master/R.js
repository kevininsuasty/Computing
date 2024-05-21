const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');

// Función para agregar una tarea
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.classList.add('btn', 'btn-success', 'btn-sm');
    completeButton.addEventListener('click', completeTask);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(completeButton);
    taskList.appendChild(taskItem);
}

// Función para completar una tarea
function completeTask(event) {
    const taskItem = event.target.parentNode;
    const taskSpan = taskItem.querySelector('span');
    taskSpan.classList.toggle('completed');
    if (taskSpan.classList.contains('completed')) {
        setTimeout(() => {
            taskList.removeChild(taskItem);
        }, 2000); // Eliminar la tarea después de 2 segundos
    }
}

// Agregar evento al botón de agregar tarea
addTaskButton.addEventListener('click', () => {
    const newTaskText = newTaskInput.value.trim();
    if (newTaskText !== '') {
        addTask(newTaskText);
        newTaskInput.value = '';
    }
});

// Agregar algunas tareas de ejemplo
addTask('Despertar a las 6 AM.');
addTask('Tender la cama.');
addTask('7 AM Estar listo para clases de java en una plataforma externa.');
addTask('10 AM Descanso para seguir con mis trabajos personales.');
addTask('11 AM bañarse.');
addTask('Reservar un viñedo de flores para un rodaje.');
addTask('Viajar a Perú por vacaciones con los de.');
addTask('No puedo las palabras de la empresa el día 30.');
addTask('Aprender a tañar derchi.');