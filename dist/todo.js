const todos = JSON.parse(localStorage.getItem("todos") || "[]");
const appendTodo = (newTodo, elements) => {
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
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
const handleSubmit = (e, elements) => {
    e.preventDefault();
    const newTodo = {
        id: Date.now(),
        todo: elements.inputTodo.value,
        completed: false,
    };
    todos.push(newTodo);
    saveTodos();
    appendTodo(newTodo, elements);
    elements.inputTodo.value = "";
};
const clearTodos = (elements) => {
    todos.length = 0;
    saveTodos();
    elements.todoList.innerHTML = "";
};
const initializeTodoList = (elements) => {
    todos.forEach((todo) => appendTodo(todo, elements));
};
export { handleSubmit, clearTodos, initializeTodoList };
//# sourceMappingURL=todo.js.map