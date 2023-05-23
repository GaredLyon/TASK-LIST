import { getElements } from "./elements.js";
import { handleSubmit, clearTodos, initializeTodoList } from "./todo.js";
const elements = getElements();
elements.formTodo.addEventListener("submit", (e) => handleSubmit(e, elements));
elements.btnDelete.onclick = () => clearTodos(elements);
window.addEventListener("DOMContentLoaded", () => {
    const elements = getElements();
    initializeTodoList(elements);
});
//# sourceMappingURL=main.js.map