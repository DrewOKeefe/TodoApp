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
			// console.log("asdfsd")
			e.target.parentElement.remove();
		});
	} else alert('Please enter task');

	//SAVE TO LOCAL STORAGE:
	console.log(todoList.innerHTML);
	console.log(JSON.stringify(todoList.innerHTML));
	localStorage.setItem('savedTodos', todoList.innerHTML);
});

//RETRIEVING FROM LOCAL STORAGE:
JSON.parse(localStorage.getItem('todos'));
