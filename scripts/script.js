const nav = document.querySelector(".sidenav");
const burger = document.querySelector(".burger");
const closeNav = document.querySelector(".closebtn");

burger.addEventListener("click", function () {
  nav.style.width = "280px";
});
closeNav.addEventListener("click", function () {
  nav.style.removeProperty("width");
});

// create references to the modal...
var modal = document.getElementById("myModal");
// to all images -- note I'm using a class!
var images = document.getElementsByClassName("myImage");
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

// const option = document.getElementById("option").selectedIndex;
// const price = document.querySelector(".price");

// if (option == "8 x 8") {
//   price.innerHTML = "£20";
// }
