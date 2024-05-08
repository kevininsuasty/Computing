// Autenticación de usuarios
const loginBtn = document.getElementById('loginBtn');
const loginContainer = document.getElementById('loginContainer');
const mainContainer = document.getElementById('mainContainer');

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para autenticar al usuario
    // por ejemplo, verificar las credenciales con una base de datos

    if (username === 'admin' && password === 'password') {
        loginContainer.style.display = 'none';
        mainContainer.style.display = 'flex';
    } else {
        alert('Credenciales incorrectas');
    }
});

// Gestión de tareas
const taskList = document.getElementById('taskList');
const newTask = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', () => {
    const taskText = newTask.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        newTask.value = '';
    }
});

// Chat en tiempo real
const messages = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// Simulación de conexión a un servidor de chat
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    console.log('Conexión establecida');
});

socket.addEventListener('message', (event) => {
    const message = document.createElement('div');
    message.textContent = event.data;
    messages.appendChild(message);
});

sendBtn.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        socket.send(messageText);
        messageInput.value = '';
    }
});