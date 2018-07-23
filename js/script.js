let variable=document.getElementById('div1');
console.log(variable);

(function (){
    document.getElementById('btn_1').onclick = (function () {
        alert('Haz clicado');
    });
})();
       
(function (){
   let palabra1='hola';
   let palabra2='como';
   let palabra3='estas';

   let concatenar='"'+palabra1+'" , "'+palabra2+'" , "'+palabra3+'":';
    console.log(concatenar);
    
})();

(function (){
    var elemento = document.getElementById("a_hola");
  
    elemento.data-text   // M
      
    document.getElementById('btn_1').onclick = (function () {
        alert('Haz clicado');
    });
})();