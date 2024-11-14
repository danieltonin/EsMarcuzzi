function calcoloMin(){
	
	let mese = document.getElementById("mese").value;
	
	let anno= document.getElementById("anno").value;
	
	
	let mesi = [12];
	
	mesi[1] = 31;
	
	mesi[2] = 28;
	
	mesi[3] = 31;
	
	mesi[4] = 30;
	
	mesi[5] = 31;
	
	mesi[6] = 30;
	
	mesi[7] = 31;
	
	mesi[8] = 31;
	
	mesi[9] = 30;
	
	mesi[10] = 31;
	
	mesi[11] = 30;
	
	mesi[12] = 31;
	
	let minMesi = mesi[mese]*24*60;
	
	let minAnno  = anno*365*24*60;
	
	let res = minAnno + minMesi;
	
	
	
	document.getElementById("res").innerHTML= res;
	
}