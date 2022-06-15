// Liste de categorie
const personnelList = [
  "Brandon",
  "Christian",
  "Joris",
  "Eddy",
  "Dan",
  "Axel",
  "Théo",
  "Ludo",
];

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
});
function addNewProduct() {
  console.log("Une personne à été ajouté");

  // Récupère les valeurs du formulaire
  const personnel = document.getElementById("personnel").value;
  const poste = document.getElementById("poste").value;
  const anciens = document.getElementById("anciens").value;
  const heureTravaille = document.getElementById("heureTravaille").value;

  console.log(poste, anciens, heureTravaille, personnel);

  const id = new Date().valueOf();

  // Nouveau membres

  const membres = {
    id: id,
    poste: poste,
    Nom: personnel,
    Ancienneté: anciens,
    heureTravaille: heureTravaille,
  };
  console.log("Nouveau membre:", membres);

  let membresList = localStorage.getItem("membres")
    ? JSON.parse(localStorage.getItem("membres"))
    : [];
  membresList.push(membres);

  localStorage.setItem("membres", membresList);

  // La valeur doit etre convertit en string, on ne peux pas stocker d'object ni d'array.
  localStorage.setItem("membres", JSON.stringify(membresList));
}

// Récupère le contenu du localStorage
function getMembre() {
  return localStorage.getItem("membres")
    ? JSON.parse(localStorage.getItem("membres"))
    : [];
}
// console.log(getMembre());

// Affiche les produits dans le tableau
(function showMembresInTable() {
  const membres = getMembre();
  const table = document.getElementById("tableContent");
  if (membres.length) {
    const message = document.getElementById("message");
    message.style.display = "none";
  }

  // console.log(membres);
  membres.forEach((item, index) => {
    // console.log(item);
    let row = table.insertRow();
    let id = row.insertCell(0);
    let poste = row.insertCell(1);
    let anciens = row.insertCell(2);
    let heureTravaille = row.insertCell(3);
    let action = row.insertCell(4);
    let nom = row.insertCell(2); // ajoute une colone nom

    //   name : value

    id.innerHTML = index + 1;
    poste.innerHTML = `<img src='./images/${item.poste.toLowerCase()}.png' />${
      item.poste
    }`;
    nom.innerHTML = item.Nom; // ajoute dans la colone nom la valeur de la propriéte Nom
    anciens.innerHTML = `${item.Ancienneté} ans`;
    heureTravaille.innerHTML = `${item.heureTravaille} heures`;
    action.innerHTML = `
    <a onclick="showEditMembres(${item.id})"><i class="fas fa-edit iconEdit"></i></a>
    <a onclick="deleteMembres(${item.id})"><i class="fas fa-trash-alt iconDelete"></i></a>
    `;
    // site d'imagesci-dessous
    // https://pixabay.com/fr/vectors/escalade-escalade-de-rocher-corde-99111/
  });
})();

// Affiche le formulaire en modal pour éditer
function showEditMembres(id) {
  const membres = getMembre();
  //const product = products.find( function (element) {return element.id == id})
  const membresEdit = membres.find((element) => element.id == id);
  console.log("product :", membresEdit, membresEdit.Nom);

  let modalEditMembres = new bootstrap.Modal(
    document.getElementById("modalEditMembres")
  );
  modalEditMembres.show();
  // poste
  let editPoste = document.getElementById("editName");
  editPoste.value = membresEdit.poste;

  // ancienneté
  let editAnciens = document.getElementById("editPrice");
  editAnciens.value = membresEdit.Ancienneté;

  //  heureTravaille
  let editHeureTravaille = document.getElementById("editQuantity");
  editHeureTravaille.value = membresEdit.heureTravaille;

  //  Nom
  const editNom = document.getElementById("editNom");
  editNom.innerHTML = null;

  personnelList.forEach((item) => {
    let option = document.createElement("option");

    if (membresEdit.Nom == item) {
      option.selected = true;
    }
    option.text = item;
    option.value = item;
    editNom.add(option);
  });

  //  id
  let editId = document.getElementById("editId");
  editId.value = membresEdit.id;
}

function updateMembres() {
  let editNom = getMembre();
  const membresId = document.getElementById("editId").value;

  // Récupère le produit pour l'éditer
  let membresAdd = editNom.find(function (element) {
    return element.id == membresId;
  });
  // Récupère les valeurs du formulaire
  let poste = document.getElementById("editName").value;
  let personnel = document.getElementById("editNom").value;
  let anciens = document.getElementById("editPrice").value;
  let heureTravaille = document.getElementById("editQuantity").value;

  console.log(membresAdd);
  membresAdd.Nom = personnel;
  membresAdd.poste = poste;
  membresAdd.Ancienneté = anciens;
  membresAdd.heureTravaille = heureTravaille;

  localStorage.setItem("membres", JSON.stringify(editNom));
}

function deleteMembres(id) {
  let personnelList = getMembre();
  const removeMembres = personnelList.findIndex((element) => element.id == id);
  console.log(removeMembres);

  // Supprime un élément de la liste des produits
  personnelList.splice(removeMembres, 1);

  // Mets à jour la liste des produits
  localStorage.setItem("membres", JSON.stringify(personnelList));
  location.reload();

}
