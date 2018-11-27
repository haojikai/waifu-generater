const PI = 3.14159;

function startGenerator() {
    generateBody();
    generateAge();
    generateHair();
    generateEyes();
    generateAttribute();
    generateCharacter();
    generateCup();
    generateSkin();
    document.getElementById("shdzdiv").style.display="block";
    document.getElementById("yydiv").style.display="block";
}

function generateCup() {
    //randomData("cupsize",Cupsize_data);
    var text1 = document.getElementById("cupsize");
    text1.innerHTML = "哈哈哈~~~   必须D!!";
}

function generateSkin() {
    //randomData("skin",Skin_data);
    var text1 = document.getElementById("skin");
    text1.innerHTML = "种子般的黄！";
}

function generateBody() {
    var height = normalDistribution(165, 5)
    height = Math.round(height);
    var text1 = document.getElementById("height");
    text1.innerHTML=height;
     text1.innerHTML="园园多高她多高";
    var bmi = normalDistribution(20, 1);
    var weight = Math.round(bmi*(height/100)*(height/100));
    var text2 = document.getElementById("weight");
    text2.innerHTML = weight;
    text2.innerHTML="园园多重她多重";
}
function generateAge() {
    var gH = Math.round(normalDistribution(20, 2));
    var text1 = document.getElementById("age");
    text1.innerHTML = gH;   
    text1.innerHTML = "园园多大她多大";
}
function generateHair() {
    randomData("hairstyle",Hair_data);
    var newColor = randomRGB();
    var text2 = document.getElementById("hairColor");
    text2.innerHTML = "园园啥色她啥色";
}
   // text2.style.backgroundColor = newColor;
    //text2.style.backgroundColor = "园园啥色她啥色";
function generateEyes() {
    var text1 = document.getElementById("eyeColor");
    var newColor = randomRGB();
    text1.innerHTML = newColor;
    text1.innerHTML ="园园啥色她啥色";
    //text1.style.backgroundColor = newColor;
    //text1.style.backgroundColor = "园园啥色她啥色";
}
function generateAttribute() {
    //randomData("attribute",Attribute_data);
    var text1 = document.getElementById("attribute");
    text1.innerHTML = "贤惠，大方，漂亮，一切的好词~";
}
function generateCharacter() {  
    //randomData("character",Character_data);
      var text1 = document.getElementById("character");
    text1.innerHTML = "就是好..";
}

function normalDistribution(u, v) {
    // Box-Muller
    var x1 = Math.random();
    var x2 = Math.random();
    var nD = Math.sqrt(-2*Math.log(x1))*Math.sin(2*PI*x2)*v+u;
    return nD;
}
function randomRGB() {
    var rValue = Math.round(Math.random()*255).toString(16);
    var gValue = Math.round(Math.random()*255).toString(16);
    var bValue = Math.round(Math.random()*255).toString(16);
    if(rValue.length <2)
        rValue = "0" + rValue;
    if(gValue.length <2)
        gValue = "0" + gValue;
    if(bValue.length <2)
        bValue = "0" + bValue;                
    return "#"+rValue+gValue+bValue;
}
function randomData(elementId,dataName) {
    var t1Num = Math.floor(Math.random()*dataName.length);
    var text1 = document.getElementById(elementId);
    text1.innerHTML = dataName[t1Num];    
}
function qd(){
     var text1 = document.getElementById("shdz");


    if(confirm("收货地址是"+text1.value+"吗？")){
        alert("哈哈哈，，，你似不似撒？");
    }
}

