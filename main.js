leftWristX="";
rightWristX="";
difference="";

function setup(){
    video=createCapture(VIDEO);
    video.size(480, 500);
    canvas=createCanvas(420, 420);
    canvas.position(500, 100);

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
    }
}
function draw(){
    background('gray');
    textSize(difference);
    fill("#FF0000");
    text('Navya', 50, 400);
}