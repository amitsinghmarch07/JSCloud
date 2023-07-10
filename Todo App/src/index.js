//~!Model (M)

//~*Controller (C)

import TodoComponent from "./TodoComponent.js";
import LocalService from "./LocalService.js";
// import RemoteService from "./RemoteService.js";

document.addEventListener("DOMContentLoaded", () => {
    const localService = new LocalService();
    const todoApp = new TodoComponent(localService);
});