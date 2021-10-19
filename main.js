
rightwristx=0;
leftwristx=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,170);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw()
{
    background("#808080");
    fill("#F90093");
    textSize(difference);
    text("shreya",50,400);
    document.getElementById("font_size").innerHTML="font-size = "+difference+" px";
}
function modelLoaded()
{
    console.log('PoseNet is Intialised!');
}
function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex =" + nosex  +"nosey ="+nosey );
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("leftwristx = " + leftwristx+ " rightwrisx ="+rightwristx +"difference = "+difference);
    }
}