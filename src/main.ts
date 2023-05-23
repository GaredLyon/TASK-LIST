import { elements } from "./modules/elements.module";
import { handleSubmit, clearTodos, initializeTodoList } from "./utilities/todo.utility";

elements.formTodo.addEventListener("submit", (e) => handleSubmit(e, elements));

elements.btnDelete.onclick = () => clearTodos(elements);

window.addEventListener("DOMContentLoaded", () => {
	initializeTodoList(elements);
});
