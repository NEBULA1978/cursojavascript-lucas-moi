window.onload = iniciar;
var tareas = [];

function iniciar(){
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)//escucha 
}

function clickBtnAgregar(){
    var txtTarea = document.getElementById("txtTarea");
    var tarea = txtTarea.value;//obtengo el valor html de txtTarea
    
    tareas.push(tarea);
    //alert(tareas)mostrar ventanita aparte

    mostrarTareas();
}

function mostrarTareas(){
  var listado = document.getElementById("listado"); 
  
  var html = "";
  //debugger;
  for(var tarea of tareas){
   html += tarea + "<br/>"

  }
  //listado.innerHTML = "asdasdas"; 
  listado.innerHTML = html;
}