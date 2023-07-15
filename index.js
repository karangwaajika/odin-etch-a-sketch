const container = document.querySelector('#container');


for(let i=1; i<= 256; i++){
    const content = document.createElement('div');
    content.classList.add('grid');
    content.classList.add(`grid-${i}`);
    container.appendChild(content)
}
