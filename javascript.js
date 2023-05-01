// function mouseup() {
//     document.body.style.backgroundColor ="white";
// }
// function mousedown(){
//     document.body.style.backgroundColor="red";
// }
// function titlec(){
//    var para =document.createElement("h2");
//    para.innerText="Hi";
//    document.body.appendChild(para);
//         var aa = document.createElement("p");
//         aa.innerText ="This is a paragraph";
//         document.body.appendChild(aa);
// }
function color1(){
    var colorclass = document.getElementsByClassName("box1")[0];
     colorclass.style.backgroundColor="darkred"; 
     var text1 = document.createElement("h3");
     text1.innerText="Color Value : Darkred";
     document.getElementsByClassName("box5")[0].appendChild(text1);
}
function color2(){
    var colorclass = document.getElementsByClassName("box2")[0];  
     colorclass.style.backgroundColor="darkcyan";
     var text1 = document.createElement("h3");
     text1.innerText="Color Value : Darkcyan";
     document.getElementsByClassName("box6")[0].appendChild(text1);  
}
function color3(){
    var colorclass = document.getElementsByClassName("box3")[0];
     colorclass.style.backgroundColor="darkblue";  
     var text1 = document.createElement("h3");
     text1.innerText="Color Value : Darkblue";
     document.getElementsByClassName("box7")[0].appendChild(text1);
}
function color4(){
    var colorclass = document.getElementsByClassName("box4")[0];
     colorclass.style.backgroundColor="pink";  
     var text1 = document.createElement("h3");
     text1.innerText="Color Value : Pink";
     document.getElementsByClassName("box8")[0].appendChild(text1);
}