// sketch api for 
//set_height_height = document.getElementById("width_height");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//resizing

 //part 1 
 //canvas.style.width = window.innerWidth;
// canvas.style.height = window.innerHeight;
// ctx.strokeStyle ="red";
// ctx.strokeRect(10,10,20,50);
// ctx.fillRect(10,10,20,50);
// ctx.strokeStyle="blue";
// ctx.strokeRect(20,20,20,50);
ctx.canvas.width = 1500;
ctx.canvas.height = 500;
//canvas.style.height = canvas.height +"px";
//canvas.style.width = canvas.width +"px";
//ctx.beginPath();
//ctx.moveTo(100,100);
//ctx.lineTo(200,100);
//ctx.lineTo(200,150);
//ctx.closePath();
//ctx.stroke();

//variables defaults
let paint_on = false;
var color_choice = "black";
let line_width = 1;
// size selections


// color selections
function brush_draw_size_01()
{
ctx.restore();
line_width = 1;
}
function brush_draw_size_02()
{
ctx.restore();
line_width = 2;
}
function brush_draw_size_03()
{
ctx.restore();
line_width = 3;
}
function brush_draw_size_04()
{
ctx.restore();
line_width = 4;
}
function brush_draw_size_05()
{
ctx.restore();
line_width = 5;
}
function color_black()
{
ctx.restore();
color_choice = "black";
}
function color_red()
{
ctx.restore();
color_choice = "red";
}
function color_blue()
{
ctx.restore();
color_choice = "blue";
}
function color_green()
{
ctx.restore();
color_choice = "green";
}
function eraser()
{
ctx.restore();
line_width = 5;
color_choice = "#ffffff";
}
//eventListeners
function startPosition(){
paint_on = true;
}
function finishPosition(){
paint_on = false;
ctx.beginPath();
}
function draw(e){
	if(!paint_on) return;
	ctx.strokeStyle = color_choice;
	ctx.lineWidth = line_width;
	ctx.lineCap ="round";
	ctx.lineTo(e.clientX , e.clientY);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(e.clientX, e.clientY);
}

//canvas variables
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishPosition);
canvas.addEventListener('mousemove', draw);