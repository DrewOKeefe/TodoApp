//CREATING TODO LIST:
const form = document.querySelector('#add-todo');
const input = document.querySelector('#task');
const todoList = document.querySelector('#todoList');

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
	} else alert('Please enter task');
});

// STYLING COMPLETED ITEMS
todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('completed');
	}
	localStorage.setItem('savedTodos', JSON.stringify(todoList.innerHTML));
});

// ADDING REMOVE FUNCTION TO DELETE BUTTON:
todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		// console.log("loaded hello")
		e.target.parentElement.remove();
	}
});

// SAVE TO LOCAL STORAGE:
document.addEventListener('click', function () {
	localStorage.setItem('savedTodos', JSON.stringify(todoList.innerHTML));
});

document.addEventListener('submit', function () {
	localStorage.setItem('savedTodos', JSON.stringify(todoList.innerHTML));
});

//RETRIEVE FROM LOCAL STORAGE:
todoList.innerHTML = JSON.parse(localStorage.savedTodos);
