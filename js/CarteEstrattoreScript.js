function estrarre(){
	
	
	Random rand = new Random();
	
	let carta = rand.nextInt(40);
	
	String vettCarte[] = new Array[39]
	
	vettCarte = {"1 spade", "2 spade", "3 spade", "4 spade", "5 spade", "6 spade", "7 spade", "donna spade", "cavallo spade", "re spade", "1 bastoni", "2 bastoni", "3 bastoni", "4 bastoni", "5 bastoni", "6 bastoni", "7 bastoni", "donna bastoni", "cavallo bastoni", "re bastoni", "1 coppe", "2 coppe", "3 coppe", "4 coppe", "5 coppe", "6 coppe", "7 coppe", "donna coppe", "cavallo coppe", "re coppe", "1 denaro", "2 denari", "3 denari", "4 denari", "5 denari", "6 denari", "7 denari", "donna denari", "cavallo denari", "re denari", ""}
	
	
	function estrai(){
		
		const indice = Math.floor(Math.random() * vettCarte.length); 
		const cartaEstratta = vettCarte[indice]; 
		document.getElementById("carta").textContent = cartaEstratta;
		
	}
	
	
	
	document.getElementById("carta").innerHTML= vettCarte[estrai()];
	
}