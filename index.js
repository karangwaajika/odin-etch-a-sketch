const container = document.querySelector('#container');
const userInput = document.querySelector('button.userInput');

for(let i=1; i<= 256; i++){
    const div = document.createElement('div');
    div.classList.add('grid');
    div.classList.add(`grid-${i}`);
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
    }
    
})