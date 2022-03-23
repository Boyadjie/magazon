//java-script document		

		var lavideoH = document.getElementById("lavideoH");
		var lavideoF = document.getElementById("lavideoF");
		var inputH = document.getElementById("but-cookies-H");
		var inputF = document.getElementById("but-cookies-F");
		var image = document.getElementById("cookie");
		var son = document.getElementById("audio");
		var next_b = document.getElementById("button-N");


		function debut(Genre,butt,sexe){
				if(sexe=='m'){
					localStorage.setItem('genre', 'm');
				}else{
					localStorage.setItem('genre', 'f');
				}
			Genre.play();
			son.play();
			transition(Genre);

			setTimeout(function(){pause(Genre,butt)}, 23000);//a 22.8 secondes après l'actualisation de la page on lance la fonction "pause"
		}

		/**
		BUT : mettre en pause la video et afficher l'image pour valider les cookies
		APP : debut()
		TST : 100%
		*/
		function pause(Genre,butt){
			Genre.pause();
			image.style.display = 'block';
			butt.style.display = 'block';
		}

		/**
		BUT : mettre en play la video et cacher l'image pour valider les cookies
		APP : programme principale 
		TST : 100%
		*/
		function play(Genre,butt){
			Genre.play();
			image.style.display = 'none';
			butt.style.display = 'none';

			setTimeout(function(){next()}, 27000);//a 22.5 seconde apres l'actualisation de la page on lance la fonction "pause"
		}

		/**
		BUT : faire la transition d'affichage entre la page et la video
		APP : programme principale 
		TST : 100%
		*/
		function transition(Genre){
			var div = document.getElementById("vid-intro");
			var persos = document.getElementById("persos");
			var bouton = document.getElementById("bouton");
			var logo = document.getElementById("logo");
			var copyright = document.getElementById("copyright");
			
			persos.style.display = 'none';
			bouton.style.display = 'none';
			logo.style.display = 'none';
			copyright.style.display = 'none';
			div.style.display = 'block';
			Genre.style.display = 'block'
		}

		function next(){
			next_b.style.display = 'block';
		}
