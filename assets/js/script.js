$(document).ready(function(){
  //Déclaration de la variable tableau ordi
  var board = ['Pierre', 'Feuille', 'Ciseaux'];
  //Déclaration des variables compteur de victoires/défaites/essais/userMove qui sont à 0/null au début
  var champions = 0;
  var looser = 0;
  var tryCount = 0;
  var userMove = null;
 

//...Bouton Réinitialiser...
$('#reset').click(function(){
  champions = 0;
  looser = 0;
  tryCount = 0;
  $('#victory').text('Joueur : ' + champions);
  $('#defeat').text('Ordinateur : ' + looser);
  $('#test').text('');
  $('#random').css('background-image', 'none');
  $('#winLose').text('');
});
//...Rend les réponses draggables...
$(".reply").draggable({
  revert : true , //Renvoie l'élément toujours à sa place
  revertDuration: 200,
  snap : '#empty',//Elles sont attirées par le bloc droppable
  snapMode: 'inner' // Permet le magnétisme sur l'interieur du block
});
//Quand le clic de la souris se relève, ça fait passer userMove de null à "Pierre", "Feuille" ou "Ciseaux" selon le bloc qui est cliqué
$('#coco').mouseup(function(){
  userMove = 'Pierre';
});
$('#banane').mouseup(function(){
  userMove = 'Feuille';
});
$('#ananas').mouseup(function(){
  userMove = 'Ciseaux';
});

//..Rend le "déposez ici" droppable.
$( "#empty" ).droppable({
  accept: ".reply", //Le bloc n'accepte de recevoir que les blocs avec la classe answer
  
  classes: {
      "ui-droppable-active": "ui-state-default"
  },
  //...Une fois qu'on drop un élément dans "emptyBlock", cette fonction se déclenche.....
  drop:function(){
      //Choisis au hasard une valeur dans le tableau déclaré plus haut
      var ordiMove = board[Math.floor(board.length * Math.random())];
      //Met les images correspondantes au choix de l'ordi sur randomBlock
      if (ordiMove == "Pierre"){
          $('#random').css({'background-image': 'url(assets/img/coco.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
      } else if (ordiMove == "Feuille"){
          $('#random').css({'background-image': 'url(assets/img/banane.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
      } else if (ordiMove == "Ciseaux"){
          $('#random').css({'background-image': 'url(assets/img/anana.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center'});
      }
      //Conditions
      //SI USER = ORDI, alerte Egalité, +1 compteur d'essais

if (userMove == 'Pierre' && ordiMove == 'Pierre'){
  champions++;
    tryCount++;
    $('#winLose').text('Egalité!');
    $('#winLose').css('color', '#f2a500');
    $('#empty').css({'background-image': 'url(assets/img/coco.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
    $('.deposed').css({'display': 'none',})
}

else if (userMove == 'Ciseaux' && ordiMove == 'Ciseaux'){
  champions++;
    tryCount++;
    $('#winLose').text('Egalité!');
    $('#winLose').css('color', '#f2a500');
    $('#empty').css({'background-image': 'url(assets/img/anana.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center', });
    $('.deposed').css({'display': 'none',})
}

else if (userMove == 'Feuille' && ordiMove == 'Feuille'){
  champions++;
    tryCount++;
    $('#winLose').text('Egalité!');
    $('#winLose').css('color', '#f2a500');
    $('#empty').css({'background-image': 'url(assets/img/banane.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
    $('.deposed').css({'display': 'none',})
}
      
          //SINON SI USER = Pierre et ORDI = Ciseaux, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
       else if (userMove == 'Pierre' && ordiMove == 'Ciseaux'){
        champions++;
          tryCount++;
          $('#winLose').text('Bravo !!!');
          $('#winLose').css('color', '#7FD8C6');
          $('#empty').css({'background-image': 'url(assets/img/coco.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
          $('.deposed').css({'display': 'none',})
          //SINON SI USER = Feuille et ORDI = Pierre, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
      } else if (userMove == 'Feuille' && ordiMove == 'Pierre'){
        champions++;
          tryCount++;
          $('#winLose').text('Bravo !!!');
          $('#winLose').css('color', '#7FD8C6');
          $('#empty').css({'background-image': 'url(assets/img/banane.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
          $('.deposed').css({'display': 'none',})
          //SINON SI USER = Ciseaux et ORDI = Feuille, alerte Gagné, +1  compteur d'essais, +1 compteur gagné
      } else if (userMove == 'Ciseaux' && ordiMove == 'Feuille'){
        champions++;
          tryCount++;
          $('#winLose').text('Bravo !!!');
          $('#winLose').css('color', '#7FD8C6');
          $('#empty').css({'background-image': 'url(assets/img/anana.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
          $('.deposed').css({'display': 'none',})
          //SINON SI ORDI = Pierre et USER = Ciseaux, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Pierre' && userMove == 'Ciseaux'){
        looser++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
          $('#empty').css({'background-image': 'url(assets/img/anana.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
          $('.deposed').css({'display': 'none',})
          //SINON SI ORDI = Feuille et USER = Pierre, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Feuille' && userMove == 'Pierre'){
        looser++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
          $('#empty').css({'background-image': 'url(assets/img/coco.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
          $('.deposed').css({'display': 'none',})
          //SINON SI ORDI = Ciseaux et USER = Feuille, alerte Perdu, +1  compteur d'essais, +1 compteur perdu
      } else if (ordiMove == 'Ciseaux' && userMove == 'Feuille'){
        looser++;
          tryCount++;
          $('#winLose').text('Perdu...');
          $('#winLose').css('color', 'red');
          $('#empty').css({'background-image': 'url(assets/img/banane.png)', 'background-size' : 'contain' , 'background-repeat': 'no-repeat' ,'background-position': 'center' });
          $('.deposed').css({'display': 'none',})
        }

      //Textes nombre de victoires, nombre de défaites et pourcentage de victoires
      $('#victory').text('Joueur : ' + champions);
      $('#defeat').text('Ordinateur : ' + looser);
      $('#test').text(Math.floor(champions/tryCount*100) + '% de réussite');
      //Fait apparaître le bouton réinitialiser après avoir joué le premier coup
      $('#reset').css('display', 'block');
      //Au mouseover sur une carte réponse, la carte ordi redevient blanche
      $('.reply').mousedown(function(){
          $('#random').css('background-image', 'none');
      });
  }
});
});

$(document).ready(function(){
	$(".toggle").click(function(){
	$(this).toggleClass("active");
	});

	$(".slide-body").click(function(){
	$(".slide-body .slide").toggleClass("active");
	});

  $(".on").click(function(){
    $("#audio-player")[0].play();
  });

  $(".off").click(function(){
    $("#audio-player")[0].pause();
  });
});

