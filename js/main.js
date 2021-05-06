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
	alert("ganaste la partida");
	turno = 1;
	console.log("se reinició el turno")
	window.location.reload();
	}
    if((turno==1) && (total_tiro==2 || total_tiro==3 || total_tiro==12))
    {
        alert("perdiste la partida");
        turno = 1;
        console.log("se reinició el turno")
        window.location.reload();
    }
    if((turno>=2) && (total_tiro==7))
    {
        alert("perdiste la partida");
        turno = 1;
        console.log("se reinició el turno")
        window.location.reload();
    }
    if((turno>=2) && (total_tiro==punto))
    {
        alert("ganaste la partida");
        turno = 1;
        console.log("se reinició el turno")
        window.location.reload();
    }
    if((turno==1) && (total_tiro==4 || total_tiro==5 || total_tiro==6 || total_tiro==8 || total_tiro==9 || total_tiro==10))
    {
    punto=total_tiro
    }

turno = turno + 1;	
}