let re = []
let count = 0
const  b1= document.querySelector("#a");
const  b2= document.querySelector("#b");
const  b3= document.querySelector("#c");
const  b4= document.querySelector("#d");
const  b5= document.querySelector("#e");
const  b6= document.querySelector("#f");
const  b7= document.querySelector("#g");
const  b8= document.querySelector("#h");
const  b9= document.querySelector("#i");
const  b0= document.querySelector("#j"); 
const  bdot= document.querySelector("#dot");
const  clear= document.querySelector("#clear");
const  equal= document.querySelector(".eq");
const  ex= document.querySelector(".ex");
const  sub= document.querySelector(".sub");
const add = document.querySelector(".add");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const answerport = document.querySelector(".result")
const result = document.querySelector(".resultport")

function handle(num) {
    result.value+=num
}
function handled(op){
    result.value+=op
    count = 0
}

b1.addEventListener("click",()=>{ handle(1)},false);
b2.addEventListener("click",()=> handle(2),false);
b3.addEventListener("click",()=> handle(3),false);
b4.addEventListener("click",()=> handle(4),false);
b5.addEventListener("click",()=> handle(5),false);
b6.addEventListener("click",()=> handle(6),false);
b7.addEventListener("click",()=> handle(7),false);
b8.addEventListener("click",()=> handle(8),false);
b9.addEventListener("click",()=> handle(9),false);
b0.addEventListener("click",()=> handle(0),false);
bdot.addEventListener("click",()=> handle1('.'),false);
clear.addEventListener("click", cleared,false);
ex.addEventListener("click",()=> exist(),false);
equal.addEventListener("click",()=> answerprt(result.value),false);
sub.addEventListener("click",()=> handled('-'),false);
add.addEventListener("click",()=> handled('+'),false);
mul.addEventListener("click",()=> handled('*'),false);
div.addEventListener("click",()=> handled('/'),false);


async function answerprt(str){
    
    answerport.value = eval(str)
  }
  function handle1(dot){
    if(count==0)
   { result.value+=dot
    number =result.value
    for ( i in number){
        if('.'== number[i]){
            count = 1;
        }

    }
   }
}
function exist(){
    result.value =result.value.slice(0,-1) 
}

function cleared(){
    count=0
    if(result.value || answerport.value){
        result.value="";
        answerport.value=""
    }
    for(i = re.length ; i>0;i--){
    re.pop()}
}  