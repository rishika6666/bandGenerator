// document.querySelector("button").addEventListener("click",handleclick);

var number = document.querySelectorAll("button").length;
var drumarr=document.querySelectorAll("button");
for(var i=0;i<number;i++){
    drumarr[i].addEventListener("click",function()
{
// console.log(this.style.color="white");
var innerbuttontext = this.innerHTML;
switch(innerbuttontext){
    case 'w': 
    var audio= new Audio("tom-1.mp3");
    audio.play(); 
    break;
    case 'l': 
    var audio= new Audio("tom-2.mp3");
    audio.play();
    break;
    case 'a': 
    var audio= new Audio("tom-3.mp3");
    audio.play();
    break;
    case 's': 
    var audio= new Audio("tom-4.mp3");
    audio.play();
    break;
    case 'd': 
    var audio= new Audio("snare.mp3");
    audio.play();
    break;
    case 'j': 
    var audio= new Audio("kick-bass.mp3");
    audio.play();
    break;
    case 'k': 
    var audio= new Audio("crash.mp3");
    audio.play();

default:
    console.log(innerbuttontext);

}
animate(innerbuttontext);
});
}


    document.addEventListener("keypress",function(event){
        // alert("key got pressed");
        // var innertext=this.innerHTML;
        // console.log(event);
        // console.log(event.key);
        var p=event.key;
        var keyelement=event.key;
        console.log("this key is pressed- "+ keyelement);
        
        switch(p){
            case 'w': 
            var audio= new Audio("tom-1.mp3");
            audio.play(); 
            break;
            case 'l': 
            var audio= new Audio("tom-2.mp3");
            audio.play();
            break;
            case 'a': 
            var audio= new Audio("tom-3.mp3");
            audio.play();
            break;
            case 's': 
            var audio= new Audio("tom-4.mp3");
            audio.play();
            break;
            case 'd': 
            var audio= new Audio("snare.mp3");
            audio.play();
            break;
            case 'j': 
            var audio= new Audio("kick-bass.mp3");
            audio.play();
            break;
            case 'k': 
            var audio= new Audio("crash.mp3");
            audio.play();
            break;
            default:
    console.log("wrong key pressed!");
        }

        animate(keyelement);

  });

  function animate(keyelement){
var insider=document.querySelector("."+keyelement);
// insider.setAttribute("class","pressed");
insider.classList.add("pressed");
setTimeout(function(){
insider.classList.remove("pressed");
},100);
  }
// document.querySelector(".set").addEventListener("click",handleclick);//myself
//did by myself before switch statements usage

// document.querySelector(".w").addEventListener("click",handleclick1);
// document.querySelector(".a").addEventListener("click",handleclick2);
// document.querySelector(".s").addEventListener("click",handleclick3);
// document.querySelector(".d").addEventListener("click",handleclick4);
// document.querySelector(".j").addEventListener("click",handleclick5);
// document.querySelector(".k").addEventListener("click",handleclick6);
// document.querySelector(".l").addEventListener("click",handleclick7);
// function handleclick1(){
//     // alert("i got clciked");
//     var audio = new Audio("crash.mp3");
//     audio.play();
//     }
    
// function handleclick2(){
//     // alert("i got clciked");
//     var audio = new Audio("tom-1.mp3");
//     audio.play();
//     }
// function handleclick3(){
//         // alert("i got clciked");
//         var audio = new Audio("tom-2.mp3");
//         audio.play();
//         }
// function handleclick4(){
//             // alert("i got clciked");
//             var audio = new Audio("tom-3.mp3");
//             audio.play();
//             }
// function handleclick5(){
//                 // alert("i got clciked");
//                 var audio = new Audio("tom-4.mp3");
//                 audio.play();
//                 }
// function handleclick6(){
//                     // alert("i got clciked");
//                     var audio = new Audio("snare.mp3");
//                     audio.play();
//                     }
//  function handleclick7(){
//                         // alert("i got clciked");
//                         var audio = new Audio("kick-bass.mp3");
//                         audio.play();
//                         }