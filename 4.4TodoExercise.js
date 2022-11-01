//CREATING TODO LIST:
const form = document.querySelector('#add-todo');
const input = document.querySelector('#task');
const todoList = document.querySelector('#todoList');

//STYLING COMPLETED ITEMS
todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('completed');
	}
});

//CREATING NEW LI WITH BUTTONS:
form.addEventListener('submit', function (e) {
	e.preventDefault();

	//NEW LI:
	let newTodo = document.createElement('li');
	let taskValue = document.getElementById('task').value;
	newTodo.innerText = taskValue;
	input.value = '';
	todoList.appendChild(newTodo);

	//NEW DELETE BUTTON:
	let deleteBtn = document.createElement('button');
	deleteBtn.innerText = 'Delete';
	newTodo.appendChild(deleteBtn);
	deleteBtn.addEventListener('click', function (e) {
		e.target.parentElement.remove();
	});

	//SAVE TO LOCAL STORAGE:
	// savedTodos.push({ task: newTodo.innerText, isCompleted: false });
	localStorage.setItem('todos', JSON.stringify(todoList));
	console.log(localStorage.getItem(todoList));
});

//RETRIEVING FROM LOCAL STORAGE:
JSON.parse(localStorage.getItem('todos'));
