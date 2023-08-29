//input flied one
function getInputOne(inputIdOne){
     const iputFliedOne=  document.getElementById(inputIdOne);
     const iputFliedStringOne=iputFliedOne.value;
     const iputFliedFloatOne=parseFloat(iputFliedStringOne);
     return iputFliedFloatOne;
}
//input flied two
function getInputTwo(inputIdTwo){
     const iputFliedTwo=  document.getElementById(inputIdTwo);
     const iputFliedStringTwo=iputFliedTwo.value;
     const iputFliedFloatTwo=parseFloat(iputFliedStringTwo);
   return iputFliedFloatTwo;
}
//number with 0.5
function numberOne(numberOneOf){
    const astring=numberOneOf;
    const afloat=parseFloat(astring);
    return afloat;
}

//main calculation fucntion
function mainCalculation(value1,value2,value3){
    const temp1=  getInputOne(value1);
    const temp2= getInputTwo(value2);
    let numberA= numberOne(0.5);
    
    const temp=numberA*(temp1*temp2);
   document.getElementById(value3).innerText=temp;

}
//Ellispe
function EllispeGet(value1,value2,value3){
    const temp1=  getInputOne(value1);
    const temp2= getInputTwo(value2);
    let numberA= numberOne(3.1416);
    
    const temp=numberA*(temp1*temp2);
    
  
   document.getElementById(value3).innerText=temp;

}

//parallelogam& rombos
function RombosGet(value1,value2,value3){
    const temp1=  getInputOne(value1);
    const temp2= getInputTwo(value2);
    
    
    const temp=temp1*temp2;
    
  
   document.getElementById(value3).innerText=temp;
  
}
//button function
function getButoon(buttonid){

    const buttonGet=document.getElementById(buttonid).addEventListener("click",function(){
 
 mainCalculation("Input-1-one","Input-2-one",'Span-one');
 mainCalculation("Input-1-four","Input-2-four",'Span-four');
 mainCalculation("Input-1-five","Input-2-five",'Span-five');
 EllispeGet("Input-1-six","Input-2-six",'Span-six');
 RombosGet("Input-1-two","Input-2-two",'Span-two');
 RombosGet("Input-1-three","Input-2-three",'Span-three');

    })

}

//button function call
getButoon("btn-one");
getButoon("btn-two");
getButoon("btn-three");
getButoon("btn-four");
getButoon("btn-five");
getButoon("btn-six");