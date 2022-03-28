window.onload = iniciar;

function iniciar(){
   //Boton agregar escucha el click
   var btnAgregar = document.getElementById("btnAgregar");
   btnAgregar.addEventListener("click", clickBtnAgregar);

   //Boton borrar escucha el click
   var btnBorrar = document.getElementById("btnBorrar");
   btnBorrar.addEventListener("click", clickBtnBorrar);
   
   //Renderizar la nota
   mostrarNotas();
}

function clickBtnBorrar(){
   localStorage.clear();
   mostrarNotas();

}

function clickBtnAgregar(){
   //Trae,ps txtNota
   var txtNota = document.getElementById("txtNota");

   //2h47minuts voy
   var notas = [];
   if (localStorage.notas){
      notas = JSON.parse(localStorage.notas);
   }
   


   notas.push(txtNota.value);
   localStorage.notas = JSON.stringify(notas);//transforma en text y lo guarda

   //queda asignado al localStorage ,arreglos se complica
   //localStorage.nota = txtNota.value;
   mostrarNotas();
   
   //alert(txtNota.value)
}

function mostrarNotas(){
   //Trae el Div Notas
   var divNotas = document.getElementById("divNotas");
   // Le asigna las notas desde el local storage
   var notas = JSCN.parse(localStorage.notas);
   var notas = [];
   if (localStorage.notas){
      notas = JSON.parse(localStorage.notas);
   }
   var html = "";
   for(var nota of notas){
     html += nota + "<br/>";   
   }
   //divNotas.innerHTML = localStorage.nota;//le pone el valor
   divNotas.innerHTML = html;
}