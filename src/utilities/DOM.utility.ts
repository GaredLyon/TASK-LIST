export const $ = <T extends HTMLElement = HTMLElement>(selector: string) => document.querySelector<T>(selector);
