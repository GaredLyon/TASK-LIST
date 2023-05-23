const $ = (selector) => document.querySelector(selector);
const getElements = () => {
    return {
        btnSubmit: $(".todo-form__btn"),
        btnDelete: $(".btn-delete"),
        formTodo: $(".todo-form"),
        inputTodo: $(".todo-form__input"),
        todoList: $(".todo-list"),
    };
};
export { $, getElements };
//# sourceMappingURL=elements.js.map