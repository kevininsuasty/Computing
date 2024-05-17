function addTask(event) {
    event.preventDefault(); // Evitar el envío del formulario
  
    // Obtener el valor del input y eliminamos los espacios en blanco al principio y al final
    const taskText = taskInput.value.trim();
  
    // Si el input no está vacío
    if (taskText !== '') {
      // Crear un nuevo elemento <li>
      const taskItem = document.createElement('li');
      taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  
      // Crear un <span> con el texto de la tarea
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      // Crear un botón para eliminar la tarea
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
      deleteButton.addEventListener('click', removeTask);
  
      // Agregar el <span> y el botón al <li>
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteButton);
  
      // Agregar el <li> a la lista de tareas
      taskList.appendChild(taskItem);
  
      // Limpiar el input después de agregar la tarea
      taskInput.value = '';
    }
  }