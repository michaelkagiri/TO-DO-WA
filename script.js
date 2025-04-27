//get the form and input elements
const form = document.getElementById('form');
const taskInput = document.getElementById('task');

//create a container for the tasks
const taskList = document.createElement('ul');
document.body.appendChild(taskList);

// handle submit form 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if(taskText!=='') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // add a delete button to each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // clear the input field
        taskInput.value = '';
    }
});