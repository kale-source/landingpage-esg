// EVENTO DE TROCAR COR DO SITE

    document.addEventListener("DOMContentLoaded", function() {

      const trocarcor = document.getElementById("imagemdark")
      let lightMode = false;

      trocarcor.addEventListener("click", function (){
          if (lightMode) {
          trocarcor.src = "images/Modo Dark.png";
          } 
          
          else {
              trocarcor.src = "images/Modo Light.png";
          }
          lightMode = !lightMode;
      })

  })
