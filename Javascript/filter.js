// Javascript/filter.js

/**
 * 1. Coffee Bean Database
 * Note: Acidity, Body, and Roast levels are mapped to numeric values (1-5) for slider compatibility.
 */
const coffeeBeans = [
    {
        name: "Ethiopia Yirgacheffe",
        origin: "ethiopia",
        species: "arabica",
        roast: 1, // Light 
        acidity: 3, // High 
        body: 1, // Light 
        caffeine: "regular",
        primaryTaste: ["fruity", "floral"],
        aroma: ["jasmine", "berry", "lemon"],
        description: "Bright floral aromas and pleasant acidity great for enjoying light and crisp like tea."
    },
    {
        name: "Ethiopia Sidamo",
        origin: "ethiopia",
        species: "arabica",
        roast: 2, //  Light-Medium
        acidity: 2, // Medium
        body: 2, // Medium 
        caffeine: "Regular",
        primaryTaste: ["wine", "berry"],
        aroma: ["cherry", "chocolate", "black-tea"],
        description: "Slightly heavier body than Yirgacheffe, with elegant red wine and black tea notes."
    },
    {
        name: "Ethiopia Guji",
        origin: "ethiopia",
        species: "arabica",
        roast: 1, // Light
        acidity: 3, // High
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["tropical"],
        aroma: ["peach", "plum", "floral"],
        description: "Bursting with juicy acidity and sweet tropical fruit notes like peach and plum."
    },
    {
        name: "Ethiopia Harrar",
        origin: "ethiopia",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["earthy", "berry"],
        aroma: ["blueberry", "earth", "spice"],
        description: "Wild earthy notes mixed with dense blueberry sweetness for a rugged yet charming flavor."
    },
    {
        name: "Colombia Supremo",
        origin: "colombia",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["balanced", "nutty"],
        aroma: ["walnut", "chocolate"],
        description: "Excellent balance of acidity and sweetness; the epitome of universally loved mild coffee."
    },
    {
        name: "Colombia Huila",
        origin: "colombia",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["fruity", "sweet"],
        aroma: ["apple", "caramel", "chocolate"],
        description: "Emphasizes sweetness over Supremo, with soft fruit notes melting into a heavy body."
    },
    {
        name: "Colombia Nariño",
        origin: "colombia",
        species: "arabica",
        roast: 2, // Light-Medium
        acidity: 3, // High
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["citrus", "nutty"],
        aroma: ["orange", "almond"],
        description: "Grown in volcanic soil, boasting clear, citrusy orange acidity and a clean finish."
    },
    {
        name: "Brazil Cerrado",
        origin: "brazil",
        species: "arabica",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["nutty", "chocolate"],
        aroma: ["dark-choc", "almond"],
        description: "Almost no acidity with savory, heavy sweetness, perfect for lattes or daily coffee."
    },
    {
        name: "Brazil Santos",
        origin: "brazil",
        species: "arabica",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["nutty", "mild"],
        aroma: ["hazelnut", "milk-choc"],
        description: "Smooth and rounded with no sharp bitterness or sourness, often used as a blending base."
    },
    {
        name: "Brazil Yellow Bourbon",
        origin: "brazil",
        species: "arabica",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["sweet", "nutty"],
        aroma: ["honey", "roasted-almond"],
        description: "From yellow cherries, much sweeter and smoother than standard Brazilian beans."
    },
    {
        name: "Guatemala Antigua",
        origin: "guatemala",
        species: "arabica",
        roast: 4, // Medium-Dark
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["smoky", "chocolate"],
        aroma: ["smoke", "dark-choc"],
        description: "Grown in volcanic regions, featuring a distinct smoky aroma and bittersweet dark chocolate."
    },
    {
        name: "Guatemala Huehuetenango",
        origin: "guatemala",
        species: "arabica",
        roast: 3, // Medium
        acidity: 3, // High
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["fruity", "chocolate"],
        aroma: ["grape", "milk-choc"],
        description: "Grown at high altitudes, retaining lively fruit acidity and a subtle sweetness."
    },
    {
        name: "Guatemala Coban",
        origin: "guatemala",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["tropical", "spicy"],
        aroma: ["plum", "cinnamon"],
        description: "Grown in humid rainforests, offering unique spice notes and heavy fruit sweetness."
    },
    {
        name: "Costa Rica Tarrazu",
        origin: "costa rica",
        species: "arabica",
        roast: 3, // Medium
        acidity: 3, // High
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["clean", "fruity"],
        aroma: ["green-apple", "honey"],
        description: "Characterized by crisp green apple acidity and a clean, honey-sweet finish."
    },
    {
        name: "Costa Rica Tres Rios",
        origin: "costa rica",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["balanced", "sweet"],
        aroma: ["maple-syrup", "berry"],
        description: "Known as the 'Bordeaux' of Costa Rica, with excellent balance and complex sweetness."
    },
    {
        name: "Panama Geisha",
        origin: "panama",
        species: "arabica",
        roast: 1, // Light
        acidity: 3, // High
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["floral", "sweet"],
        aroma: ["bergamot", "honey", "peach"],
        description: "One of the most expensive and premium beans, boasting an overwhelming perfume-like floral aroma."
    },
    {
        name: "Panama Boquete",
        origin: "panama",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["citrus", "chocolate"],
        aroma: ["tangerine", "cocoa"],
        description: "A pleasant harmony of bright tangerine acidity and smooth cocoa flavors."
    },
    {
        name: "El Salvador Pacamara",
        origin: "el salvador",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["sweet", "fruity"],
        aroma: ["peach", "plum", "vanilla"],
        description: "Large beans yielding a creamy texture and abundant sweet fruit notes like peach."
    },
    {
        name: "Honduras Marcala",
        origin: "honduras",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["sweet", "chocolate"],
        aroma: ["caramel", "orange"],
        description: "Mild yet attractive with sticky caramel sweetness and subtle orange acidity."
    },
    {
        name: "Nicaragua Matagalpa",
        origin: "nicaragua",
        species: "arabica",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["nutty", "mild"],
        aroma: ["almond", "milk-choc"],
        description: "Low acidity, nutty, and creamy, great for those seeking a smooth, gentle coffee."
    },
    {
        name: "Kenya AA",
        origin: "kenya",
        species: "arabica",
        roast: 2, // Light-Medium
        acidity: 3, // High
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["wine", "fruity"],
        aroma: ["grapefruit", "blackberry"],
        description: "Heavy body paired with bright grapefruit acidity for an intense, premium flavor."
    },
    {
        name: "Kenya Peaberry",
        origin: "kenya",
        species: "arabica",
        roast: 3, // Medium
        acidity: 3, // High
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["intense", "fruity"],
        aroma: ["blackcurrant", "tangerine"],
        description: "A mutation with one round bean per cherry, resulting in highly concentrated flavors."
    },
    {
        name: "Tanzania Kilimanjaro",
        origin: "tanzania",
        species: "arabica",
        roast: 3, // Medium
        acidity: 3, // High
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["wine", "citrus"],
        aroma: ["lemon", "berry"],
        description: "Called the 'Gentleman of Africa', softer than Kenya but with wine-like crisp acidity."
    },
    {
        name: "Rwanda Inzovu",
        origin: "rwanda",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["fruity", "sweet"],
        aroma: ["cherry", "black-tea", "syrup"],
        description: "Clean like drinking black tea, delicately laced with sweet red fruit aromas."
    },
    {
        name: "Burundi Kayanza",
        origin: "burundi",
        species: "arabica",
        roast: 3, // Medium
        acidity: 3, // High
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["berry", "chocolate"],
        aroma: ["redcurrant", "dark-choc"],
        description: "Complex profile starting with crisp berry acidity and ending with bittersweet dark chocolate."
    },
    {
        name: "Uganda Bugisu",
        origin: "uganda",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["earthy", "fruity"],
        aroma: ["prune", "chocolate", "wine"],
        description: "Unique for African beans with earthy hints and deep prune and chocolate sweetness."
    },
    {
        name: "Yemen Mocha Mattari",
        origin: "yemen",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["chocolate", "earthy"],
        aroma: ["dark-choc", "wine", "earth"],
        description: "One of the world's top 3 premium coffees, fantastic wild earth, rich chocolate, and wine notes."
    },
    {
        name: "Indonesia Mandheling",
        origin: "indonesia",
        species: "arabica",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["earthy", "spicy"],
        aroma: ["cedar", "dark-choc", "herb"],
        description: "Almost no acidity, filling the mouth with heavy, bittersweet earth and herbal, masculine notes."
    },
    {
        name: "Indonesia Toraja",
        origin: "indonesia",
        species: "arabica",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["herbal", "chocolate"],
        aroma: ["clove", "dark-choc"],
        description: "Cleaner and more refined than Mandheling, with unique spice and chocolate notes."
    },
    {
        name: "Indonesia Gayo Mountain",
        origin: "indonesia",
        species: "arabica",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["spicy", "sweet"],
        aroma: ["cinnamon", "brown-sugar"],
        description: "Organic coffee from Sumatra, blends deep brown sugar sweetness with cinnamon aromas."
    },
    {
        name: "Papua New Guinea Sigri",
        origin: "png",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["sweet", "fruity"],
        aroma: ["apple", "honey", "herb"],
        description: "Grown from Jamaica Blue Mountain seedlings; superbly balanced with subtle herbal notes."
    },
    {
        name: "India Monsooned Malabar",
        origin: "india",
        species: "arabica",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["earthy", "spicy"],
        aroma: ["earth", "roasted-nut", "musk"],
        description: "Exposed to monsoon winds, eliminating acidity and creating a savory, uniquely aged aroma."
    },
    {
        name: "Hawaii Kona",
        origin: "usa (hawaii)",
        species: "arabica",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["sweet", "nutty"],
        aroma: ["butter", "macadamia", "caramel"],
        description: "World's top 3 coffee; lacks bitterness, featuring a buttery texture and macadamia nuttiness."
    },
    {
        name: "Jamaica Blue Mountain",
        origin: "jamaica",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["balanced", "sweet"],
        aroma: ["hazelnut", "cocoa", "mild"],
        description: "Famous British Royal coffee; a masterpiece of perfectly balanced acidity, sweetness, and bitterness."
    },
    {
        name: "Mexico Chiapas",
        origin: "mexico",
        species: "arabica",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["nutty", "chocolate"],
        aroma: ["roasted-almond", "cocoa"],
        description: "Often organic; light and crisp body with prominent nutty characteristics."
    },
    {
        name: "Mexico Veracruz",
        origin: "mexico",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["sweet", "citrus"],
        aroma: ["orange", "caramel"],
        description: "Grown at high altitudes, light body showcasing bright orange citrus and sweetness."
    },
    {
        name: "Peru Chanchamayo",
        origin: "peru",
        species: "arabica",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["mild", "nutty"],
        aroma: ["chocolate", "walnut"],
        description: "Low acidity and mild profile; an easy-drinking, organic daily coffee."
    },
    {
        name: "Peru Cajamarca",
        origin: "peru",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 1, // Light
        caffeine: "regular",
        primaryTaste: ["sweet", "fruity"],
        aroma: ["apple", "vanilla"],
        description: "Sweet vanilla aroma and subtle apple acidity; excellent for clean drip coffee."
    },
    {
        name: "Bolivia Caranavi",
        origin: "bolivia",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        caffeine: "regular",
        primaryTaste: ["fruity", "chocolate"],
        aroma: ["apricot", "milk-choc"],
        description: "Combines South American nuttiness with delicate apricot-like sweet fruitiness."
    },
    {
        name: "Cuba Crystal Mountain",
        origin: "cuba",
        species: "arabica",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["smoky", "nutty"],
        aroma: ["cigar", "cacao"],
        description: "Hemingway's favorite; smooth acidity with unique bittersweet cacao and cigar notes."
    },
    {
        name: "Vietnam Dalat Robusta",
        origin: "vietnam",
        species: "robusta",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "high",
        primaryTaste: ["bitter", "dark"],
        aroma: ["cacao-nibs", "smoke", "earth"],
        description: "Abundant crema and strong bitterness, perfect for Vietnamese coffee with condensed milk."
    },
    {
        name: "Vietnam Dak Lak Robusta",
        origin: "vietnam",
        species: "robusta",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "high",
        primaryTaste: ["smoky", "woody"],
        aroma: ["roasted-barley", "wood"],
        description: "Savory like strong roasted barley tea with woody notes; very high caffeine content."
    },
    {
        name: "India Cherry",
        origin: "india",
        species: "robusta",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "high",
        primaryTaste: ["spicy", "nutty"],
        aroma: ["roasted-grain", "pepper"],
        description: "An intense Robusta hitting you with rough spices and savory roasted grains."
    },
    {
        name: "India Robusta Parchment",
        origin: "india",
        species: "robusta",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "high",
        primaryTaste: ["bitter", "chocolate"],
        aroma: ["dark-choc", "hazelnut"],
        description: "A premium washed Robusta features a much cleaner taste than standard Robustas."
    },
    {
        name: "Uganda Robusta",
        origin: "uganda",
        species: "robusta",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "high",
        primaryTaste: ["dark", "smoky"],
        aroma: ["earth", "tobacco", "cacao"],
        description: "From the birthplace of Robusta, appealing wild earth and smoky tobacco notes."
    },
    {
        name: "Brazil Conilon",
        origin: "brazil",
        species: "robusta",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "high",
        primaryTaste: ["nutty", "bitter"],
        aroma: ["roasted-peanut", "earth"],
        description: "Brazilian Robusta variety; strong peanut-like nuttiness and bitterness."
    },
    {
        name: "Philippines Kapeng Barako",
        origin: "philippines",
        species: "liberica",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        caffeine: "low",
        primaryTaste: ["woody", "intense"],
        aroma: ["jackfruit", "cedar", "anise"],
        description: "Rare species leaving a very intense impression with heavy wood and unique jackfruit flavors."
    },
    {
        name: "Malaysia Liberica",
        origin: "malaysia",
        species: "liberica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "low",
        primaryTaste: ["smoky", "sweet"],
        aroma: ["brown-sugar", "smoke"],
        description: "Fills the mouth with thick texture, smoke, and a deep sweetness that intensifies as you chew."
    },
    {
        name: "Vietnam Excelsa",
        origin: "vietnam",
        species: "liberica",
        roast: 4, // Medium-Dark
        acidity: 2, // Medium
        body: 3, // Heavy
        caffeine: "regular",
        primaryTaste: ["tart", "fruity"],
        aroma: ["jackfruit", "dark-choc"],
        description: "A Liberica variant adds an intense, unique tart (sour) fruitiness when roasted."
    },
    {
        name: "Colombia Sugarcane Decaf",
        origin: "colombia",
        species: "arabica",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        caffeine: "none",
        primaryTaste: ["sweet", "nutty"],
        aroma: ["brown-sugar", "almond"],
        description: "Caffeine removed using sugarcane extract, perfectly preserving natural sweetness and nuttiness."
    }
];


/**
 * Main filtering function that handles checkboxes, radios, sliders, and selects.
 * It follows standard E-commerce logic: 
 * - OR logic within the same category (selecting more flavors increases results).
 * - AND logic between different categories (selecting a flavor AND an origin narrows results).
 */
function filterBeans() {
    // 1. Capture user inputs from the UI
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
            beanList.some(beanItem => beanItem.toLowerCase().replace(/\s+/g, '-').includes(selectedItem))
        );
    };

    // 2. Filter the master coffeeBeans list
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
            // Value 2: show dark only (5:dark)
            matchRoast = (bean.roast === 5);
        }

        // [CATEGORY: Species & Caffeines]
        const matchSpecies = (selectedSpecies === "all") || (bean.species.toLowerCase() === selectedSpecies.toLowerCase());
        const matchCaffeine = (selectedCaffeine === "all") || (bean.caffeine.toLowerCase() === selectedCaffeine.toLowerCase());

        // [CATEGORY: FLAVOR] 
        const matchFlavor = checkMatch(selectedFlavors, bean.primaryTaste);
        // [CATEGORY: AROMA]
        const matchAroma = checkMatch(selectedAromas, bean.aroma);
        // [CATEGORY: ORIGIN]
        const matchOrigin = checkMatch(selectedOrigins, [bean.origin]);

        // Return true only if all category "gates" are passed
        return matchAcidity && matchBody && matchRoast && matchSpecies && matchCaffeine && matchFlavor && matchAroma && matchOrigin;
    });

    // 3. Update the UI with the filtered list
    renderCards(filtered);
}


/** 
 * 3. UI Rendering Function
 * Dynamically creates HTML card elements and injects them into the grid.
 */
function renderCards(beans) {
    const grid = document.getElementById('bean-grid');
    if(!grid) return;

    grid.innerHTML = ""; 
    document.getElementById('count').innerText = beans.length;

    beans.forEach(bean => {
        const imageName = bean.name.toLowerCase().replace(/\s+/g, '-');
        const imagePath = `../image/${imageName}.jpg`;
        const fallbackImage = "../image/deco-bean.png";

        const roastLabels = {
            1: "L",  // Light
            2: "LM", // Light Medium
            3: "M",  // Medium
            4: "MD", // Medium Dark
            5: "D"   // Dark
        };
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

        grid.innerHTML += `
            <div class="result-container">
                <div class = "bean-image">
                    <img
                        src="${imagePath}" 
                        alt="${bean.name}" 
                        class="bean-img"
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
                        ${bean.description}
                    </div>
                </div>
            </div>`;
    });
}

// === Initialize ===
renderCards(coffeeBeans); // Show all beans on load
//listen to sliders
document.getElementById('acidity-slider').addEventListener('input', filterBeans);
document.getElementById('body-slider').addEventListener('input', filterBeans);
document.getElementById('roast-slider').addEventListener('input', filterBeans);
//listen to checkboxes, radios, and select
document.querySelectorAll('input[type="checkbox"], input[type="radio"], #select').forEach(element => {
    element.addEventListener('change', filterBeans);
});