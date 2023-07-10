"use strict";
//~!Model (M)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//~*Controller (C)
const TodoComponent_js_1 = __importDefault(require("./TodoComponent.js"));
const LocalService_js_1 = __importDefault(require("./LocalService.js"));
document.addEventListener("DOMContentLoaded", () => {
    const localService = new LocalService_js_1.default();
    const todoApp = new TodoComponent_js_1.default(localService);
});
