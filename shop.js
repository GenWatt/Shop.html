var number=1; 
var timer1;
var timer2;
var timer3;
function slider(){
    var slider=document.querySelector(".slider");
    var track=`<img src="img/laptop${number}.jpeg"alt="laptop">`;
    slider.innerHTML=track;
   
   $(".slider").fadeIn(300);
   number++;
   
   if(number>2)
   {
    number=0;
    } 
    reset();
}
function reset(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    change();
}
function smoothOut() {
    $(".slider").fadeOut(300);
    timer3=setInterval("slider()",300);   
 }
 function change(){
    timer1=setInterval ("slider()",4900);
    timer2=setInterval("smoothOut()",4500);
    slide();
 }
 window.onload=change();
 function slide(){
    var slide1=document.getElementById("slide-changer");
    var slide2=document.getElementById("slide-changer1");
    var slide3=document.getElementById("slide-changer2");
    if(number==1){
        slide1.style.backgroundColor="orange";
        slide1.style.border="2px solid white";
        slide2.style.backgroundColor="transparent";
        slide2.style.border="2px solid orange";
        slide3.style.backgroundColor="transparent"; 
        slide3.style.border="2px solid orange";
    }
    else if(number==0){
        slide1.style.backgroundColor="transparent";
        slide1.style.border="2px solid orange";
        slide2.style.backgroundColor="transparent";
        slide2.style.border="2px solid orange";
        slide3.style.backgroundColor="orange";
        slide3.style.border="2px solid white"; 
    }
    else if(number==2){
        slide1.style.backgroundColor="transparent";
        slide1.style.border="2px solid orange";
        slide2.style.backgroundColor="orange";
        slide2.style.border="2px solid white";
        slide3.style.backgroundColor="transparent"; 
        slide3.style.border="2px solid orange";
    } 
 }
function slide1(){
    if(number==0){
        reset();
    }
    number=0;
    smoothOut();
 
 }
 function slide2(){
    if(number==1){
        reset();
    }
    number=1;
    smoothOut();
 }
 function slide3(){
    if(number==2){
        reset();
    }
    number=2;
    smoothOut();
 }

