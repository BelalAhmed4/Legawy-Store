// for search bar
var input = document.getElementById('search-input');

input.addEventListener("keyup", function () {
  let searchBar = document.querySelector(".search-input").value.toUpperCase();
  let productList = document.querySelector(".product-list");
  let product = document.querySelectorAll(".product");
  let productName = document.getElementsByTagName('p');

  for (let x = 0; x < productName.length; x++) {

    if (productName[x].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {

      product[x].style.display = "";
    } else {
      product[x].style.display = "none"
    }
  };
})
// End for search bar