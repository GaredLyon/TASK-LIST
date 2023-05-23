import { Elements } from "../types/elements";
import { $ } from "../utilities/DOM.utility.js";

export const elements : Elements = {
	
		btnSubmit: $<HTMLButtonElement>(".todo-form__btn")!,
		btnDelete: $<HTMLButtonElement>(".btn-delete")!,
		formTodo: $<HTMLFormElement>(".todo-form")!,
		inputTodo: $<HTMLInputElement>(".todo-form__input")!,
		todoList: $<HTMLLIElement>(".todo-list")!,

};
