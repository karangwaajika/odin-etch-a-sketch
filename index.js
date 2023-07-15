const container = document.querySelector('#container');
const userInput = document.querySelector('button.userInput');

for(let i=1; i<= 256; i++){
    const div = document.createElement('div');
    let red = Math.floor(Math.random() * (255-1 +1))+1;
    let green = Math.floor(Math.random() * (255-1 +1))+1;
    let blue = Math.floor(Math.random() * (255-1 +1))+1;
    div.classList.add('grid');
    div.classList.add(`grid-${i}`);
    div.onmouseover = function(){div.setAttribute('style', `background-color:rgb(${red}, ${green}, ${blue})`)};
    container.appendChild(div)
}


userInput.addEventListener('click', () => {
    let gridSize = +prompt("Enter Grid Size");
    
    if(gridSize > 100){
        alert('Please enter a number less than or equal to 100')
    }
    else{
        const oldDiv = document.querySelectorAll('div.grid');

        oldDiv.forEach((div)=>{
            div.remove()
        })
        for(let i=1; i<= gridSize*gridSize; i++){
            let newGridSize = (400/gridSize);
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid');
            newDiv.classList.add(`grid-${i}`);
            newDiv.setAttribute('style', `height: ${newGridSize}px;width: ${newGridSize}px;`)
            container.appendChild(newDiv)
        }
        
    }
    
})