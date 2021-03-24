document.getElementById('player').addEventListener('mouseover',sumarPuntos);

puntos=0;
tiempo=30;
necesarios=30;

function sumarPuntos(){
	puntos++;
	document.getElementById('puntos').innerHTML= "Puntos: <b>" +puntos+"/"+ necesarios+"</b>";
	randNum= Math.round(Math.random()*500);
	randNum2= Math.round(Math.random()*500);
	document.getElementById('player').style.marginTop=randNum + "px";
	document.getElementById('player').style.marginLeft=randNum2 + "px";
	if(puntos==30){
		 puntos=0;
		 alert("Ganaste");
		 tiempo=30;

	}

}
function restarTiempo(){
	tiempo--;
	document.getElementById('tiempo').innerHTML = 'Tiempo:' + tiempo;
	if(tiempo==0){
		alert("Perdiste");
		tiempo=30;
		puntos=0;
	}
	
}
setInterval(restarTiempo,1000);