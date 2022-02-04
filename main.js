noseX=0
noseY=0

function preload(){
  mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas= createCanvas(300,300);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw(){
canvas.center()
image(video, 0, 0, 300, 300);
image(mustache, noseX-14, noseY+2, 30, 30  );
}
function take_snapshot()
{
    save('myFilterImage.png');
}
function modelLoaded()
{
    console.log("Posenet has started");
}
function gotPoses(result)
{
    if(result.length>0)
    {
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        console.log('nose x='+noseX)
        console.log('nose y='+noseY)
    }
}