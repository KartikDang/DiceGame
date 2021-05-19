var random1= Math.floor(Math.random()*6)+1;
      var random2= Math.floor(Math.random()*6)+1;

      var image1="Dice"+random1+".png";
      
      var image2="Dice"+random2+".png";
      var add_image1="images/"+image1;
      var add_image2="images/"+image2;
      document.querySelector(".img1").setAttribute("src",add_image1);
      document.querySelector(".img2").setAttribute("src",add_image2);
      // var add_image1="images/"+image1;
      // var add_image2="images/"+image2;

      if(random1>random2)
      {
        document.querySelector("h1").innerHTML="Player 1 Wins";
      }

      else if(random2>random1)
      {
        document.querySelector("h1").innerHTML="Player 2 Wins";
      }

      else{
        document.querySelector("h1").innerHTML="Draw";
      }