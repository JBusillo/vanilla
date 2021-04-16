import { dep1 } from 'dependency1'

const newDiv = document.createElement("div");
newDiv.id = "vanilla"
const newContent = document.createTextNode("Hello from main.js in 'Vanilla'");
newDiv.appendChild(newContent);
const currentDiv = document.getElementById("app");
document.body.insertBefore(newDiv, currentDiv);
dep1()


