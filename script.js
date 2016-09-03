/* 
Ici je fais une variable que je nomme locale et qui serviras pour la mise à l'heure local
Ici j'utilise dans ma variable la propriété animation-delay : cette propriété permet de prévoir un délai avant que l'animation ne commence.
Ensuite avec le CSS,  j'indique une valeur négative à animation-delay ce qui a pour effet de lancer l'animation immédiatement, mais à un état qui correspond à celui qu'aurait l'animation si elle avait été lancée au moment indiqué par le délai
je décale ensuite l'animation des secondes du nombre de secondes de l'heure actuelle, celle des minutes de 60 fois le nombre de minutes actuelles plus du nombre de secondes et celle des heures de 3600 fois le nombre d'heures plus 60 fois le nombre de minutes plus le nombre de secondes.
*/
var locale = new Date();
document.getElementById('seconde').style.webkitAnimationDelay = -(locale.getSeconds()) + 's';
document.getElementById('minute').style.webkitAnimationDelay = -(locale.getMinutes()*60 + locale.getSeconds()) + 's';
document.getElementById('heure').style.OAnimationDelay = -((locale.getHours()%12)*3600 + locale.getMinutes()*60 + locale.getSeconds()) + 's';
document.getElementById('seconde').style.OAnimationDelay = -(locale.getSeconds()) + 's';
document.getElementById('minute').style.OAnimationDelay = -(locale.getMinutes()*60 + locale.getSeconds()) + 's';
document.getElementById('heure').style.webkitAnimationDelay = -((locale.getHours()%12)*3600 + locale.getMinutes()*60 + locale.getSeconds()) + 's';
document.getElementById('seconde').style.animationDelay = -(locale.getSeconds()) + 's';
document.getElementById('minute').style.animationDelay = -(locale.getMinutes()*60 + locale.getSeconds()) + 's';
document.getElementById('heure').style.animationDelay = -((locale.getHours()%12)*3600 + locale.getMinutes()*60 + locale.getSeconds()) + 's';
/*Ici c'est la partit " calendrier " qui va permettre d'afficher la phrase qui indiqueras l'heure , les minutes , les secondes , le jour le mois et l'année*/
function init(nombre) {
    /*cette fonction ci va me permettre d'indiquer à mes heures , minutes et secondes que si le nombre indiquer est négatif , 
    il le renvoye à 0 qui est un entier et donc de permettre d'afficher les nombres correctement en commencent de 0.*/
    return nombre < 0 ? '0' + nombre : nombre;
}
function HorlogeCalendrier() {
    var infos = new Date();
    /*Ici j'affiche l'heure (Heure, minute, seconde)*/
    document.getElementById('date').innerHTML = 'Bonjour simplon, il est acutellement ' + init(infos.getHours()) + ' heures ' + init(infos.getMinutes()) + ' minutes, et ' + init(infos.getSeconds()) + ' secondes';
    /*Ici je creer mes deux tableaux , l'un pour les mois , 
    l'autre les jours que j'utilise par la suite avec mes "get" pour afficher en string la date.*/
    var mois = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    var jours = new Array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');
    document.getElementById('date').innerHTML += ' et nous sommes le ' + jours[infos.getDay()] + ' ' + infos.getDate() + ' ' + mois[infos.getMonth()] + ' ' + infos.getFullYear() + ', bonne journée à vous.';
}
window.onload = function() {
    /*ici je fais l'actualisation de l'heure toute les secondes*/
   setInterval("HorlogeCalendrier()", 1000);
}
/* La méthode getSeconds() renvoie les secondes pour la date renseignée d'après l'heure locale. */
/* La méthode getDay() renvoie le jour de la semaine pour la date spécifiée selon l'heure locale.*/
/* La méthode getDate() retourne le jour du mois pour la date spécifiée d'après l'heure locale.*/
/* La méthode getHours() renvoie l'heure pour la date renseignée, d'après l'heure locale.*/
/* La méthode getMonth() retourne le mois de la date renseignée d'après l'heure locale. La numérotation démarre à 0 (c'est-à-dire que 0 correspond au premier mois de l'année).*/
/* La méthode getFullYear() renvoie l'année de la date renseignée d'après l'heure locale.*/
/* La méthode getMinutes() renvoie les minutes pour la date renseignée d'après l'heure locale.*/