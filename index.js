
var form = document.querySelector('form')
var gpa1 = document.querySelector('#gpa1 input')
var gpa2 = document.querySelector('#gpa2 input')
var gpa3 = document.querySelector('#gpa3 input')
var gpa4 = document.querySelector('#gpa4 input')
var gpa5 = document.querySelector('#gpa5 input')
var gpa6 = document.querySelector('#gpa6 input')
var gpa7 = document.querySelector('#gpa7 input')
var gpa8 = document.querySelector('#gpa8 input');
var msg  = document.querySelector('.result');

console.log(gpa1.parentElement);

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    var v1 = gpa1.value;
    var v2 = gpa2.value;
    var v3 = gpa3.value;
    var v4 = gpa4.value;
    var v5 = gpa5.value;
    var v6 = gpa6.value;
    var v7 = gpa7.value;
    var v8 = gpa8.value;
    var myArray = [v1 , v2 ,v3, v4 ,v5 ,v6, v7 , v8];

    var r1 = (v1*5)/100;
    var r2 = (v2*5)/100;
    var r3 = (v3*5)/100;
    var r4 = (v3*10)/100;
    var r5 = (v4*15)/100;
    var r6 = (v5*20)/100;
    var r7 = (v6*25)/100;
    var r8 = (v7*15)/100;
    var finalResult = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8;
    finalResult = finalResult.toString().slice(0,4);

    for(var i = 0; i<myArray.length; i++){
        if(myArray[i].match(/[a-z]+/) || myArray[i].match(/[A-Z]+/) || myArray[i].match(/[$@#&!]+/)){
            msg.innerHTML = "Sorry, please enter the correct input."
            msg.className = 'result incorrect'
            
        }
        else{
            msg.innerHTML = "Your Final CGPA is -"+ finalResult;
        }
    }

 

  
})






