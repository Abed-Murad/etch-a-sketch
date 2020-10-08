const body = document.querySelector("body");
const container = document.querySelector("main");


createGrid(16, 16)


const button = document.createElement('button');
button.textContent = "Reset"
button.addEventListener('click', () => {
    let newSize = prompt("Enter new size");
    console.log(newSize)
    createGrid(newSize , newSize)
})
body.appendChild(button)


function createGrid(width, height) {
    container.style.display = "grid"
    container.style.gridTemplateRows = `repeat(${width} , 30px)`
    container.style.gridTemplateColumns = `repeat(${height} , 30px)`


    for (let i = 0; i < (width * height); i++) {
        const newDiv = document.createElement('div');
        newDiv.style.borderStyle = "solid"
        newDiv.style.borderWidth = "1px"
        newDiv.style.borderColor = "black"
        newDiv.addEventListener('mouseover', () => {
            newDiv.classList.add("item")
        })
        container.appendChild(newDiv)
    }


}