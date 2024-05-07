// show sidebar
function showMenu() {
  let sideBar = document.getElementById('sideBar')
  let body = document.getElementsByTagName('body');
  let bodyOpacity = document.querySelector('.Opacity')
  sideBar.classList.toggle('show')
  bodyOpacity.classList.toggle('block')

}
// End Show SideBar


// show sublist for mobile click
let educationList = document.querySelector(".educationList")
let toysList = document.querySelector(".toysList")

function showSubList() {
  toysList.classList.toggle("block")
  educationList.classList.remove("block")
}
function showSubList2() {
  educationList.classList.toggle("block")
  toysList.classList.remove("block")
}

// End show sublist for mobile click

// sidebar canceling
let bodyOpacity = document.querySelector('.Opacity')
bodyOpacity.addEventListener('mouseup', function (event) {

  let sideBar = document.getElementById('sideBar')

  if (sideBar.classList.contains('show')) {
    sideBar.classList.remove('show')
    bodyOpacity.classList.remove('block')
    toysList.classList.remove("block")
    educationList.classList.remove("block")
  }
  else {

  }
});

// End sidebar canceling
// Offer On SeaStuff Products
let seaStuff = document.querySelectorAll(".sea-stuff")
seaStuff.forEach(element => {
  element.classList.add('offerBand');
});
// end Offer On SeaStuff Products
// Leading imgs Leding Band
let leadingImg = document.querySelectorAll('.leadingImg')
leadingImg.forEach(element => {
  element.classList.add('leadingBand')
})