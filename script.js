let noClicks = 0;
const maxNoClicks = 9;
const minNoScale = 0.65;
let noScale = 1;
let yesScale = 1; 
const gifElement = document.getElementById("Floppa");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);


const gifs = [
  "assets/images/Floppa-triste.gif",
  "assets/images/Floppa-troste.png",
  "assets/images/saquenme.png",
  "assets/images/lechita.png",
  "assets/images/Floppa-dog.png",
  "assets/images/Floppa-cajita.png",
  "assets/images/Floppa-cumple.jpg",
  "assets/images/Floppa-aaa.gif",
  "assets/images/almohada.jpg"
];

const buttonMessages = [
  "Estas segura??",
  "Porfa cielo",
  "porfiiiii",
  "pqsosasicongimo",
  "ACEPTAAAAA",
  "Dale amooooorrrr",
  "Ultima oportunidad",
  "Bueno dale, ahora si",
  "segura que no queres??"
];


noButton.addEventListener("click", () => {
  if (noClicks < maxNoClicks) {

    gifElement.src = gifs[noClicks];
  }

  
  noButton.textContent = buttonMessages[noClicks % maxNoClicks];

  
  noButton.style.width = "auto";
  noButton.style.width = `${noButton.scrollWidth}px`;

 
  if (noScale > minNoScale) {
    noScale -= 0.1;
    noButton.style.transform = `scale(${noScale})`;
  }

  
  const baseWidth = parseFloat(yesButtonStyle.width);
  const scaledWidth = baseWidth * yesScale; 

  console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

  
  if (scaledWidth < maxYesWidth) {
    yesScale += 0.5; 
    yesButton.style.transform = `scale(${yesScale})`;

    
    const rootStyles = getComputedStyle(document.documentElement);
    const gapScaleFactor =
      parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;

   
    const currentGap = parseFloat(buttonContainer.style.gap) || 20;
    const newGap = Math.sqrt(currentGap * gapScaleFactor); 
    buttonContainer.style.gap = `${newGap}px`;
  }

  
  noClicks++;
});
