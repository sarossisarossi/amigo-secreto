// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
  
    // -Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto 
    // y lo agregarán a una lista visible al hacer clic en "Adicionar".
    let nombreAmigo = (document.getElementById('amigo').value);
    console.log(nombreAmigo);

    if (nombreAmigo == ''){
        asignarTextoElemento('msj-error','')
        alert("No puede estar en blanco, agregue un nombre valido")
        
        
    }

    else if (listaAmigos.includes(nombreAmigo) && nombreAmigo != ''){
        asignarTextoElemento('msj-error',`Nombre ${nombreAmigo} ya fue agregado, colocar otro nombre`)
        limpiarCaja();
              
        return nombreAmigo;

    }
    else{
        listaAmigos.push(nombreAmigo)
        asignarTextoElemento('msj-error',`Nombre ${nombreAmigo} subido Ok`) 
        limpiarCaja() 
        asignarTextoElemento("listaAmigos" , listaAmigos)
    }
    return nombreAmigo;
    



}

function limpiarCaja(){
    // let valorCaja = document.querySelector('input');
    // alternativa colocar document.queryselector('#valorUsuario')   ; colocarle el # significa que busca por el id
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value ='';
}

function asignarTextoElemento(elemento,texto){

    let titulo = document.getElementById(elemento);
    titulo.innerHTML = texto;

}

function sortearAmigo(){
    
    largoLista = listaAmigos.length
    let numeroGenerado = Math.floor(Math.random()*largoLista);
    amigoGanador = listaAmigos[numeroGenerado]
    console.log(listaAmigos[numeroGenerado])
    asignarTextoElemento("resultado",`El Amigo Ganador Es ${amigoGanador}`)
    const boton = document.querySelector('.button-draw')
    boton.disabled = true;
    const boton2 = document.querySelector('.button-add')
    boton2.disabled = true;

    boton.style.opacity = "0.5"; // Estilo visual para mostrar que está inactivo
    boton.style.cursor = "not-allowed"; // Cambiar el cursor
    boton2.style.opacity = "0.5"; // Estilo visual para mostrar que está inactivo
    boton2.style.cursor = "not-allowed"; // Cambiar el cursor
    asignarTextoElemento('msj-error','')
}