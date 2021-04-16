module.exports = dependency2_function

function dependency2_function() {
    const newDiv = document.createElement("div");
    newDiv.id = "dep2"
    const newContent = document.createTextNode("Hello from index.js in 'Dependency2'");
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("dep1");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv.nextSibling)
}