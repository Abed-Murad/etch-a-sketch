const container = document.querySelector("main");

container.style.display = "grid"
container.style.gridTemplateColumns = "repeat(16 , 30px)"
container.style.gridTemplateRows = "repeat(16 , 30px)"


const gridCells = container.children


for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.textContent = "Div"
    newDiv.classList.add("item")
    container.appendChild(newDiv)
}