nose_x = 0;
nose_y = 0;

function setup(){
    canvas = createCanvas(350,270);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,200 );
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");

}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        

    }
}

function draw(){
    image(video, 0, 0, 350, 270);
}

function save(){
    save('snapshot.png');
}