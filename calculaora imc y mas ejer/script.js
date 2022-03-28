window.onload = iniciar;//va a ejecutar la funcion iniciar cuando se haya cargado la web

function iniciar(){
  var btnCalcular = document.getElementById("btnCalcular");  
  btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;//obtengo valor de la caja de texto html
    //alert(peso)

    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;
    //alert(altura)

    var imc = peso /(altura * altura)
    alert("Su IMC es: " + Math.round(imc));//redondear decimales
    
}