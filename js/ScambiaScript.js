function scambia(){
	
	
	
	let img = document.getElementById("img").src;
	
	let img1 = document.getElementById("img1").src;
	
	let img2 = document.getElementById("img2").src;
	
	let img3 = document.getElementById("img3").src;
	
	
	
	
	let vettimg[3] = {img, img1, img2, img3};
	
	let buffer = vettimg[3];
	
	document.getElementById("img3").src = vettimg[0];
	
	document.getElementById("img").src = vettimg[1];
	
	document.getElementById("img2").src = buffer;
	
	
}