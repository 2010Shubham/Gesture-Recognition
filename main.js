

Webcam.set({
  width:350,
  height:300,
  image_format: "png",
  png_quality:90
});


Webcam.attach("#camera");

function captureimage(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML = "<img src= '"+ data_uri +"'  id = 'snap' />";
        }
    );
}


console.log("ML5 Version is ",ml5.version);


my_classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/G4UKgADuN/model.json", model_loaded);

function model_loaded(){
    console.log("Yes, the model is loaded");
    
}



function identify(){
    img = document.getElementById("snap");
    my_classifier.classify(img, got_result);
    
}


function speak_pred(){
    var synth = window.speechSynthesis;
    content_1 = "My Prediction is " + prediction1;
    utterthis = new SpeechSynthesisUtterance(content_1);
    utterthis.rate = 0.5;
    synth.speak(utterthis);
}

function got_result(error, result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(result);

        prediction1 = result[0].label;
        speak_pred();
        document.getElementById("result_gesture").innerHTML = prediction1;

    
       
    }

}




