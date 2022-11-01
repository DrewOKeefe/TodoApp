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
	if(input.value) {
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
} else alert("Please enter task");

	//SAVE TO LOCAL STORAGE:
	localStorage.setItem('savedTodos', todoList.innerHTML);
});

//RETRIEVING FROM LOCAL STORAGE:
todoList.innerHTML = localStorage.getItem('savedTodos');

// const list = document.querySelector("#list");
// const textInput = document.querySelector("#listIn");
// const form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
// 	e.preventDefault();
// 	if (textInput.value) {
// 		const listItem = document.createElement("li");
// 		const newButton = document.createElement("button");
// 		newButton.innerText = "Delete";
// 		listItem.innerText = textInput.value;
// 		list.appendChild(listItem);
// 		listItem.appendChild(newButton);
// 		textInput.value = "";
// 	} else alert("Please enter an item");
// });
// list.addEventListener("click", function(e) {
// 	if (e.target.tagName === "BUTTON") {
// 		e.target.parentElement.remove();
// 	} else if (e.target.tagName === "LI") {
// 		e.target.classList.toggle("strikeThrough");
// 		if (e.target.classList.contains("strikeThrough")) {
// 			list.appendChild(e.target);
// 		} else list.prepend(e.target);
// 	}
// });
// document.addEventListener("click", function() {
// 	localStorage.setItem("todoList", list.innerHTML);
// });

// document.addEventListener("submit", function() {
// 	localStorage.setItem("todoList", list.innerHTML);
// });
// list.innerHTML = localStorage.getItem("todoList");
