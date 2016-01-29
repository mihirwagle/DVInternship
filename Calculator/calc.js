var num1="", num2="", operator="",mWindow=document.getElementById("mWindow");
function typeNumber(n){
  var num = mWindow.value;
  if(num == "0"&& n != "."){
    var str=n;
  } else if(n=="."&&(num==""||num=="0")){
    var str="0.";
  } else if(n=="." &&(num.search(/[.]/)>-1)){
    var str=num;
  } else{ 
    var str=num.concat(n); 
  }               
  mWindow.value=str;
}
function C(){         
  mWindow.value="";
}
function operate(op){
  if(mWindow.value==""||isNaN(mWindow.value)){}
    else{
      num1=mWindow.value;
      operator=op;
      mWindow.value=mWindow.value.concat(op);
    }
  }
function calc(){

    if(num1!=""){
     var x=mWindow.value;
     num2=x.substring(((num1.length)+1));}
     if(num1!=""&&num2!=""){
      var res;
      switch(operator){
        case "+": 
        res=Number(num1)+Number(num2);
        break;
        case "-": 
        res=Number(num1)-Number(num2);
        break;
        case "*": 
        res=Number(num1)*Number(num2);
        break;

        case "/": 
        if(num2==0){
         res= Infinity;}
         else{
           res=Number(num1)/Number(num2);
         }
         break;

       }
       mWindow.value=res;
       num1="";
       num2="";
       alert(res);
     }
}
function sine(){
    if(mWindow.value==""||isNaN(mWindow.value)){}
      else{
        var x=((mWindow.value)*Math.PI)/(180);
        mWindow.value=Math.sin(x);
      }
}
function cosine(){
      if(mWindow.value==""||isNaN(mWindow.value)){}
        else{
          var x=((mWindow.value)*Math.PI)/(180);
          mWindow.value=Math.cos(x);
        }
}
function tangent(){
        if(mWindow.value==""||isNaN(mWindow.value)){}
          else{
            if(mWindow.value=="90"){
             mWindow.value=Infinity; 
           }  
           else{
             var x=((mWindow.value)*Math.PI)/(180);
             mWindow.value=Math.tan(x);
           }
         }
}
function Log10(){
        if(mWindow.value==""||isNaN(mWindow.value)){}
          else{
           var x = mWindow.value;
           var res = (Math.log(x))/(Math.log(10));
           mWindow.value = res;
         }
}
function ln(){
        if(mWindow.value==""||isNaN(mWindow.value)){}
          else{
           var x=mWindow.value;
           mWindow.value=Math.log(x);
         } 		  
}
function sqRoot(){
        if(mWindow.value==""||isNaN(mWindow.value)){}
          else{
           var x=mWindow.value;
           mWindow.value=Math.sqrt(x);
         }
}