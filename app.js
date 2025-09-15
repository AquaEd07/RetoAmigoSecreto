// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
const nombresAmigos=[];
const inputAmigo = document.getElementById('amigo');
const htmlListaAmigos = document.getElementById("listaAmigos");
const htmlResultado = document.getElementById("resultado")


//funciones 
function agregarAmigo() 
{
    if(!inputAmigo.value)
    {
        alert("Debes de escribir un nombre para continuar.")
    }
    else
    {
        nombresAmigos.push(inputAmigo.value);
        htmlListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
        limpiarCaja();

    }
    //console.log("pruebaboton");
    
}

function sortearAmigo()
{
    const random = (Math.floor(Math.random()*nombresAmigos.length));
    if (nombresAmigos[random] == null)
    {
         alert("Tu lista de amigos esta vacia :(")
    }
    else{
        const amigoSecreto = nombresAmigos[random];
        htmlResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`
    }
}

function limpiarCaja()
{
    let valorCaja = document.querySelector('#amigo')
    valorCaja.value = '';
}


/*verificar intento

    let nombresAmigos = document.getElementById('amigo').value;
    console.log(nombres);
    return;
    */