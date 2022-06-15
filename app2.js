// Produits Base de donnée statique
const categoryList = ["Kekra", "Damso", "Laylow", "Jazzy Bazz", "Nekfeu"];

const rappeur = document.getElementById('category');

categoryList.forEach((element) => {
  let option = document.createElement("option");
  option.text = element;
  option.value = element;
  rappeur.add(option);
}
)

function addNewProduct() {
  // Récupère les valeurs du formulaire
  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;

  // Génère un id pour le produit
  const id = new Date().valueOf();

  // Nouveau produit
  const product = {
    id: id,
    name: name,
    category: category,
    price: price,
    quantity: quantity
  }
  console.log("new product :", product)


  // Condition Terniaire
  let productsList = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
  productsList.push(product);
  
  // La valeur doit etre convertit en string, on ne peux pas stocker d'object ni d'array.
  localStorage.setItem("products", JSON.stringify(productsList));
}

// Récupère le contenu du localStorage
function getProducts() {
  return localStorage.getItem('products')? JSON.parse(localStorage.getItem('products')) : [];
}

// Affiche les produits dans le tableau
function showProductsInTable() {
  const products = getProducts(); // Faut il enlever le s de products
  const table = document.getElementById("tableContent");

  products.forEach((item) => {
    console.log("items :", item);
  })
}