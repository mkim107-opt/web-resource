// Javascript/filter.js

/**
 * Main filtering function that handles checkboxes, radios, sliders, and selects.
 * It follows standard E-commerce logic: 
 * - OR logic within the same category (selecting more flavors increases results).
 * - AND logic between different categories (selecting a flavor AND an origin narrows results).
 */
function filterBeans() {
    //// 1. Capture user inputs from the UI
    // sliders
    const acidityVal = parseInt(document.getElementById('acidity-slider').value);
    const bodyVal = parseInt(document.getElementById('body-slider').value);
    const roastVal = parseInt(document.getElementById('roast-slider').value);
    // checkboxes
    const selectedFlavors = Array.from(document.querySelectorAll('input[name="flavor"]:checked')).map(cb => cb.value);
    const selectedAromas = Array.from(document.querySelectorAll('input[name="aroma"]:checked')).map(cb => cb.value);
    const selectedOrigins = Array.from(document.querySelectorAll('input[name="origin"]:checked')).map(cb => cb.value);
    // radio & select
    const selectedCaffeine = document.querySelector('input[name="caffeine"]:checked')?.value || "all";
    const selectedSpecies = document.getElementById('select').value;

    /**
     * Helper Function: checkMatch
     * Logic: If nothing is selected, allow all items (true). 
     * If selections exist, check if at least one selected item matches the bean's properties.
     */
    const checkMatch = (selectedList, beanList) => {
        if (selectedList.length === 0) return true;
        return selectedList.some(selectedItem => 
            beanList.includes(selectedItem)
        );
    };

    //// 2. Filter the master coffeeBeans list
    const filtered = coffeeBeans.filter(bean => {
         // [CATEGORY: SLIDERS (ACIDITY & BODY)]
         // If slider is 1, ignore filter (match all). If 2 or 3, exact match.
        const matchAcidity = (acidityVal === 1) || (bean.acidity === acidityVal);
        const matchBody = (bodyVal === 1) || (bean.body === bodyVal);
        // [CATEGORY: SLIDERS (ROASTS LEVEL)] 
        // Mapping 3-step UI to 5-step Data
        let matchRoast = false;
        if (roastVal === 1) { // Value 1: show all roast levels
            matchRoast = true; 
        } else if (roastVal === 2) { 
            // Value 2: show medium range (2:light-medium, 3:medium, 4:medium-dark)
            matchRoast = (bean.roast >= 2 && bean.roast <= 4);
        } else if (roastVal === 3) {  
            // Value 3: show dark only (5:dark)
            matchRoast = (bean.roast === 5);
        }

        // [CATEGORY: Species & Caffeines]
        const matchSpecies = (selectedSpecies === "all") || (bean.species === selectedSpecies);
        const matchCaffeine = (selectedCaffeine === "all") || (bean.caffeine === selectedCaffeine);

        // [CATEGORY: FLAVOR] 
        const matchFlavor = checkMatch(selectedFlavors, bean.primaryTaste);
        // [CATEGORY: AROMA]
        const matchAroma = checkMatch(selectedAromas, bean.aroma);
        // [CATEGORY: ORIGIN]
        const matchOrigin = checkMatch(selectedOrigins, [bean.origin]);

        // Return true only if all category "gates" are passed
        return matchAcidity && matchBody && matchRoast && matchSpecies && matchCaffeine && matchFlavor && matchAroma && matchOrigin;
    });

    //// 3. Update the UI with the filtered list
    renderCards(filtered);
}


/** 
 * UI Rendering Function
 * Dynamically creates HTML card elements and injects them into the grid.
 */
function renderCards(beans) {
    const grid = document.getElementById('bean-grid');
    if(!grid) return;

    grid.innerHTML = ""; 
    document.getElementById('count').innerText = beans.length;

    const html = beans.map(bean => {
        const imageName = bean.name.toLowerCase().replace(/\s+/g, '-');
        const imagePath = `../image/${imageName}.jpg`;

        const roastLabels = {1: "L", 2: "LM", 3: "M", 4: "MD", 5: "D"};
        const shortRoast = roastLabels[bean.roast] || bean.roast;

        const tasteHtml = bean.primaryTaste
            .map(t => `<span class="taste-tag">#${t.trim()}</span>`)
            .join('');
        const aromaHtml = bean.aroma
            .map(t=> `<span class="aroma-tag">#${t.trim()}</span>`)
            .join('');
        
        const levelLabels = { 1: "L", 2: "M", 3: "H" };
        const acidityText = levelLabels[bean.acidity] || bean.acidity;
        const bodyText = levelLabels[bean.body] || bean.body;

        return `
            <div class="result-container" onclick="location.href='detail.html?id=${imageName}'" style="cursor: pointer;">
                <div class = "bean-image">
                    <img src="${imagePath}" 
                     alt="${bean.name}" 
                     onerror="this.style.display='none'; this.parentElement.classList.add('is-fallback');"
                    >
                </div>

                <div class="bean-info">
                    <div class="bean-header">
                        <span class="bean-name">${bean.name}</span>
                        <span class="bean-origin">(${bean.origin})</span>
                    </div>

                    <div class="tag-section">
                        <div class="taste-wrapper">${tasteHtml}</div>
                        <div class="aroma-wrapper">${aromaHtml}</div>
                    </div>

                    <div class="bean-specs">
                        <span><span class="spec-label">Acidity:</span>${acidityText}</span>
                        <span><span class="spec-label">Body:</span>${bodyText}</span>
                        <span><span class="spec-label">Roast:</span>${shortRoast}</span>
                    </div>

                    <div class="bean-detail">
                        ${bean.shortDesc}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    grid.innerHTML = html;
}

// === Initialize ===
// Wait for the browser to fully restore cached form inputs when navigating back
window.addEventListener('pageshow', function() {
    setTimeout(function() {
        filterBeans();
    }, 10); // 10ms delay ensures browser UI state is completely restored
});

//listen to sliders
document.getElementById('acidity-slider').addEventListener('input', filterBeans);
document.getElementById('body-slider').addEventListener('input', filterBeans);
document.getElementById('roast-slider').addEventListener('input', filterBeans);

//listen to checkboxes, radios, and select
const filters = document.querySelectorAll ('input, select');
filters.forEach(element => element.addEventListener('change', filterBeans));

//filter header
document.querySelectorAll('.filter-header').forEach(el => {
    el.addEventListener('click', toggleFilter);
});

//view more btn
document.querySelectorAll('.view-more').forEach(el => {
    el.addEventListener('click', function(e){
        e.stopPropagation();
        showAll(this);
    })
});