// Create a basic GUI in Chrome using JavaScript
const container = document.createElement("div");
container.style.position = "fixed";
container.style.top = "20px";
container.style.left = "20px";
container.style.padding = "20px";
container.style.background = "#f4f4f4";
container.style.border = "1px solid #ccc";
container.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
container.style.zIndex = 1000;

// Create a button
const button1 = document.createElement("button");
button1.textContent = "Click Me!";
button1.style.margin = "5px";
button1.onclick = () => alert("Button 1 Clicked!");

const button2 = document.createElement("button");
button2.textContent = "Another Button";
button2.style.margin = "5px";
button2.onclick = () => alert("Button 2 Clicked!");

// Append buttons to container
container.appendChild(button1);
container.appendChild(button2);

// Append container to body
document.body.appendChild(container);
