video="";
status="";
objects=[];

function preload(){
    
    
     
}

function setup(){
     canvas=createCanvas(600,380);
     canvas.center();
}

function draw(){
     image(video,0,0,595,375);
     
     if(status!=""){
          objectDetector.detect(video,gotResult);
          for(i=0;i<objects.length;i++){
               document.getElementById("status").innerHTML="status: objects are detected";
               document.getElementById("status").innerHTML="Number of objects detected are: "+objects.length;
               fill("yellow");
               percent=Math.floor(objects[i].confidence*100);
               text(objects[i].label+ percent+" %",objects[i].x+15,objects[i].y+15);
               noFill();
               stroke("blue");
               rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

          }
     }

     
}

function gotResult(error,results){
     if(error){
          console.error(error);
     }
     else{
          console.log(results);
          objects=results;
     }
}

function start(){
     video=document.getElementById("chVideo").innerHTML;
    this.video=video;
     objectDetector=ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("status").innerHTML="Status: Detecting objects";
}

function modelLoaded(){
     console.log("model is loaded!");
     status=true;
     video.loop();
     video.volume(0);
     video.speed(1);


     
}