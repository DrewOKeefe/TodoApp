//CREATING TODO LIST:
const form = document.querySelector('#add-todo');
const input = document.querySelector('#task');
const todoList = document.querySelector('#todoList');

//STYLING COMPLETED ITEMS
todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('completed');
	}
	localStorage.setItem('savedTodos', JSON.stringify(todoList.innerHTML));
});

//CREATING NEW LI WITH BUTTONS:
form.addEventListener('submit', function (e) {
	e.preventDefault();

	if (input.value) {
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
			// console.log('hello');
			e.target.parentElement.remove();
		});
	} else alert('Please enter task');
});

// SAVED TO LOCAL STORAGE:
document.addEventListener('click', function () {
	localStorage.setItem('savedTodos', JSON.stringify(todoList.innerHTML));
});

document.addEventListener('submit', function () {
	localStorage.setItem('savedTodos', JSON.stringify(todoList.innerHTML));
});

//RETRIEVING FROM LOCAL STORAGE:
todoList.innerHTML = JSON.parse(localStorage.savedTodos);

todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		// console.log("loaded hello")
		e.target.parentElement.remove();
	}
});
