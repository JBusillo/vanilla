
import dep2 from "dependency2";

export function dep1() {
    const newDiv = document.createElement("div");
    newDiv.id = "dep1"
    const newContent = document.createTextNode("Hello from index.js in 'Dependency1'");
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("vanilla");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling)
    dep2()
}
