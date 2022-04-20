function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9B73Akt-E/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults (error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results)
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img0=document.getElementById("pic1");
        img1=document.getElementById("pic2");
        img2=document.getElementById("pic3");
        img3=document.getElementById("pic4");



        if (results[0].label == "Emotional Damage")
        {
            img0.src='RASENGAN.png';
            img1.src='ED.gif';
            img2.src='NANDAMO.png';
            img3.src='bg.png';
        }
        else if (results[0].label == "Rasengan")
        {
            img0.src='RASENGAN.gif';
            img1.src='ED.png';
            img2.src='NANDAMO.png';
            img3.src='bg.png';
        }
        else if (results[0].label == "Nandamo")
        {
            img0.src='RASENGAN.png';
            img1.src='ED.png';
            img2.src='NANDAMO.gif';
            img3.src='bg.png';
        }
        else
        {
            img0.src='RASENGAN.png';
            img1.src='ED.png';
            img2.src='NANDAMO.png';
            img3.src='bg.gif';
        }
   }
}