var tiro_1;
var tiro_2;
var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar;
var total_tiro;
var turno = 1;
var punto;

window.onload = init;

function init(){
boton_tirar = document.getElementById("boton_tirar");
boton_tirar.addEventListener("click", jugar);

dado1 = document.getElementById("dado1");
dado2 = document.getElementById("dado2");
}

function tirardado(){
	return Math.floor(Math.random() *6) +1 ;
}

function actualizarDado(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
	tiro_1 = tirardado();//Retorna un numero entre 1 y 6
	tiro_2 = tirardado();
	actualizarDado(dado1, tiro_1);
	actualizarDado(dado2, tiro_2);

	console.log("turno actual",turno);
	total_tiro = tiro_1 + tiro_2;

	if((turno==1) && (total_tiro==7 || total_tiro==11))
	{
    mostrarMensaje("GANASTE");
	turno = 1;
	console.log("se reinició el turno")

	}
    if((turno==1) && (total_tiro==2 || total_tiro==3 || total_tiro==12))
    {
        mostrarMensaje("PERDISTE");
        turno = 1;
        console.log("se reinició el turno")

    }
    if((turno>=2) && (total_tiro==7))
    {
        mostrarMensaje("PERDISTE");
        turno = 1;
        console.log("se reinició el turno")

    }
    if((turno>=2) && (total_tiro==punto))
    {
        turno = 1;
        console.log("se reinició el turno")
        mostrarMensaje("GANASTE");

    }
    if((turno==1) && (total_tiro==4 || total_tiro==5 || total_tiro==6 || total_tiro==8 || total_tiro==9 || total_tiro==10))
    {
    punto=total_tiro
    }

turno = turno + 1;	
}

 function mostrarMensaje(mensaje){
mensaje_texto.innerHTML = mensaje;
abrirVentana();
}

function abrirVentana(){
ventana.className = "ligthbox animate__animated animate__fadeIn";
}

function cerrarVentana(){
ventana.className = "ligthbox hidden";
}