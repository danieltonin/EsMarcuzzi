
let descrizione[] = {"basenji (Congo, 43 cm)", "carlino (Cina, 30 cm)", "san bernardo (Svizzera, 80 cm)", "terranova (Canada, 75 cm)"}

const carlinoSrc = "D:\Users\daniel.tonin\Documents\EsMarcuzzi-main\img\carlino";

const basenjiSrc = "D:\Users\daniel.tonin\Documents\EsMarcuzzi-main\img\carlino";

const sanBernandoSrc = "D:\Users\daniel.tonin\Documents\EsMarcuzzi-main\img\carlino";

const terranovaSrc = "D:\Users\daniel.tonin\Documents\EsMarcuzzi-main\img\carlino";


let img[] = {carlinoSrc, basenjiSrc, sanBernandoSrc, terranovaSrc}






function scegli() {
	
	alert("cane");
	
	let cane = document.getElementById("cane").innerText;
	
	switch(cane) {
		case "carlino":
		
		document.getElementById("descrizione").innerText = descrizione[1];
		
		document.getElementById("immagine").src = img[0];
		
    break;
		case "basenji":
		
		document.getElementById("descrizione").innerText = descrizione[0];
		
		document.getElementById("immagine").src = img[1];
		
    break;
		case "san bernardo":
		
		document.getElementById("descrizione").innerText = descrizione[2];
		
		document.getElementById("immagine").src = img[2];
		
    break;
		case "terranova":
		
		document.getElementById("descrizione").innerText = descrizione[3];
		
		document.getElementById("immagine").src = img[3];
		
    break;
		default:
    
}
	
	
}