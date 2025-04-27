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
        taskList.appendChild(li);

        // create a delete button


        // clear the input field
    }
});
