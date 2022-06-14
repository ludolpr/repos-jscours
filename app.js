// Liste de categorie
const personnelList = ["Brandon","Christian", "Joris", "Eddy", "Dan", "Axel", "Théo", "Ludo"];

// DOM : accés rapide à la categorie ID

const personnelForm = document.getElementById("personnel");

// Liste du personnel paramètre

personnelList.forEach((objet) => {

  // console.log(`<option>${objet}</option>`);

  // option ci dessous serf a nommée la balise creer

  let perso = document.createElement("option");
  perso.text = objet;
  perso.value = objet;

  personnelForm.add(perso);
})
function addNewProduct() {
  console.log("Une personne à été ajouté");


// Récupère les valeurs du formulaire
const personnel = document.getElementById("personnel").value;
const poste = document.getElementById("poste").value;
const anciens = document.getElementById("anciens").value;
const heureTravaille = document.getElementById("heureTravaille").value;

console.log(poste, anciens, heureTravaille,personnel);

 const id = new Date().valueOf();
 
 // Nouveau membres

 const membres = {
   id: id,
   poste: poste,
   Nom: personnel,
   Ancienneté: anciens,
   heureTravaille: heureTravaille 
 }
 console.log("Nouveau membre:", membres)

 let membresList = localStorage.getItem('membres') ? JSON.parse(localStorage.getItem('membres')) : [];
 membresList.push(membres);


 localStorage.setItem("membres", membresList);

 // La valeur doit etre convertit en string, on ne peux pas stocker d'object ni d'array.
 localStorage.setItem("membres", JSON.stringify(membresList));

}

// Récupère le contenu du localStorage
function getMembre() {
  return localStorage.getItem('membres') ? JSON.parse(localStorage.getItem('membres')) : [];
}
// console.log(getMembre());

// Affiche les produits dans le tableau
(
function showMembresInTable() {
  const membres = getMembre();
  const table = document.getElementById('tableContent');
  
  membres.forEach((item) => {
    let row = table.insertRow();
    let id = row.insertCell(0);
    let name = row.insertCell(1);
    
    id.innerHTML = 1;
    name.innerHTML = item.name
  })
  
}
)()

