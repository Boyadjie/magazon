//java-script document	

	var text = document.getElementById('txt-load');
	var div = document.getElementById('load');
	var page = document.getElementById('html');

	function replace(){
		text.innerHTML = "<span class='red'>Erreur de chargement</span> <br>Veuillez patienter...";
	}

	function end(){
		div.style.opacity = 0;
		page.style.overflow = 'visible';
	}

	function none(){
		div.style.display = 'none';
	}

	setTimeout(replace,4000);
	setTimeout(end,8000);
	setTimeout(none,8500);

if(sexe == 'f'){
	document.getElementById("pdf").href="pdf/Bilan_Magazon.pdf"; 
}else{
	document.getElementById("pdf").href="pdf/Magazon_Bilan.pdf"; 
}