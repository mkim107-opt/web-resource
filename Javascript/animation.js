
/* === BackToTopBtn Filter === */
const btnHTML = '<button id="backToTopBtn" title="Go to top">&#8679;</button>';
document.body.insertAdjacentHTML('beforeend', btnHTML);
// Get the button element
const topBtn = document.getElementById("backToTopBtn");
// When the user scrolls the page, execute the scrollCheck function
window.addEventListener("scroll", scrollCheck);
function scrollCheck() {
    // Show the button when scrolled down 300px from the top
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
}
// When the user clicks on the button, scroll to the top of the document
topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" /* This creates the smooth scrolling animation */
    });
});



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}