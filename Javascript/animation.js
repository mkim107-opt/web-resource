// Javascript/animation.js

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


/* === + - setup === */
function toggleFilter(header) {
    const group = header.parentElement;
    group.classList.toggle('collapsed');
    
    const icon = header.querySelector('.toggle-icon');
    if (group.classList.contains('collapsed')) {
        icon.textContent = '+';
    } else {
        icon.textContent = '-';
    }
}
function showAll(btn) {
    // alert("Show all labels hidden");
    const content = btn.parentElement;
    content.classList.toggle('expanded');

    if(content.classList.contains('expanded')){
        btn.textContent = '- View Less';
    }else{
        btn.textContent = '+ View More';
    }
}


/* === Reset button functionality === */
document.getElementById('reset-filters').addEventListener('click', () => {
    // 1. Reset sliders to minimum values
    document.querySelectorAll('input[type="range"]').forEach(slider => {
        slider.value = slider.min;
        if (typeof updateSliderStyle === 'function') {
            updateSliderStyle(slider);
        }
    });
    // 2. Uncheck all checkboxes and radio buttons
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
        input.checked = false;
    });
    // 3. Reset all dropdown selects
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });

    renderCards(coffeeBeans); 
    console.log("Filters cleared. Showing all " + coffeeBeans.length + " beans.");
});