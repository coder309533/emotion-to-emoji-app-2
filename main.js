Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});


camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri +'"/>';       
    })
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/o3pYfKjjm/model.json', modelLoaded);

function modelLoaded() {
    console.log ('modelLoaded');

}

function check() {
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error (error);
    }
    else {
        console.log (results);
        document.getElementById("result_emotion_name1"). innerHTML= results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label; 
        if (results[0].label == "Happy") {
            document.getElementById("update_emoji1").innerHTML = "&#128512;";

        }
        if (results[0].label == "Me and Cat") {
            document.getElementById("update_emoji1").innerHTML = "&#128049;";
        }

        if (results[0].label == "Sad") {
            document.getElementById("update_emoji1").innerHTML = "&#128532;";
        }

        if (results[0].label == "Angry") {
            document.getElementById("update_emoji1").innerHTML = " &#128545;";
        }

        if (results[1].label == "Happy") {
            document.getElementById("update_emoji2").innerHTML = "&#128512;";

        }
        if (results[1].label == "Me and Cat") {
            document.getElementById("update_emoji2").innerHTML = "&#128049;";
        }

        if (results[1].label == "Sad") {
            document.getElementById("update_emoji2").innerHTML = "&#128532;";
        }

        if (results[1].label == "Angry") {
            document.getElementById("update_emoji2").innerHTML = " &#128545;";
        }
    } 
}
