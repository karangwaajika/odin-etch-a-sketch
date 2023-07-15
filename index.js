const container = document.querySelector('#container');
const userInput = document.querySelector('button.userInput');

for(let i=1; i<= 256; i++){
    const content = document.createElement('div');
    content.classList.add('grid');
    content.classList.add(`grid-${i}`);
    container.appendChild(content)
}

userInput.addEventListener('click', () => {
    let gridSize = +prompt("Enter Grid Size");
    alert(gridSize*2);
})