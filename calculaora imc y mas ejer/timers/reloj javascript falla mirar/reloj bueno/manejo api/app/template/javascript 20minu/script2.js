window.onload = init//cuando se haya cargado html no antes javascript
//aseguramos no carge antes javascript

let clientes = [];//creamos arreglos de clientes

//hacemos funcion para window.onload = init
function init(){
    document.getElementById("btnGuardar").addEventListener("click", onBtnGuardarClick)
}

function onBtnGuardarClick(){
   /* let nombre = document.getElementById("txtNombre").value;
    let telefono = document.getElementById("txtTelefono").value;
    let email = document.getElementById("txtEmail").value;
    let direccion = document.getElementById("txtDireccion").value;*/

    let cliente = {};//creamos objeto
    cliente.nombre = document.getElementById("txtNombre").value;
    cliente.telefono = document.getElementById("txtTelefono").value;
    cliente.email = document.getElementById("txtEmail").value;
    cliente.direccion = document.getElementById("txtDireccion").value;


    //wardar datos de clientes en array let clientes[]
    clientes.push(cliente);
    renderizarClientes();
}

function renderizarClientes(){
    let resultado = "";
    clientes.forEach(cliente => {
        resultado = resultado + cliente.nombre + " " + cliente.telefono + " " + cliente.email + "<br/>";
    });

    document.getElementById("contenedor").innerHTML = resultado;
}

/*function mostrar(nombre, edad){


    alert("Hola mi nombre es " + nombre + " y mi edad es: " + edad)

}*/

/*mostrar("Ramon", 43)
mostrar("Pepe", 40)
mostrar("Federico", 73)*/



