var clr = document.getElementById("on");
var sign = document.getElementById("sign");
var div = document.getElementById("dividido");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var por = document.getElementById("por");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var menos = document.getElementById("menos");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var zero = document.getElementById("0");
var punto = document.getElementById("punto");
var igual = document.getElementById("igual");
var mas = document.getElementById("mas");

var current = document.getElementById("display");
var prev = " ";
var first_digit = true;
var operacion = "";



var calculadora = {

    init: function(){
        this.digit_insert(one);
        this.digit_insert(two); 
        this.digit_insert(three); 
        this.digit_insert(four); 
        this.digit_insert(five); 
        this.digit_insert(six); 
        this.digit_insert(seven); 
        this.digit_insert(eight);
        this.digit_insert(nine);
        this.digit_insert(zero);
        this.cambiar_signo(sign);
        this.point_insert(punto);
        this.clear(clr);
        this.operaciones(mas);
        this.operaciones(menos);
        this.operaciones(por);
        this.operaciones(div);
        this.resolver(igual)

    },

    
    digit_insert: function(elemento){
    

        elemento.addEventListener("click", function(){

            elemento.style.transform = "scale(0.95,0.95)"
            setInterval(() => {
                elemento.style.transform = "scale(1,1)"
            }, 400);
            
           if(current.innerHTML.length <= 7){
            
                if((current.innerHTML === "0" || current.innerHTML==="-0") && elemento.id ==="0") {return}
            
                else if (current.innerHTML.length == 1 && first_digit){
                    current.innerHTML =  elemento.id 
                    first_digit = false;
                }else if(current.innerHTML === "-0" && first_digit){
                    current.innerHTML = "-" + elemento.id
                    first_digit = false;
                }else{
                    current.innerHTML = current.innerHTML + elemento.id
                }
           }
           else{return}

        });
            

    },

    point_insert: function(elemento){
        elemento.addEventListener("click", function(){
            elemento.style.transform = "scale(0.95,0.95)"
            setInterval(() => {
            elemento.style.transform = "scale(1,1)"
            }, 400);

        if( current.innerHTML.length < 7){
            if(current.innerHTML.includes(".")){return}
            else{
                current.innerHTML = current.innerHTML + "."
            }
        }else{return}
       
        })    

    },

    cambiar_signo: function(elemento){
        elemento.addEventListener("click", function(){

            elemento.style.transform = "scale(0.95,0.95)"
            setInterval(() => {
                elemento.style.transform = "scale(1,1)"
            }, 400);

            if(current.innerHTML.includes("-")){
                var size = current.innerHTML.length;
                current.innerHTML = current.innerHTML.slice(1,size); 
            }else{
                current.innerHTML = "-" +  current.innerHTML;
            }
        })

    },

    operaciones: function(elemento){
        elemento.addEventListener("click", function(){

            elemento.style.transform = "scale(0.95,0.95)"
            setInterval(() => {
                elemento.style.transform = "scale(1,1)"
            }, 400);
            
            first_digit = true;
            prev = current.innerHTML;
            current.innerHTML = "0";
            operacion = elemento.id

        })

        
    },

    clear: function(elemento){
    
        elemento.addEventListener("click", function(){
            elemento.style.transform = "scale(0.95,0.95)"
            setInterval(() => {
                elemento.style.transform = "scale(1,1)"
            }, 400);

            current.innerHTML = "0"; 
            prev = ""; 
            first_digit = true;
        })
        
    },

    resolver: function(elemento){

    elemento.addEventListener("click", function(){
            var res = 0;

        switch (operacion){ 
            case "mas" : 
                res = parseFloat(prev) + parseFloat(current.innerHTML);
                var fixed = res.toFixed(1)
                current.innerHTML = fixed.toString();
            break;

            case "menos" : 
                res = parseFloat(prev) - parseFloat(current.innerHTML);
                var fixed = res.toFixed(1)
                current.innerHTML = fixed.toString();
            break; 
            
            case "por" : 
                res = parseFloat(prev) * parseFloat(current.innerHTML);
                var fixed = res.toFixed(1)
                current.innerHTML = fixed.toString();
            break;

            case "dividido" : 
                res = parseFloat(prev) / parseFloat(current.innerHTML);
                var fixed = res.toFixed(1)
                current.innerHTML = fixed.toString();
            break; 

            default: return
        }
        })
        
    },

};

calculadora.init();