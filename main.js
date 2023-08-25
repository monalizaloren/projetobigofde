noseX=0;
noseY=0;

//crir a funcao preload
  clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

//crie a função setup
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-40;
    noseY = results[0].pose.nose.y;
  }
}

//crie a função draw
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 80, 35);
}

//crie a função 'take_snapshot'  
  save('myFilterImage.png');
}
