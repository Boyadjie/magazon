var coins = localStorage.getItem("coins");

function acheter(nom,prix){
    commande = JSON.parse(localStorage.getItem("commande"));
    commande.push(nom,prix);
    localStorage.setItem('commande', JSON.stringify(commande));
}

function achats(){
    commande = JSON.parse(localStorage.getItem("commande"));
    for (var i =0; i<commande.length;i=i+2){
    console.log("Vous avez acheté "+commande[i]+" pour "+commande[i+1]);
    }
}

function payer(prix){
    coins = localStorage.getItem("coins");
    coins = coins-prix;
    localStorage.setItem('coins', coins);
}

function ctrl_achat(nom,prix){
    if(coins>=prix){
    payer(prix);
    acheter(nom,prix);
    update();
    son();
    }else{
        var input = document.getElementById("but-money");
        var input2 = document.getElementById("but-close");
        var image = document.getElementById("no_money");
        var page = document.getElementById('html');
        var bg = document.getElementById('bg_pop_up');
        page.style.overflow="hidden";
        image.style.display = "block";
        input.style.display = "block";
        input2.style.display = "block";
        bg.style.display = "block";

    }
}
function update(){
    var coins = localStorage.getItem("coins");
    document.getElementById('price').innerHTML= coins;
}

function son(){
    var audio = new Audio('sound/money.mp3');
    audio.play();
}

/* Pop-ups*/
document.getElementById('but-close').onclick = function() {
var input = document.getElementById("but-money");
var input2 = document.getElementById("but-close");
var image = document.getElementById("no_money");
var page = document.getElementById('html');
var bg = document.getElementById('bg_pop_up');
page.style.overflow="visible";
image.style.display = "none";
input.style.display = "none";
input2.style.display = "none";
bg.style.display = "none";

 };

 function popup_checkout() {
    var input = document.getElementById("but-check");
    var input2 = document.getElementById("close2");
    var image = document.getElementById("check-out-img");
    var page = document.getElementById('html');
    var bg = document.getElementById('bg_pop_up');
    page.style.overflow="hidden";
    image.style.display = "block";
    input.style.display = "block";
    input2.style.display = "block";
    bg.style.display = "block";
    
     };
    function close2() {
        var input = document.getElementById("but-check");
        var input2 = document.getElementById("close2");
        var image = document.getElementById("check-out-img");
        var page = document.getElementById('html');
        var bg = document.getElementById('bg_pop_up');
        page.style.overflow="visible";
        image.style.display = "none";
        input.style.display = "none";
        input2.style.display = "none";
        bg.style.display = "none";
     };


function interet_foot(){
    foot = localStorage.getItem("foot");
    foot ++;
    localStorage.setItem('foot', foot);
}

function interet_japon(){
    japon = localStorage.getItem("japon");
    japon ++;
    localStorage.setItem('japon', japon);
}

function interet_reflexion(){
    reflexion = localStorage.getItem("reflexion");
    reflexion ++;
    localStorage.setItem('reflexion', reflexion);
}

function interet_livre(){
    livre = localStorage.getItem("livre");
    livre ++;
    localStorage.setItem('livre', livre);
}

function interet_jv(){
    jv = localStorage.getItem("jv");
    jv ++;
    localStorage.setItem('jv', jv);
}

function interet_sport(){
    sport = localStorage.getItem("sport");
    sport ++;
    localStorage.setItem('sport', sport);
}

function interet_vetement(){
    vetement = localStorage.getItem("vetement");
    vetement ++;
    localStorage.setItem('vetement', vetement);
}

/*Pubs*/

//Page Jeux Vidéo

function pub_jv(id){
    if(id == 1)
    {
        document.getElementById('ballon').style.display = "block";
    }
    else if(id == 2)
    {
        document.getElementById('kimono').style.display = "block";
    }
    else{
        document.getElementById('mental').style.display = "block";
    }
}

//Page Sport

function pub_sp(id){
    if(id == 1)
    {
        document.getElementById('nain').style.display = "block"; 
    }
    else if(id == 2)
    {
        document.getElementById('shin').style.display = "block";
    }
    else{
        document.getElementById('clash').style.display = "block";
    }
}

//Page Livres

function pub_lv(id){
    if(id == 1)
    {
        document.getElementById('fafi').style.display = "block";
    }
    else if(id == 2)
    {
        document.getElementById('shin').style.display = "block";
    }
    else{
        document.getElementById('echec').style.display = "block";
    }
}

//Page Vetement

function pub_vt(id){
    if(id == 1)
    {
        document.getElementById('ballon').style.display = "block";
    }
    else if(id == 2)
    {
        document.getElementById('geki').style.display = "block";
    }
    else{
        document.getElementById('boxe').style.display = "block";
    }
}