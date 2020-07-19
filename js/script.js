/*
var variable1 = 'La valeur ici';
console.log(variable1);

var myH1 = document.querySelector('h1');
console.log('Log 1', myH1);
function alertUser() {
  alert(variable1);
}

function coloreTitre() {
  console.log('Log 2', myH1);
  document.querySelector('h1').style.color = 'red';
}
*/
var maVoiture = document.querySelector('.voiture');
var positionInitiale = maVoiture.style.transform;
var positionTournure = maVoiture.style.rotate;


function faireBouger(direction) {
  console.error('============================'); 
  console.log('Direction >>>>>', direction);
  console.log('Position initiale >>>>>', positionInitiale);
  positionInitiale = +positionInitiale + direction;
  console.log('Nouvelle position >>>>>', positionInitiale);
  document.querySelector('.voiture').style.transformOrigin = '(' + positionInitiale + 'px)';
  document.querySelector('.voiture').style.transform = 'translate('+ positionInitiale + 'px )';

}


function faireTourner(rotation) {
  console.log('Rotation >>>>>', rotation);
  positionTournure = +positionTournure + rotation;
   console.log('Position initiale >>>>>', positionInitiale);
  console.log('Nouvelle positionTournure >>>>>', positionTournure);
    
  document.querySelector('.voiture').style.rotate = positionTournure + 'deg';
 
}


