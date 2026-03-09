function changeColor(){
let colors = ["red","blue","green","yellow","purple","orange"];
let random = colors[Math.floor(Math.random()*colors.length)];
document.body.style.backgroundColor = random;
}