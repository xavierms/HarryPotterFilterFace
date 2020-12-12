let video
let poseNet 
let lentes
const ojoIzquierdo = {x:0,y:0}

function preload(){
  
  lentes = loadImage('LentesHarry.png')
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  video = createCapture(VIDEO)
  video.hide()
  poseNet = ml5.poseNet(video, inicializarPoseNet)
  

}  

function draw() {
image(video,0,0)
image(lentes,ojoIzquierdo.x-230,ojoIzquierdo.y-110,400,190)

}

function inicializarPoseNet(){
  poseNet.on('pose', (results)=>{
  let x = results[0].pose.leftEye.x
  let y = results[0].pose.leftEye.y
  
  ojoIzquierdo.x = lerp(x,ojoIzquierdo.x,0.5)
  ojoIzquierdo.y = lerp(y,ojoIzquierdo.y,0.5)  
     
  })
}