var gridValue = prompt('Enter grid size in number(max value = 100)');
var fillColor = 'black';
var hue = 0;
var isRainbow = false;
var erase = false;
if (gridValue > 100) {
  gridValue = 100;
}
var containerNode = document.querySelector('.container');

function createGrid(containerNode) {
  if (containerNode) {
    if (containerNode.hasChildNodes()) {
      containerNode.replaceChildren();
    }
    const childNodes = document.createDocumentFragment();
    Array.from({ length: gridValue * gridValue }, (v, i) => {
      let node = document.createElement('div');
      node.setAttribute('class', 'item' + i);
      node.style.setProperty('height', '10px');
      node.style.setProperty('width', '10px');
      node.style.setProperty('border', '0.5px solid black');
      node.addEventListener('mouseenter', (e) => {
        // node.style.setProperty('border','0.5px solid red');
      })
      node.addEventListener('mouseleave', (e) => {
        if(erase){
          node.style.setProperty('background', `white`);
        }else if(isRainbow){
          if(hue==360){
            hue = 0;
          }
          hue++;
          node.style.setProperty('background', `hsl(${hue},100%,50%)`);
          }else{
              node.style.setProperty('background', `${fillColor}`);
          }        
      })
      childNodes.appendChild(node)
    })
    containerNode.style.setProperty('display', 'grid');
    containerNode.style.setProperty('grid-template-columns', `repeat(${gridValue},10px)`);
    containerNode.appendChild(childNodes);
  };
}

createGrid(containerNode);

function toggleErase() {
  erase = !erase
}

function clearBoard() {
  createGrid(containerNode);
}

function toggleRainbow(){
  isRainbow = !isRainbow;
}