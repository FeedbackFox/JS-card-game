(function selected() {
  var score = 0;
  var fakeRadioButton = document.getElementById("middle");

  // Linker Images
  var cardArrayLeftImage = [];

  cardArrayLeftImage.push(document.getElementById('tom'));
  cardArrayLeftImage.push(document.getElementById('thor'));
  cardArrayLeftImage.push(document.getElementById('kate'));
  cardArrayLeftImage.push(document.getElementById('russel'));
  cardArrayLeftImage.push(document.getElementById('robert'));
  cardArrayLeftImage.push(document.getElementById('dylan'));
  cardArrayLeftImage.push(document.getElementById('chris'));
  cardArrayLeftImage.push(document.getElementById('tomc'));
  cardArrayLeftImage.push(document.getElementById('bena'));

  // Rechter images

  var cardArrayRightImage = [];

  cardArrayRightImage.push(document.getElementById('saving'));
  cardArrayRightImage.push(document.getElementById('ragnarok'));
  cardArrayRightImage.push(document.getElementById('underworld'));
  cardArrayRightImage.push(document.getElementById('gladiator'));
  cardArrayRightImage.push(document.getElementById('ironman'));
  cardArrayRightImage.push(document.getElementById('maze'));
  cardArrayRightImage.push(document.getElementById('captain'));
  cardArrayRightImage.push(document.getElementById('samurai'));
  cardArrayRightImage.push(document.getElementById('pearlharbor'));


  // Linker buttons
  var cardArrayLeft = [];


  cardArrayLeft.push(document.getElementById('links-1'));
  cardArrayLeft.push(document.getElementById('links-2'));
  cardArrayLeft.push(document.getElementById('links-3'));
  cardArrayLeft.push(document.getElementById('links-4'));
  cardArrayLeft.push(document.getElementById('links-5'));
  cardArrayLeft.push(document.getElementById('links-6'));
  cardArrayLeft.push(document.getElementById('links-7'));
  cardArrayLeft.push(document.getElementById('links-8'));
  cardArrayLeft.push(document.getElementById('links-9'));

  // Rechter buttons
  var cardArrayRight = [];

  cardArrayRight.push(document.getElementById('rechts-1'));
  cardArrayRight.push(document.getElementById('rechts-2'));
  cardArrayRight.push(document.getElementById('rechts-3'));
  cardArrayRight.push(document.getElementById('rechts-4'));
  cardArrayRight.push(document.getElementById('rechts-5'));
  cardArrayRight.push(document.getElementById('rechts-6'));
  cardArrayRight.push(document.getElementById('rechts-7'));
  cardArrayRight.push(document.getElementById('rechts-8'));
  cardArrayRight.push(document.getElementById('rechts-9'));


  // setInterval functie
  setInterval(function Repeat() {
    for (var i = 0; i < cardArrayLeft.length; i++) {
      if (cardArrayLeft[i].checked) {
        cardArrayLeftImage[i].style.border = "5px red solid";
        cardArrayLeftImage[i].style.cursor = "pointer";
      } else if (!cardArrayLeft[i].checked) {
        cardArrayLeftImage[i].style.border = "none";
        cardArrayLeftImage[i].style.cursor = "pointer";
      }

      if (cardArrayRight[i].checked) {
        cardArrayRightImage[i].style.border = "5px red solid";
        cardArrayRightImage[i].style.cursor = "pointer";
      } else if (!cardArrayRight[i].checked) {
        cardArrayRightImage[i].style.border = "none";
        cardArrayRightImage[i].style.cursor = "pointer";
      }

      // 1.
      if (cardArrayLeft[0].checked && cardArrayRight[4].checked) {
        cardArrayLeftImage[0].style.border = "5px green solid";
        cardArrayLeftImage[0].style.cursor = "pointer";
        cardArrayRightImage[4].style.border = "5px green solid";
        cardArrayRightImage[4].style.cursor = "pointer";
        cardArrayLeftImage[0] = cardArrayLeft[0];
        cardArrayRightImage[4] = cardArrayRight[4];

        cardArrayLeft[0] = fakeRadioButton;
        score++;
      }

      // 2.
      if (cardArrayLeft[1].checked && cardArrayRight[1].checked) {
        cardArrayLeftImage[1].style.border = "5px green solid";
        cardArrayLeftImage[1].style.cursor = "pointer";
        cardArrayRightImage[1].style.border = "5px green solid";
        cardArrayRightImage[1].style.cursor = "pointer";
        cardArrayLeftImage[1] = cardArrayLeft[1];
        cardArrayRightImage[1] = cardArrayRight[1];

        cardArrayLeft[1] = fakeRadioButton;
        score++;
      }

      // 3.
      if (cardArrayLeft[2].checked && cardArrayRight[7].checked) {
        cardArrayLeftImage[2].style.border = "5px green solid";
        cardArrayLeftImage[2].style.cursor = "pointer";
        cardArrayRightImage[7].style.border = "5px green solid";
        cardArrayRightImage[7].style.cursor = "pointer";
        cardArrayLeftImage[2] = cardArrayLeft[2];
        cardArrayRightImage[7] = cardArrayRight[7];

        cardArrayLeft[2] = fakeRadioButton;
        score++;
      }

      // 4.
      if (cardArrayLeft[3].checked && cardArrayRight[8].checked) {
        cardArrayLeftImage[3].style.border = "5px green solid";
        cardArrayLeftImage[3].style.cursor = "pointer";
        cardArrayRightImage[8].style.border = "5px green solid";
        cardArrayRightImage[8].style.cursor = "pointer";
        cardArrayLeftImage[3] = cardArrayLeft[3];
        cardArrayRightImage[8] = cardArrayRight[8];

        cardArrayLeft[3] = fakeRadioButton;
        score++;
      }

      // 5.
      if (cardArrayLeft[4].checked && cardArrayRight[3].checked) {
        cardArrayLeftImage[4].style.border = "5px green solid";
        cardArrayLeftImage[4].style.cursor = "pointer";
        cardArrayRightImage[3].style.border = "5px green solid";
        cardArrayRightImage[3].style.cursor = "pointer";
        cardArrayLeftImage[4] = cardArrayLeft[4];
        cardArrayRightImage[3] = cardArrayRight[3];

        cardArrayLeft[4] = fakeRadioButton;
        score++;
      }

      // 6.
      if (cardArrayLeft[5].checked && cardArrayRight[2].checked) {
        cardArrayLeftImage[5].style.border = "5px green solid";
        cardArrayLeftImage[5].style.cursor = "pointer";
        cardArrayRightImage[2].style.border = "5px green solid";
        cardArrayRightImage[2].style.cursor = "pointer";
        cardArrayLeftImage[5] = cardArrayLeft[5];
        cardArrayRightImage[2] = cardArrayRight[2];

        cardArrayLeft[5] = fakeRadioButton;
        score++;
      }

      // 7.
      if (cardArrayLeft[6].checked && cardArrayRight[0].checked) {
        cardArrayLeftImage[6].style.border = "5px green solid";
        cardArrayLeftImage[6].style.cursor = "pointer";
        cardArrayRightImage[0].style.border = "5px green solid";
        cardArrayRightImage[0].style.cursor = "pointer";
        cardArrayLeftImage[6] = cardArrayLeft[6];
        cardArrayRightImage[0] = cardArrayRight[0];

        cardArrayLeft[6] = fakeRadioButton;
        score++;
      }

      // 8.
      if (cardArrayLeft[7].checked && cardArrayRight[5].checked) {
        cardArrayLeftImage[7].style.border = "5px green solid";
        cardArrayLeftImage[7].style.cursor = "pointer";
        cardArrayRightImage[5].style.border = "5px green solid";
        cardArrayRightImage[5].style.cursor = "pointer";
        cardArrayLeftImage[7] = cardArrayLeft[7];
        cardArrayRightImage[5] = cardArrayRight[5];

        cardArrayLeft[7] = fakeRadioButton;
        score++;
      }

      // 9.
      if (cardArrayLeft[8].checked && cardArrayRight[6].checked) {
        cardArrayLeftImage[8].style.border = "5px green solid";
        cardArrayLeftImage[8].style.cursor = "pointer";
        cardArrayRightImage[6].style.border = "5px green solid";
        cardArrayRightImage[6].style.cursor = "pointer";
        cardArrayLeftImage[8] = cardArrayLeft[8];
        cardArrayRightImage[6] = cardArrayRight[6];

        cardArrayLeft[8] = fakeRadioButton;
        score++;
      }

    }
    document.getElementById('scoreText').innerHTML = "Score: " + score;
  }, 100)


  //You win!

  setInterval(function youWin() {
    if(score == 9)
    {
      document.getElementById('rij-1').style.display = "none";
      document.getElementById('rij-2').style.display = "none";
      document.getElementById('scoreText').style.display = "none";
      document.getElementById('header').style.display = "none";
      document.getElementById('realheader').style.height = "22.5vw";
      document.getElementById('realheader').style.width = "35vw";
      document.getElementById('youWin').style.display = "block";
      document.getElementById('youWinSmall').style.display = "block";
      document.getElementById('youWinSmaller').style.display = "block";
      document.getElementById('cheatButton').style.display = "none";




    }
  }, 100)


  document.getElementById("cheatButton").addEventListener("click", function(){
      score = 9;
      document.getElementById('filthycheater').style.display = "block";
  });




  // allow for unchecking of radiobutton

  var allRadios = document.getElementsByClassName('radiobutton');
  var booRadio;

  for (var i = 0; i < allRadios.length; i++) {

    allRadios[i].onclick = function() {
      if (booRadio == this) {
        this.checked = false;
        booRadio = null;
      } else {
        booRadio = this;
      }
    };
  }

  //end of auto execute
})();
(function() {
  var counter = 0;
  var rainbowClass = document.getElementsByClassName('rainbow');
  var lengtharray = []; //Remembers the length of the content with class=rainbow so for loop doesnt change color of undefined
  var rainbowarray = []; //Becomes the final array containing all the <span>'d text
  var finalarray = []; //Becomes the final array referencing the spanned text and changing the color
  var a = 0;

  for (var i = 0; i < rainbowClass.length; i++) {
    var tempvar = rainbowClass[i].innerText.split("");
    lengtharray[i] = tempvar.length;
    rainbowarray.push(rainbowClass[i].innerText.split(""));
    console.log(rainbowarray[i]);
  }

  for (var i = 0; i < rainbowarray.length; i++) {
    rainbowClass[i].innerHTML = rainbowarray[i].map(function(char) {
      return '<span>' + char + '</span>';
    }).join('');
    finalarray[i] = rainbowClass[i].children;
    console.log(finalarray[i]);
  }

  for (var i = 0; i < rainbowClass.length; i++) {
    rainbowcolors(i, finalarray[i].length)
  }

  function rainbowcolors(a, b) {
    setInterval(function colorchange() {
      for (var i = 0; i < b; i++) {
        finalarray[a][i].style.color = 'hsl(' + (counter + Math.floor(i * 3)) + ', 100%, 70%';
      }
      counter++;
    }, 7);
  }


})()
