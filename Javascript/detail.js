// Javascript/detail.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the bean ID from the URL 
    const urlParams = new URLSearchParams(window.location.search);
    const beanId = urlParams.get('id');

    if (!beanId) {
        console.error("No bean ID provided in the URL.");
        return;
    }

    // 2. Find the matching bean in the coffeeBeans array (from data.js)
    // Convert the bean name to a slug (lowercase with dashes) to match the ID
    const bean = coffeeBeans.find(item => {
        const generatedId = item.name.toLowerCase().replace(/\s+/g, '-');
        return generatedId === beanId;
    });

    if (bean) {
        // 3. Inject text data into the empty HTML elements
        const titleElement = document.querySelector('h1');
        if (titleElement) titleElement.innerText = bean.name;
        
        const capitalizedOrigin = bean.origin.charAt(0).toUpperCase() + bean.origin.slice(1);
        const originElement = document.querySelector('.origin');
        if (originElement) originElement.innerText = `(${capitalizedOrigin})`;

        const speciesElement = document.querySelector('.species-tag');
        if (speciesElement) {
            speciesElement.innerText = bean.species.charAt(0).toUpperCase() + bean.species.slice(1);
        }
        
        const caffeineElement = document.querySelector('.caffeine-tag');
        if (caffeineElement) {
            let caffeineText = bean.caffeine.charAt(0).toUpperCase() + bean.caffeine.slice(1);
            if (bean.caffeine === 'none') {
                caffeineText = 'Decaf'; // Change 'None' to 'Decaf'
            } else {
                caffeineText += ' Caffeine'; // e.g., 'High Caffeine'
            }
                
            caffeineElement.innerText = caffeineText;
        }

        const flavorElement = document.querySelector('.flavor');
        if (flavorElement) flavorElement.innerText = bean.flavorFull;
        
        const aromaElement = document.querySelector('.aroma');
        if (aromaElement) aromaElement.innerText = bean.aromaFull;
        
        const aboutElement = document.querySelector('.about');
        if (aboutElement) aboutElement.innerText = bean.about;
        
        const brewElement = document.querySelector('.brew');
        if (brewElement) brewElement.innerText = bean.brew;
        
        // 4. Update the main image based on the bean ID
        const imgElement = document.querySelector('.image-side img');
        if (imgElement){
            imgElement.src = `../image/${beanId}.jpg`;
            imgElement.onerror = function() {
                this.style.display = 'none';
                this.parentElement.classList.add('is-fallback');
            }
        };
    
        // 5. Render the visual dots for specifications
        // Map the existing 1-3 scale (from filter) to a 1-5 visual scale
        
        // Acidity: 1(Low)->1, 2(Medium)->3, 3(High)->4
        const acidityMap = { 1: 1, 2: 3, 3: 4 }; 
        renderDots('acidity-dots', acidityMap[bean.acidity] || 3);

        // Body: 1(Light)->2, 2(Medium)->3, 3(Heavy)->4
        const bodyMap = { 1: 2, 2: 3, 3: 4 };
        renderDots('body-dots', bodyMap[bean.body] || 3);

        // Roast: 1(Light)->2, 2(Light-Med)->3, 3(Med)->3, 4(Med-Dark)->4, 5(Dark)->5
        const roastMap = { 1: 2, 2: 3, 3: 3, 4: 4, 5: 5 };
        renderDots('roast-dots', roastMap[bean.roast] || 3);

    } else {
        // Error handling if the bean is not found in the database
        console.error("Bean data not found for ID:", beanId);
        document.querySelector('.content-section').innerHTML = "<h2>Sorry, coffee bean details not found.</h2>";
    }
});

/**
 * Function to fill the correct number of dots
 * @param {string} containerId - The ID of the div containing the dots
 * @param {number} level - The number of dots to fill (1-5)
 */
function renderDots(containerId, level) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Select all span elements with the class 'dot' inside this container
    const dots = container.querySelectorAll('.dot');
    
    // Loop through each dot and add/remove the 'filled' class
    dots.forEach((dot, index) => {
        if (index < level) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}