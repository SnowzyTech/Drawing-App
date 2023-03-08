const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const colorEl= document.getElementById('color');
const clear= document.getElementById('clear');
const sizeEl = document.getElementById('size');

const cxt = canvas.getContext('2d');

let size = 30;
let isPressed = false;
let color = 'black';
x = undefined;
y=undefined;

canvas.addEventListener('mousedown',(e)=>{
    isPressed= true;
    x = e.offsetX;
    y =e.offsetY;
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed= false;
    x = undefined;
    y = undefined
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x,y)

    drawLIne(x,y,x2,y2);
    x = x2;
    y = y2
    }
});

function drawCircle(x,y){
    cxt.beginPath();
    cxt.arc(x,y,size,0,Math.PI*2);
    cxt.fillStyle = color;
    cxt.fill();

};
function drawLIne(x1,y1,x2,y2){
    cxt.beginPath();
    cxt.moveTo(x1,y1);
    cxt.lineTo(x2,y2)
    cxt.strokeStyle = color;
    cxt.lineWidth = size * 2;
    cxt.stroke();

}
increaseBtn.addEventListener('click',()=>{
    size += 5;
    if(size>50){
        size = 50;
    }
    updateSOS()

});
decreaseBtn.addEventListener('click',()=>{
    size -= 5;
    if(size<5){
        size = 0;
    }
    updateSOS()

});
function updateSOS(){
    sizeEl.innerText = size;
}
clear.addEventListener('click',()=>{
    cxt.clearRect(0,0,canvas.clientWidth,canvas.height)
})
colorEl.addEventListener('click',(e)=>{
    color = e.target.value;

})
//  function draw(){
//     cxt.clearRect(0,0,canvas.clientWidth,canvas.height);
//      drawCircle(x,y);
//      requestAnimationFrame(draw);
//  }
//  draw()