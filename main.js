Webcam.set({
    width: 350,
    height: 300,
    dest_width: 350,
    dest_height: 300,
    image_format: 'png',
    png_quality: 90  // 0 -100
  });
  
  camera = document.getElementById("Webcam1");
  
  Webcam.attach('#Webcam1');
  
  
  function take_snapshot() {
    Webcam.snap(function (data_uri) {
      document.getElementById("CapturedImage").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
  }
  
  console.log('ml5 version:', ml5.version);
  
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/NrlFVqB2R/model.json', modelLoaded);
  
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
  function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }
  
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      document.getElementById("Object").innerHTML = results[0].label;
      document.getElementById("Accuracy1").innerHTML = results[0].confidence.toFixed(3);
    }
  }