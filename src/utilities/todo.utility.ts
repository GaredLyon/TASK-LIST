import { Elements } from "../types/elements";

interface Todo {
	id: number;
	todo: string;
	completed: boolean;
}

const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

const appendTodo = (newTodo: Todo, elements: Elements): void => {
	const newLi = document.createElement("li");
	const newInput = document.createElement("input");

	newInput.type = "checkbox";
	newInput.checked = newTodo.completed;

	const todoCompleted = () => {
		newTodo.completed = newInput.checked;
		saveTodos();
	};

	newInput.addEventListener("change", todoCompleted);

	newLi.classList.add("todo-list__item");
	newLi.append(newTodo.todo, newInput);
	elements.todoList.prepend(newLi);
};

const saveTodos = (): void => {
	localStorage.setItem("todos", JSON.stringify(todos));
};

export const handleSubmit = (e: Event, elements: Elements): void => {
	e.preventDefault();

	const newTodo: Todo = {
		id: Date.now(),
		todo: elements.inputTodo.value,
		completed: false,
	};

	todos.push(newTodo);
	saveTodos();
	appendTodo(newTodo, elements);

	elements.inputTodo.value = "";
};

export const clearTodos = (elements: Elements): void => {
	todos.length = 0;
	saveTodos();
	elements.todoList.innerHTML = "";
};

export const initializeTodoList = (elements: Elements): void => {
	todos.forEach((todo) => appendTodo(todo, elements));
};
