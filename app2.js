const imagesList = document.querySelectorAll(".carousel-slide img");


let compteur = 0;

function rotationImages() { 
  // La boucle for masque les images
  for (let img = 0; img < imagesList.length;img++){
    imagesList[img].style.display = "none";
    // la boucle envoie les trois images en display none  
  }
  // une images aparrai avec display block
  imagesList[compteur].style.display = "block";
}
nextBtn.addEventListener('click',() =>{
  // Si le compteur correspond à 2 (imagesList.length - 1) alors le compteur vaudra 0 
  if (compteur == imagesList.length - 1) {
    compteur = 0;
  } else {
  compteur++;
}
precBtn.addEventListener('click', () => {
  // Si le compteur vaut 0 alors il doit passer à 2, sinon compteur vaudra -1 .
  if (compteur == 0) {
    compteur = imagesList.length - 1;
  } else {
    compteur--;
  }
   
  rotationImages();
});
  // Lance la function pour raffraîchir
  rotationImages();
})  
// Exécute la function
rotationImages()

