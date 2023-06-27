function formatString(e) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
  
    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/'
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' 
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' 
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' 
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' 
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' 
    ).replace(
      /\/\//g, '/' 
    );
  }
  function fun() {
    var a =document.getElementById("name");
    var x = document.getElementById("card");
    var y = document.getElementById("date");
    var c = document.getElementById("cvv");

    
    if (a.value == "" || a.length == 0 ){
    document.getElementById("text3").innerHTML="შეიყვანეთ სახელი ";
    a.style.borderBottomColor="red";
  
 } else if (x.value ==""|| x.length == 0){
     document.getElementById("text3").innerHTML="";
     document.getElementById("text4").innerHTML=" შეიყვანეთ ბარათის ნომერი";
     x.style.borderBottomColor="red";
     a.style.borderBottomColor="green";
     
 }else if (y.value == "" || y.length == 0 ) {
     document.getElementById("text4").innerHTML="";
    
     document.getElementById("text5").innerHTML=" მოქმედების წელი";
     y.style.borderBottomColor="red";
     x.style.borderBottomColor="green";
 
    
 }else if (c.value == "" || c.length == 0 ) {
    document.getElementById("text5").innerHTML="";
   
    document.getElementById("text6").innerHTML="CVV კოდი";
    y.style.borderBottomColor="green";
    c.style.borderBottomColor="red";

   
}
 
 else {
     document.getElementById("text6").innerHTML="";
     c.style.borderBottomColor="green";
     window.alert ("გადახდა წარმატებით განხორციელდა!");
     document.getElementById("myform").reset();
     a.style.borderBottomColor="grey";
     x.style.borderBottomColor="grey";
     y.style.borderBottomColor="grey";
     
     
     
 }
  }