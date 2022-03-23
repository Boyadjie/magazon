// JavaScript Document
var sexe = localStorage.getItem("genre");

if(sexe == 'f'){
		document.getElementById('femme').style.display="block";
		document.getElementById('homme').style.display="none";
}else{
	document.getElementById('homme').style.display="block";
		document.getElementById('femme').style.display="none";
}
