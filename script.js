let number = [];
let simbol = 0;
let simbol2 = 0; 
let result = 0;

function calc() {
  
    let num = arguments[0];   
    number[number.length] = num;
 
    
    if(number.length == 2){
      
        if(simbol == '-'){
        result = parseFloat(number[0]) - parseFloat(number[1])
        number = []
        number[0] = result
        document.getElementById("screen").innerHTML = result.toFixed(2)
       
       }
       else if(simbol == '+'){
        result = parseFloat(number[0])+parseFloat(number[1]);
        number = [];
        number[0] = result;
        document.getElementById("screen").innerHTML = result.toFixed(2);
       
       }
       else if(simbol== '*'){
        result = parseFloat(number[0])*parseFloat(number[1]);
        number = [];
        number[0] = result;
        document.getElementById("screen").innerHTML = result.toFixed(2);
       
       }
       else if(simbol == '/'){
        result = parseFloat(number[0])/parseFloat(number[1]);
        number = [];
        number[0] = result;
        document.getElementById("screen").innerHTML = result.toFixed(2);
       
       }
       
       
    }
    else{

    }
        simbol = arguments[1];
        simbol2 = simbol;
        document.getElementById("title2").value = simbol;
      
     
    
        if(result != 0){
           
            return result.toFixed(2);
        }
        else{
            
            return arguments[0];
        }

}





function typeScreen(){
  
    length = document.getElementById("screen").innerText.length;
    let text = document.getElementById("screen").innerText;
    
    if(simbol2 != 0){
        text = "";
        simbol2 = 0;
    }

    if (length > 0 && text != "0" ){
        for(let i = 0; i < 19; i++){
            return text + arguments[0]; 
        }
    }

    else if (text == '0'){        
            return arguments[0];  
    }
    
}

function equal(){

    let num = arguments[0];   
    number[number.length] = num;

        if(simbol == '-'){
        result = parseFloat(number[0]) - parseFloat(number[1])       
        document.getElementById("screen").innerHTML = result.toFixed(2);
        number = [];
        simbol = 0;
        simbol2 = 0; 
        
       }
       else if(simbol == '+'){
        result = parseFloat(number[0])+parseFloat(number[1]);        
        document.getElementById("screen").innerHTML = result.toFixed(2)
        number = [];
        simbol = 0;
        simbol2 = 0; 
       
       }
       else if(simbol== '*'){
        result = parseFloat(number[0])*parseFloat(number[1]);        
        document.getElementById("screen").innerHTML = result.toFixed(2)
        number = [];
        simbol = 0;
        simbol2 = 0; 
       
       }
       else if(simbol == '/'){
        result = parseFloat(number[0])/parseFloat(number[1]);        
        document.getElementById("screen").innerHTML = result.toFixed(2)
        number = [];
        simbol = 0;
        simbol2 = 0; 
       
       }
    return result.toFixed(2);
}

function aC(){
    number = [];
    simbol = 0;
    simbol2 = 0;
    result = 0;
   return 0;

}

function procent(){
    let procentNumber = document.getElementById("screen").innerHTML / 100;
    document.getElementById("screen").innerHTML = procentNumber;
    return procentNumber;
}
function plusMinus(){
    let numberPlusMinus = document.getElementById("screen").innerHTML * -1;
    document.getElementById("screen").innerHTML = numberPlusMinus;
    return numberPlusMinus;
}



function dot(){
  

   length = document.getElementById("screen").innerText.length;
   let text = document.getElementById("screen").innerText;
   return text + '.'; 
}

