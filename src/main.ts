// select elements
const elements = {
	btnSubmit: document.querySelector<HTMLButtonElement>(".todo-form__btn")!, // (c) [1] "<HTML...>", "!"
	inputTodo: document.querySelector<HTMLInputElement>(".todo-form__input")!,
	formTodo: document.querySelector<HTMLFormElement>(".todo-form")!,
	todoList: document.querySelector<HTMLLIElement>(".todo-list")!,
	btnDeleteAll: document.querySelector<HTMLButtonElement>(".btn-delete-all")!,
};

// New Todo interface
interface Todo {
	// (c) [2] "interface"
	id: number;
	todo: string;
	completed: boolean;
}

// Initialize todos array from localStorage or create an empty array
const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]"); //(c)[3] "Todo[]", "JSON.parse()", "localStorage.getItem()"

// Event Listener when the page has finished loading
window.addEventListener("DOMContentLoaded", () => {
	// (c) [4] "DOMContentLoaded"
	todos.forEach(appendTodo);
});

// handle form submission
const handleSubmit = (e: Event) => {
	// (c) [5] "e: Event"
	e.preventDefault();

	// create new todo object
	const newTodo: Todo = {
		id: Date.now(), // (c) [6] "Date.now()"
		todo: elements.inputTodo.value,
		completed: false,
	};

	// save todo to local storage
	todos.push(newTodo);

	// save todo local storage
	saveTodos();

	// append new todo
	appendTodo(newTodo);

	// Reset Input
	elements.inputTodo.value = "";
};

// Save Todos to localStorage
const saveTodos = () => {
	localStorage.setItem("todos", JSON.stringify(todos)); // (c) [7] "localStorage.setItem()", "JSON.stringify()"
};

// Append a new todo to the todo list
const appendTodo = (newTodo: Todo) => {
	const newLi = document.createElement("li");
	const checkB = document.createElement("input");
	checkB.type = "checkbox";
	checkB.checked = newTodo.completed;

	// add checkbox event listener
	checkB.addEventListener("change", () => {
		// (c) [8] "change"
		newTodo.completed = checkB.checked;

		// save todos
		saveTodos();
	});

	newLi.classList.add("todo-list__item");
	newLi.append(newTodo.todo, checkB); // (c) [9] ".append()"
	elements.todoList.prepend(newLi); // (c) [10] ".prepend()"
};

// Event listener for form submission
elements.formTodo.addEventListener("submit", handleSubmit);

// Delete all todos
const clearTodos = () => {
	todos.length = 0;
	saveTodos();
	elements.todoList.innerHTML = "";
};

elements.btnDeleteAll.onclick = clearTodos;

//(o) -------------------------> seccion de lo aprendido <-------------------
/* 
*[1] linea 3
?    <HTMLButtonElement>("...")
?    !
*[2] linea 11
?   interface
*[3] linea 18
?   Todo[]
?   JSON.parse() 
?   localStorage.getItem()
*[4] linea 21
?   "DOMContentLoaded"
*[5] linea 26
?   "e: Event"
*[6] linea 31
?   "Date.now()" 
*[7] linea 51
?   localStorage.setItem() 
?   JSON.stringify() 
*[8] linea 62
?   "change"
*[9] linea 70
?   .append()
*[10] linea 71
?   .prepend()
 */
