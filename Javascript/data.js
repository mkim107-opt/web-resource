// Javascript/data.js

/** Coffee Bean Database **/
const coffeeBeans = [
    {
        name: "Ethiopia Yirgacheffe",
        origin: "ethiopia",
        species: "arabica",
        caffeine: "regular",
        roast: 1, // Light 
        acidity: 3, // High 
        body: 1, // Light 
        primaryTaste: ["fruity", "floral"],
        aroma: ["jasmine", "berry", "lemon"],
        shortDesc: "Bright floral aromas and pleasant acidity great for enjoying light and crisp like tea.",
        flavorFull: "The initial sip reveals a vibrant, fruity acidity reminiscent of lemon and berries, which gracefully transitions into a deeply floral finish.",
        aromaFull: "Bright floral aromas dominated by sweet jasmine notes, making it great for enjoying light and crisp like tea.",
        about: "Yirgacheffe is a highly regarded micro-region within the larger Sidama zone of Ethiopia. Because of the extremely high altitude (1,700-2,200m) and dense vegetation, the coffee cherries mature slowly, developing highly complex sugars. It is widely considered some of the highest-quality Arabica in the world.",
        brew: "To fully appreciate its crisp clarity and delicate aromas, it is best processed using the washed method and brewed as a pour-over (such as a V60 or Chemex)."
    },
    {
        name: "Ethiopia Sidamo",
        origin: "ethiopia",
        species: "arabica",
        caffeine: "regular",
        roast: 2, //  Light-Medium
        acidity: 2, // Medium
        body: 2, // Medium 
        primaryTaste: ["wine", "berry"],
        aroma: ["cherry", "chocolate", "black-tea"],
        shortDesc: "Slightly heavier body than Yirgacheffe, with elegant red wine and black tea notes.",
        flavorFull: "It greets the palate with a sophisticated wine-like acidity and rich berry notes, gradually opening up to complex layers of cherry and milk chocolate.",
        aromaFull: "Features elegant notes of red wine and black tea, offering a slightly heavier and more sophisticated scent than Yirgacheffe.",
        about: "The Sidamo region spans a large, diverse mountainous area in southern Ethiopia. Grown in nutrient-rich volcanic soil, these beans benefit from a climate that perfectly nurtures dense cherries.",
        brew: "A clever dripper or a classic pour-over using water around 92°C will perfectly extract its wine-like acidity and tea-like finish."
    },
    {
        name: "Ethiopia Guji",
        origin: "ethiopia",
        species: "arabica",
        caffeine: "regular",
        roast: 1, // Light
        acidity: 3, // High
        body: 1, // Light
        primaryTaste: ["tropical"],
        aroma: ["peach", "plum", "floral"],
        shortDesc: "Bursting with juicy acidity and sweet tropical fruit notes like peach and plum.",
        flavorFull: "Bursting with juicy acidity and sweet tropical fruit notes like peach and plum, followed by a clean floral aftertaste.",
        aromaFull: "Intense tropical fruit aromas mixed with delicate floral scents like peach blossoms.",
        about: "Guji was once part of Sidamo but is now recognized for its unique profile. The region's high altitude and rich soil produce some of the most complex tropical notes in Ethiopia.",
        brew: "Best enjoyed as a cold brew or a light pour-over to emphasize its juicy tropical sweetness and refreshing acidity."
    },
    {
        name: "Ethiopia Harrar",
        origin: "ethiopia",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["earthy", "berry"],
        aroma: ["blueberry", "earth", "spice"],
        shortDesc: "Wild earthy notes mixed with dense blueberry sweetness for a rugged yet charming flavor.",
        flavorFull: "Wild earthy notes mixed with dense blueberry sweetness, offering a rugged yet charmingly complex flavor profile.",
        aromaFull: "Distinctive wild berry scents combined with a unique earthy spice and deep blueberry sweetness.",
        about: "Harrar beans are mostly wild-grown and dry-processed (natural), which accounts for their characteristic wild, exotic, and heavy-bodied fruitiness.",
        brew: "A French Press is excellent for Harrar, as it captures the heavy body and wild berry notes that might be filtered out in paper drip methods."
    },
    {
        name: "Colombia Supremo",
        origin: "colombia",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        primaryTaste: ["balanced", "nutty"],
        aroma: ["walnut", "chocolate"],
        shortDesc: "Excellent balance of acidity and sweetness; the epitome of universally loved mild coffee.",
        flavorFull: "A perfectly balanced cup featuring a harmonious blend of mild acidity and sweet caramel, finishing with a comforting nutty aftertaste.",
        aromaFull: "Inviting aromas of roasted walnuts and sweet milk chocolate fill the air, promising a classic and comforting coffee experience.",
        about: "Supremo refers to the largest bean size grade in Colombia. These beans are sourced from various high-altitude regions across the country, ensuring a consistent, crowd-pleasing profile that represents the classic, high-quality Colombian coffee taste.",
        brew: "Excellent as a standard drip or pour-over. Its balanced nature also makes it a fantastic base for smooth, everyday espresso drinks."
    },
    {
        name: "Colombia Huila",
        origin: "colombia",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["fruity", "sweet"],
        aroma: ["apple", "caramel", "chocolate"],
        shortDesc: "Emphasizes sweetness over Supremo, with soft fruit notes melting into a heavy body.",
        flavorFull: "A rich and heavy-bodied cup that emphasizes deep sweetness. Soft fruit notes reminiscent of red apple melt beautifully into a lingering caramel and chocolate finish.",
        aromaFull: "Complex and warm aromas of baked apple, rich caramel, and subtle hints of milk chocolate.",
        about: "The Huila department is renowned for producing some of Colombia's most celebrated specialty coffees. Its unique microclimates and nutrient-rich volcanic soils contribute to a distinctively sweet and fruit-forward cup profile.",
        brew: "Brews beautifully in an AeroPress or a Clever Dripper to extract maximum sweetness and highlight its syrupy body."
    },
    {
        name: "Colombia Nariño",
        origin: "colombia",
        species: "arabica",
        caffeine: "regular",
        roast: 2, // Light-Medium
        acidity: 3, // High
        body: 2, // Medium
        primaryTaste: ["citrus", "nutty"],
        aroma: ["orange", "almond"],
        shortDesc: "Grown in volcanic soil, boasting clear, citrusy orange acidity and a clean finish.",
        flavorFull: "Vibrant and clean, striking the palate with a refreshing citrus acidity like sweet orange, followed by a crisp, pleasantly nutty finish.",
        aromaFull: "Bright and uplifting scents of sweet orange peel combined with delicate roasted almond notes.",
        about: "Located in the extreme south of Colombia, Nariño features high altitudes and steep slopes. The dramatic temperature drops at night allow the coffee cherries to mature slowly, locking in complex sugars and vibrant acidity.",
        brew: "Best enjoyed as a V60 pour-over to highlight its sparkling citrus acidity and beautifully clean, crisp finish."
    },
    {
        name: "Brazil Cerrado",
        origin: "brazil",
        species: "arabica",
        caffeine: "regular",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["nutty", "chocolate"],
        aroma: ["dark-choc", "almond"],
        shortDesc: "Almost no acidity with savory, heavy sweetness, perfect for lattes or daily coffee.",
        flavorFull: "A bold, low-acidity profile packed with savory, heavy sweetness. Deep notes of dark chocolate and roasted almonds dominate the palate with a thick texture.",
        aromaFull: "Intense and heavy aromas of dark chocolate, pure cocoa powder, and toasted nuts.",
        about: "The Cerrado region features a flat savanna with well-defined seasons, perfect for dry-processing (natural) coffees. This environment creates beans with a heavy body, low acidity, and distinctive nutty sweetness.",
        brew: "An absolute powerhouse for espresso. It creates a rich, thick crema and pairs flawlessly with milk for delicious lattes and cappuccinos."
    },
    {
        name: "Brazil Santos",
        origin: "brazil",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 1, // Light
        primaryTaste: ["nutty", "mild"],
        aroma: ["hazelnut", "milk-choc"],
        shortDesc: "Smooth and rounded with no sharp bitterness or sourness, often used as a blending base.",
        flavorFull: "Incredibly smooth and mild with almost no sharp bitterness or acidity. Offers a gentle, rounded sweetness reminiscent of milk chocolate and hazelnuts.",
        aromaFull: "Soft, comforting aromas of sweet hazelnut and creamy milk chocolate.",
        about: "Named after the port of Santos where it is shipped, this coffee represents the classic, mild Brazilian profile. It is a staple in the coffee industry, loved for its unpretentious and highly approachable nature.",
        brew: "A versatile bean that works wonderfully in a standard drip coffee maker or as a reliable, neutral blending base for home espresso."
    },
    {
        name: "Brazil Yellow Bourbon",
        origin: "brazil",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 2, // Medium
        primaryTaste: ["sweet", "nutty"],
        aroma: ["honey", "roasted-almond"],
        shortDesc: "From yellow cherries, much sweeter and smoother than standard Brazilian beans.",
        flavorFull: "A remarkably smooth cup characterized by a deep, syrupy sweetness. It offers layers of honey and roasted almonds, with a soft mouthfeel that avoids any harsh bitterness.",
        aromaFull: "The fragrance is dominated by rich honey and freshly roasted almonds, creating a warm and inviting olfactory experience.",
        about: "Yellow Bourbon is a rare natural mutation where the coffee cherries turn yellow instead of red when ripe. This variety is known for producing a cleaner and much sweeter profile compared to traditional red bourbon trees, thriving in the sunny landscapes of Brazil.",
        brew: "To highlight its natural sweetness, try a Kalita Wave or a standard drip brewer with water around 90-92°C."
    },
    {
        name: "Guatemala Antigua",
        origin: "guatemala",
        species: "arabica",
        caffeine: "regular",
        roast: 4, // Medium-Dark
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["smoky", "chocolate"],
        aroma: ["smoke", "dark-choc"],
        shortDesc: "Grown in volcanic regions, featuring a distinct smoky aroma and bittersweet dark chocolate.",
        flavorFull: "A sophisticated profile featuring a pleasant bittersweetness of dark chocolate, accented by a subtle, elegant smokiness that lingers on the palate.",
        aromaFull: "Deep and complex, with clear notes of dark cocoa and a distinctive hint of wood smoke, characteristic of its volcanic origin.",
        about: "Antigua is perhaps Guatemala's most famous coffee region, surrounded by three volcanoes. The nitrogen-rich volcanic soil and consistent humidity create a bean with a heavy body and a 'smoky' complexity that is highly sought after by connoisseurs.",
        brew: "A French Press or a moka pot is ideal for capturing the heavy body and those signature smoky, chocolatey depths."
    },
    {
        name: "Guatemala Huehuetenango",
        origin: "guatemala",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 3, // High
        body: 2, // Medium
        primaryTaste: ["fruity", "chocolate"],
        aroma: ["grape", "milk-choc"],
        shortDesc: "Grown at high altitudes, retaining lively fruit acidity and a subtle sweetness.",
        flavorFull: "A lively and bright cup with crisp wine-like acidity. It features playful notes of sweet grapes and green apple, beautifully balanced by a smooth milk chocolate finish.",
        aromaFull: "Fragrant with scents of sweet grapes and hints of light floral notes, grounded by a creamy chocolate base.",
        about: "Huehuetenango is one of the highest and driest coffee-growing regions in Guatemala. The hot winds that blow up from the Mexican plains protect the region from frost, allowing coffee to grow at extreme altitudes of up to 2,000 meters, resulting in vibrant acidity.",
        brew: "A V60 pour-over will perfectly highlight the wine-like acidity and delicate fruit notes of these high-altitude beans."
    },
    {
        name: "Guatemala Coban",
        origin: "guatemala",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["tropical", "spicy"],
        aroma: ["plum", "cinnamon"],
        shortDesc: "Grown in humid rainforests, offering unique spice notes and heavy fruit sweetness.",
        flavorFull: "Rich and syrupy with a unique profile of deep tropical fruit sweetness, like ripe plums, subtly enhanced by warm spice notes of cinnamon and clove.",
        aromaFull: "Intense and sweet, reminiscent of spiced fruit compote and forest earth after rain.",
        about: "The Cobán region is characterized by constant rain and cloud cover (locally known as 'Chipichipi'). This humid rainforest environment produces beans with a distinctively heavy body and spicy, earthy undertones that differ from other Guatemalan regions.",
        brew: "An AeroPress or a Clever Dripper works wonders to emphasize the syrupy fruit sweetness and those intriguing spice notes."
    },
    {
        name: "Costa Rica Tarrazu",
        origin: "costa rica",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 3, // High
        body: 1, // Light
        primaryTaste: ["clean", "fruity"],
        aroma: ["green-apple", "honey"],
        shortDesc: "Characterized by crisp green apple acidity and a clean, honey-sweet finish.",
        flavorFull: "Vibrant and refreshing, with a sparkling acidity reminiscent of crisp green apples. It finishes with a delicate, clean sweetness of wild honey.",
        aromaFull: "Bright and sweet, with distinct scents of green apple skin and a light, floral honey sweetness.",
        about: "Tarrazu is world-renowned for its strictly hard beans (SHB). The high altitude and volcanic soil produce a dense bean that is incredibly bright and clean, representing the pinnacle of Costa Rican specialty coffee.",
        brew: "Best enjoyed as a pour-over (V60 or Chemex) to appreciate the transparency, crisp acidity, and clean honey finish."
    },
    {
        name: "Costa Rica Tres Rios",
        origin: "costa rica",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        primaryTaste: ["balanced", "sweet"],
        aroma: ["maple-syrup", "berry"],
        shortDesc: "Known as the 'Bordeaux' of Costa Rica, with excellent balance and complex sweetness.",
        flavorFull: "Wonderfully elegant and balanced. It delivers a rich, complex sweetness of maple syrup paired with subtle, refined berry notes and a smooth, velvety finish.",
        aromaFull: "Sweet and enticing, with warm notes of maple syrup and a hint of dark berries.",
        about: "Tres Rios is often called the 'Bordeaux' of Costa Rica due to its ideal growing conditions. The Irazú Volcano provides rich soil, and the climate allows for a perfect balance of acidity and body, producing very sophisticated cups.",
        brew: "A standard pour-over or a Chemex is recommended to showcase the elegant balance and complex syrup-like sweetness."
    },
    {
        name: "Panama Geisha",
        origin: "panama",
        species: "arabica",
        caffeine: "regular",
        roast: 1, // Light
        acidity: 3, // High
        body: 1, // Light
        primaryTaste: ["floral", "sweet"],
        aroma: ["bergamot", "honey", "peach"],
        shortDesc: "One of the most expensive and premium beans, boasting an overwhelming perfume-like floral aroma.",
        flavorFull: "An extraordinarily elegant cup with a tea-like body, overflowing with delicate floral notes, sweet bergamot, and a vibrant, lingering peach sweetness.",
        aromaFull: "An intoxicating, perfume-like bouquet of jasmine, bergamot, and ripe peach that instantly captivates the senses.",
        about: "The Geisha variety is renowned worldwide as one of the most exclusive and expensive coffees. Grown in the high-altitude microclimates of Panama, it requires meticulous care but rewards with a wildly complex and floral profile unmatched by any other bean.",
        brew: "A delicate pour-over (like a Chemex) with water at 90°C is absolutely essential to preserve its ethereal floral aromas and tea-like clarity."
    },
    {
        name: "Panama Boquete",
        origin: "panama",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        primaryTaste: ["citrus", "chocolate"],
        aroma: ["tangerine", "cocoa"],
        shortDesc: "A pleasant harmony of bright tangerine acidity and smooth cocoa flavors.",
        flavorFull: "A perfectly harmonious cup offering bright, sparkling tangerine acidity that seamlessly transitions into a smooth, comforting milk chocolate finish.",
        aromaFull: "Inviting scents of sweet citrus blossoms paired with a warm, welcoming cocoa aroma.",
        about: "Boquete is a picturesque valley situated near the Baru Volcano. The cool mountain breezes and rich volcanic soil create an ideal terroir for growing sweet, balanced, and highly nuanced Arabica beans.",
        brew: "A versatile coffee that shines in a V60 pour-over to highlight the citrus, or pulled as an espresso for a vibrant, chocolatey shot."
    },
    {
        name: "El Salvador Pacamara",
        origin: "el salvador",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["sweet", "fruity"],
        aroma: ["peach", "plum", "vanilla"],
        shortDesc: "Large beans yielding a creamy texture and abundant sweet fruit notes like peach.",
        flavorFull: "A remarkably creamy and full-bodied experience. It coats the palate with lush, sweet fruit notes of ripe peach and plum, finishing with a hint of smooth vanilla.",
        aromaFull: "Rich and fruity, emitting sweet aromas of stone fruits like peach and plum, underlined by a soft vanilla sweetness.",
        about: "Pacamara is a celebrated hybrid variety created in El Salvador (a cross between Pacas and Maragogipe). Known for its exceptionally large bean size, it produces a cup with outstanding sweetness, a creamy mouthfeel, and complex fruitiness.",
        brew: "Excellent in a flat-bottom brewer like the Kalita Wave to enhance its rich, creamy texture and round out the sweet fruit flavors."
    },
    {
        name: "Honduras Marcala",
        origin: "honduras",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        primaryTaste: ["sweet", "chocolate"],
        aroma: ["caramel", "orange"],
        shortDesc: "Mild yet attractive with sticky caramel sweetness and subtle orange acidity.",
        flavorFull: "A beautifully mild and approachable coffee. It charms with a sticky caramel sweetness and a very gentle, subtle orange-like acidity that keeps the cup lively.",
        aromaFull: "Warm and comforting aromas of melting caramel and baked orange.",
        about: "Marcala was the first region in Central America to receive a Protected Designation of Origin for its coffee. The region's dedication to quality produces exceptionally clean, sweet, and well-rounded beans that are universally loved.",
        brew: "A reliable daily drinker that performs wonderfully in an automatic drip machine or an AeroPress."
    },
    {
        name: "Nicaragua Matagalpa",
        origin: "nicaragua",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 2, // Medium
        primaryTaste: ["nutty", "mild"],
        aroma: ["almond", "milk-choc"],
        shortDesc: "Low acidity, nutty, and creamy, great for those seeking a smooth, gentle coffee.",
        flavorFull: "Incredibly smooth and gentle on the palate. Its low acidity allows the comforting flavors of roasted almonds and creamy milk chocolate to take center stage.",
        aromaFull: "Soft, sweet aromas of toasted nuts and cocoa powder.",
        about: "Grown in the mountainous, heavily forested region of Matagalpa, these beans mature under shade trees. This careful cultivation results in a very mild, low-acid coffee that is easy on the stomach and highly comforting.",
        brew: "Perfect for a French Press or Cold Brew, which beautifully extracts its nutty oils and creamy texture without adding bitterness."
    },
    {
        name: "Kenya AA",
        origin: "kenya",
        species: "arabica",
        caffeine: "regular",
        roast: 2, // Light-Medium
        acidity: 3, // High
        body: 3, // Heavy
        primaryTaste: ["wine", "fruity"],
        aroma: ["grapefruit", "blackberry"],
        shortDesc: "Heavy body paired with bright grapefruit acidity for an intense, premium flavor.",
        flavorFull: "A bold, intense, and incredibly juicy cup. It explodes with a sharp, bright grapefruit acidity and deep, wine-like flavors of ripe blackberries, supported by a heavy, syrupy body.",
        aromaFull: "Intensely fruity and sharp, featuring dominant notes of ruby red grapefruit and dark berry jam.",
        about: "'AA' is a grading system in Kenya denoting the largest, most premium beans. Grown on the slopes of Mount Kenya, these beans are famous for their unmatched, vibrant acidity and complex, savory-sweet berry profiles.",
        brew: "A V60 or Chemex is highly recommended to clearly separate its complex berry flavors and showcase its sparkling, juicy acidity."
    },
    {
        name: "Kenya Peaberry",
        origin: "kenya",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 3, // High
        body: 3, // Heavy
        primaryTaste: ["intense", "fruity"],
        aroma: ["blackcurrant", "tangerine"],
        shortDesc: "A mutation with one round bean per cherry, resulting in highly concentrated flavors.",
        flavorFull: "A highly concentrated burst of flavor. It delivers an intense, vibrant tangerine acidity packed with dense blackcurrant sweetness and a notably thick mouthfeel.",
        aromaFull: "A concentrated, sharp aroma of blackcurrant and sweet tangerine peel.",
        about: "Normally, a coffee cherry contains two flat beans. A peaberry is a natural mutation where only one round bean develops, absorbing all the nutrients. This results in a much more intense and concentrated flavor profile than standard beans.",
        brew: "A clever dripper or AeroPress will help extract the dense, concentrated sugars and bright acids evenly."
    },
    {
        name: "Tanzania Kilimanjaro",
        origin: "tanzania",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 3, // High
        body: 1, // Light
        primaryTaste: ["wine", "citrus"],
        aroma: ["lemon", "berry"],
        shortDesc: "Called the 'Gentleman of Africa', softer than Kenya but with wine-like crisp acidity.",
        flavorFull: "Often called the 'Gentleman of Africa', it offers a softer, more refined profile than Kenyan beans. Features a crisp, wine-like acidity with refreshing notes of lemon and sweet berries.",
        aromaFull: "Bright and elegant, with refreshing scents of lemon zest and subtle red berries.",
        about: "Grown on the volcanic slopes of Mount Kilimanjaro. The nutrient-rich soil and ideal climate produce a coffee that boasts excellent clarity, bright acidity, and a very clean, sophisticated finish.",
        brew: "A standard pour-over is ideal to capture its elegant, tea-like clarity and crisp lemon acidity."
    },
    {
        name: "Rwanda Inzovu",
        origin: "rwanda",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        primaryTaste: ["fruity", "sweet"],
        aroma: ["cherry", "black-tea", "syrup"],
        shortDesc: "Clean like drinking black tea, delicately laced with sweet red fruit aromas.",
        flavorFull: "An incredibly clean and delicate cup, reminiscent of a high-quality black tea. It is delicately laced with sweet red cherry notes and a lingering, syrup-like sweetness.",
        aromaFull: "Elegant and floral, with clear aromas of black tea leaves and sweet cherry syrup.",
        about: "Rwanda is known as the 'Land of a Thousand Hills', providing excellent high-altitude conditions for coffee. 'Inzovu' (meaning elephant) beans represent some of the highest quality lots, characterized by their exceptional cleanliness and tea-like elegance.",
        brew: "Treat it like a delicate tea: use a Chemex with water around 90°C to highlight its clean, crisp, and floral qualities."
    },
    {
        name: "Burundi Kayanza",
        origin: "burundi",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 3, // High
        body: 3, // Heavy
        primaryTaste: ["berry", "chocolate"],
        aroma: ["redcurrant", "dark-choc"],
        shortDesc: "Complex profile starting with crisp berry acidity and ending with bittersweet dark chocolate.",
        flavorFull: "A complex and engaging profile that takes you on a journey. It starts with a crisp, vibrant redcurrant acidity and slowly transitions into a rich, bittersweet dark chocolate finish.",
        aromaFull: "A vibrant mix of tart red berries and deep, dark chocolate.",
        about: "Kayanza is a highly respected coffee-growing province in northern Burundi. The high altitude and traditional washed processing methods yield a coffee with sparkling clarity, bright fruitiness, and a deeply satisfying finish.",
        brew: "A V60 pour-over will perfectly capture the dynamic shift from bright berry acidity to the smooth chocolate finish."
    },
    {
        name: "Uganda Bugisu",
        origin: "uganda",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["earthy", "fruity"],
        aroma: ["prune", "chocolate", "wine"],
        shortDesc: "Unique for African beans with earthy hints and deep prune and chocolate sweetness.",
        flavorFull: "A very unique and robust African coffee. It features a heavy body with distinctive earthy undertones, complemented by a deep, dark sweetness of dried prunes and red wine.",
        aromaFull: "Deep and rustic, with scents of dark fruit, aged wine, and a hint of forest earth.",
        about: "Grown on the slopes of Mount Elgon in eastern Uganda. Unlike the bright, floral coffees of East Africa, Bugisu offers a heavier, earthier, and more rugged profile that is highly prized for espresso blends.",
        brew: "An excellent choice for espresso or a Moka pot to emphasize its heavy body and rich, dark fruit sweetness."
    },
    {
        name: "Yemen Mocha Mattari",
        origin: "yemen",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["chocolate", "earthy"],
        aroma: ["dark-choc", "wine", "earth"],
        shortDesc: "One of the world's top 3 premium coffees, fantastic wild earth, rich chocolate, and wine notes.",
        flavorFull: "A legendary and wildly complex cup. It bursts with rustic, earthy spice, rich dark chocolate, and a deeply intoxicating wine-like acidity that coats the palate.",
        aromaFull: "Wild, exotic, and heavy, featuring intoxicating scents of aged red wine, dark cocoa, and dry earth.",
        about: "One of the oldest and most famous coffees in the world, historically shipped from the port of Mocha. Grown on arid, high-altitude terraces and dry-processed naturally, it develops a highly unique, untamed, and deeply chocolatey flavor profile.",
        brew: "A traditional Middle Eastern ibrik (cezve) or a French Press will capture its wild, unfiltered essence and heavy texture."
    },
    {
        name: "Indonesia Mandheling",
        origin: "indonesia",
        species: "arabica",
        caffeine: "regular",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["earthy", "spicy"],
        aroma: ["cedar", "dark-choc", "herb"],
        shortDesc: "Almost no acidity, filling the mouth with heavy, bittersweet earth and herbal, masculine notes.",
        flavorFull: "A bold and heavy cup with a distinctive low-acidity profile. It coats the mouth with bittersweet dark chocolate and deep, rustic earthy notes, finished with a hint of dry herbs.",
        aromaFull: "Intense and rustic, featuring a strong woody fragrance of cedar mixed with dark cocoa and herbal spices.",
        about: "Grown on the island of Sumatra, Mandheling is processed using the traditional 'Giling Basah' (wet-hulled) method. This unique process gives the beans their signature blue-green color and a rugged, earthy complexity that is highly prized for its power and depth.",
        brew: "Perfect for a French Press or a deep-roasted espresso to fully appreciate its heavy texture and spicy, chocolatey body."
    },
    {
        name: "Indonesia Toraja",
        origin: "indonesia",
        species: "arabica",
        caffeine: "regular",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["herbal", "chocolate"],
        aroma: ["clove", "dark-choc"],
        shortDesc: "Cleaner and more refined than Mandheling, with unique spice and chocolate notes.",
        flavorFull: "A refined and smooth Indonesian cup. It offers a cleaner profile than Mandheling, featuring deep dark chocolate sweetness accented by unique spice notes like clove.",
        aromaFull: "Warm and inviting, with distinct notes of spicy clove and rich, dark cocoa.",
        about: "Toraja coffee is grown in the mountainous region of Sulawesi. Known for its elegant balance, it retains the characteristic Indonesian body but with a much cleaner, more structured finish, making it a favorite for those who enjoy a smoother earthy cup.",
        brew: "An AeroPress or a Moka pot works beautifully to highlight its chocolatey sweetness and spicy complexity."
    },
    {
        name: "Indonesia Gayo Mountain",
        origin: "indonesia",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["spicy", "sweet"],
        aroma: ["cinnamon", "brown-sugar"],
        shortDesc: "Organic coffee from Sumatra, blends deep brown sugar sweetness with cinnamon aromas.",
        flavorFull: "A deeply comforting and sweet profile. It blends heavy, syrupy brown sugar sweetness with warm, lingering spice notes reminiscent of cinnamon and forest floor.",
        aromaFull: "Sweet and spicy, featuring the comforting scent of brown sugar and warm cinnamon sticks.",
        about: "Grown in the Gayo Highlands of Aceh, Sumatra. Most of this coffee is shade-grown and organic. The unique microclimate of the highlands results in a bean that is exceptionally sweet and heavy-bodied, with a cleaner finish than standard Sumatran coffees.",
        brew: "Try it in a Clever Dripper to emphasize its syrupy sweetness and round, spicy body."
    },
    {
        name: "Papua New Guinea Sigri",
        origin: "png",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        primaryTaste: ["sweet", "fruity"],
        aroma: ["apple", "honey", "herb"],
        shortDesc: "Grown from Jamaica Blue Mountain seedlings; superbly balanced with subtle herbal notes.",
        flavorFull: "A beautifully clean and balanced cup. It features soft fruit sweetness like red apple, balanced by a delicate floral honey and a clean, herbal finish.",
        aromaFull: "Elegant and sweet, with clear scents of honeyed apple and a touch of fresh garden herbs.",
        about: "The Sigri estate was established using seeds brought from the famous Jamaica Blue Mountain trees. This lineage, combined with the ideal climate of PNG, produces a cup that is wonderfully balanced, clear, and more complex than most other Asian coffees.",
        brew: "A standard pour-over or Chemex is ideal to appreciate its transparency and refined fruit-and-honey balance."
    },
    {
        name: "India Monsooned Malabar",
        origin: "india",
        species: "arabica",
        caffeine: "regular",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["earthy", "spicy"],
        aroma: ["earth", "roasted-nut", "musk"],
        shortDesc: "Exposed to monsoon winds, eliminating acidity and creating a savory, uniquely aged aroma.",
        flavorFull: "An extraordinarily unique and savory cup. It is completely devoid of acidity, offering a heavy, syrupy texture with complex notes of toasted nuts, spice, and a uniquely 'aged' earthy character.",
        aromaFull: "Pungent and savory, with unmistakable scents of sun-baked earth, roasted nuts, and a hint of musk.",
        about: "This coffee is aged by exposing the harvested beans to moist monsoon winds for months. This process mimics the conditions of historical sea voyages to Europe, causing the beans to swell, turn straw-yellow, and lose their acidity, resulting in a one-of-a-kind flavor profile.",
        brew: "A French Press or an espresso shot will maximize its heavy, syrupy texture and celebrate its unique, savory aromas."
    },
    {
        name: "Hawaii Kona",
        origin: "usa (hawaii)",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 2, // Medium
        primaryTaste: ["sweet", "nutty"],
        aroma: ["butter", "macadamia", "caramel"],
        shortDesc: "World's top 3 coffee; lacks bitterness, featuring a buttery texture and macadamia nuttiness.",
        flavorFull: "A luxurious and incredibly smooth experience. It boasts a rich, buttery mouthfeel with sweet layers of macadamia nuts and warm caramel, with absolutely no harsh bitterness.",
        aromaFull: "Indulgent and sweet, like freshly baked caramel treats and toasted macadamia nuts.",
        about: "Kona coffee is grown only on the slopes of the Mauna Loa and Hualalai volcanoes on the Big Island. The unique 'Kona weather'—sunny mornings and rainy afternoons—combined with fertile volcanic soil, creates one of the rarest and most expensive coffees in the world.",
        brew: "Best as a meticulous pour-over or a high-end drip coffee to preserve its delicate buttery texture and clean, nutty sweetness."
    },
    {
        name: "Jamaica Blue Mountain",
        origin: "jamaica",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 1, // Light
        primaryTaste: ["balanced", "sweet"],
        aroma: ["hazelnut", "cocoa", "mild"],
        shortDesc: "Famous British Royal coffee; a masterpiece of perfectly balanced acidity, sweetness, and bitterness.",
        flavorFull: "A masterpiece of balance and elegance. It offers a flawless harmony of soft acidity, gentle sweetness, and a clean, silky texture that finishes without a trace of bitterness.",
        aromaFull: "Subtle and sophisticated, with inviting notes of toasted hazelnut and soft cocoa.",
        about: "Grown in the misty Blue Mountains of Jamaica. The high altitude and dense fog allow the cherries to mature very slowly, creating a bean with extraordinary clarity. It is famously packed in wooden barrels and was long prized as the personal favorite of the British Royal family.",
        brew: "A Chemex or a high-quality glass dripper is essential to showcase its legendary balance and incredible clarity."
    },
    {
        name: "Mexico Chiapas",
        origin: "mexico",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 1, // Light
        primaryTaste: ["nutty", "chocolate"],
        aroma: ["roasted-almond", "cocoa"],
        shortDesc: "Often organic; light and crisp body with prominent nutty characteristics.",
        flavorFull: "A light and refreshing cup with a very crisp body. It features prominent notes of toasted almonds and sweet cocoa, making it extremely easy to drink.",
        aromaFull: "Pleasantly nutty, with clear scents of roasted almonds and a touch of milk chocolate.",
        about: "The Chiapas region in southern Mexico shares a border with Guatemala, benefiting from a similar volcanic terrain. It is a major producer of high-quality organic coffee, known for its consistent, mild, and nutty character.",
        brew: "Ideal as a morning drip coffee or a clean pour-over for a light, refreshing start to the day."
    },
    {
        name: "Mexico Veracruz",
        origin: "mexico",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 1, // Light
        primaryTaste: ["sweet", "citrus"],
        aroma: ["orange", "caramel"],
        shortDesc: "Grown at high altitudes, light body showcasing bright orange citrus and sweetness.",
        flavorFull: "A bright and cheerful cup with a light body. It highlights a refreshing citrus acidity like sweet orange, melting into a warm caramel sweetness.",
        aromaFull: "Inviting scents of fresh orange peel and sweet melted caramel.",
        about: "Grown at high altitudes in the Veracruz region, the cooler temperatures allow the beans to develop a brighter, more complex citrus profile and a wonderfully clean finish.",
        brew: "A fantastic choice for a morning pour-over to wake up the palate with its bright, sweet citrus notes."
    },
    {
        name: "Peru Chanchamayo",
        origin: "peru",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 2, // Medium
        primaryTaste: ["mild", "nutty"],
        aroma: ["chocolate", "walnut"],
        shortDesc: "Low acidity and mild profile; an easy-drinking, organic daily coffee.",
        flavorFull: "Exceptionally mild and easy on the stomach. It features a very low acidity profile, highlighting comforting notes of smooth chocolate and roasted walnuts.",
        aromaFull: "Soft, earthy aromas mixed with warm chocolate and roasted walnut shells.",
        about: "Chanchamayo is one of Peru's premium coffee-growing regions, known for high-quality organic farming. The result is a beautifully balanced, approachable bean that makes a perfect, unpretentious daily drinker.",
        brew: "Brews perfectly in a standard drip machine or French Press for a comforting, everyday cup."
    },
    {
        name: "Peru Cajamarca",
        origin: "peru",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 1, // Light
        primaryTaste: ["sweet", "fruity"],
        aroma: ["apple", "vanilla"],
        shortDesc: "Sweet vanilla aroma and subtle apple acidity; excellent for clean drip coffee.",
        flavorFull: "A remarkably clean and delicate cup. It features a subtle, crisp acidity reminiscent of red apples, enveloped in a smooth, sweet vanilla finish.",
        aromaFull: "Sweet and fragrant, heavily featuring soft vanilla bean and fresh apple.",
        about: "Located in the northern Andes of Peru, Cajamarca produces coffees with outstanding clarity and sweetness. The pristine environment contributes to its clean, almost tea-like delicate fruitiness.",
        brew: "A Chemex or glass pour-over will perfectly highlight its clean, sweet, and delicate nuances."
    },
    {
        name: "Bolivia Caranavi",
        origin: "bolivia",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        primaryTaste: ["fruity", "chocolate"],
        aroma: ["apricot", "milk-choc"],
        shortDesc: "Combines South American nuttiness with delicate apricot-like sweet fruitiness.",
        flavorFull: "A beautifully complex South American cup. It seamlessly combines the classic, comforting sweetness of milk chocolate with a delicate, juicy fruitiness resembling ripe apricots.",
        aromaFull: "Sweet and inviting, featuring clear notes of stone fruit and creamy chocolate.",
        about: "Caranavi is the heart of Bolivia's coffee production, located where the Andes meet the Amazon. The unique high-altitude, tropical climate produces a wonderfully balanced bean that bridges the gap between nutty and fruity profiles.",
        brew: "Versatile and balanced, it shines equally well as a rich espresso or a vibrant, sweet pour-over."
    },
    {
        name: "Cuba Crystal Mountain",
        origin: "cuba",
        species: "arabica",
        caffeine: "regular",
        roast: 3, // Medium
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["smoky", "nutty"],
        aroma: ["cigar", "cacao"],
        shortDesc: "Hemingway's favorite; smooth acidity with unique bittersweet cacao and cigar notes.",
        flavorFull: "A heavy, masculine, and sophisticated profile. Known for its smooth, low acidity, it delivers deep bittersweet notes of raw cacao and a highly unique, smoky finish reminiscent of fine cigars.",
        aromaFull: "Deep and earthy, with distinctive aromas of toasted nuts, rich cacao, and sweet tobacco smoke.",
        about: "Famously known as Ernest Hemingway's favorite coffee. Grown in the Escambray Mountains, the quartz-rich soils (hence 'Crystal') yield a clean yet remarkably heavy-bodied coffee with a uniquely Caribbean smoky character.",
        brew: "A classic Moka pot or espresso machine perfectly extracts its heavy, syrupy body and bittersweet depth."
    },
    {
        name: "Vietnam Dalat Robusta",
        origin: "vietnam",
        species: "robusta",
        caffeine: "high",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["bitter", "dark"],
        aroma: ["cacao-nibs", "smoke", "earth"],
        shortDesc: "Abundant crema and strong bitterness, perfect for Vietnamese coffee with condensed milk.",
        flavorFull: "A powerful and unapologetic cup. It delivers intense bitterness, heavy body, and dark notes of cacao nibs and smoke, creating a thick, syrup-like experience.",
        aromaFull: "Strong and pungent, with scents of dark roasted barley, smoke, and earthy cacao.",
        about: "Vietnam is the world's leader in Robusta production. The Da Lat region, with its higher altitude, produces Robusta of exceptional strength and density, perfect for the traditional Vietnamese Phin filter brewing.",
        brew: "Best brewed with a Vietnamese Phin filter and served with sweetened condensed milk (Cà Phê Sữa) to balance its intense bitterness."
    },
    {
        name: "Vietnam Dak Lak Robusta",
        origin: "vietnam",
        species: "robusta",
        caffeine: "high",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["smoky", "woody"],
        aroma: ["roasted-barley", "wood"],
        shortDesc: "Savory like strong roasted barley tea with woody notes; very high caffeine content.",
        flavorFull: "An intensely bold and savory experience. It offers a heavy, thick texture with savory notes similar to strong roasted barley tea, accompanied by deep woody and smoky flavors.",
        aromaFull: "Strong and rustic, heavily featuring scents of dark roasted grain, dry wood, and smoke.",
        about: "Dak Lak is a central highland province in Vietnam famous for its immense Robusta output. These beans are prized for their extremely high caffeine content and bold, unapologetic savory flavors.",
        brew: "Ideal for traditional Vietnamese iced coffee (Cà Phê Sữa Đá) where its intense strength cuts beautifully through sweet condensed milk."
    },
    {
        name: "India Cherry",
        origin: "india",
        species: "robusta",
        caffeine: "high",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["spicy", "nutty"],
        aroma: ["roasted-grain", "pepper"],
        shortDesc: "An intense Robusta hitting you with rough spices and savory roasted grains.",
        flavorFull: "A punchy, robust cup that hits the palate with heavy, savory notes of roasted grains and a rough, intriguing spicy kick similar to black pepper.",
        aromaFull: "Intensely savory and slightly pungent, with aromas of toasted grains, earth, and dry spices.",
        about: "Indian 'Cherry' refers to dry-processed (natural) Robusta. This processing method allows the beans to absorb flavors from the dried fruit skin, resulting in an incredibly intense, full-bodied coffee with a distinctively spicy edge.",
        brew: "Often used as a secret weapon in Italian espresso blends to dramatically boost crema, body, and caffeine."
    },
    {
        name: "India Robusta Parchment",
        origin: "india",
        species: "robusta",
        caffeine: "high",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["bitter", "chocolate"],
        aroma: ["dark-choc", "hazelnut"],
        shortDesc: "A premium washed Robusta features a much cleaner taste than standard Robustas.",
        flavorFull: "A remarkably refined Robusta. It maintains a heavy, satisfying body and pleasant bitterness, but offers a much cleaner profile with distinct notes of dark chocolate and toasted hazelnut.",
        aromaFull: "Clean yet heavy, with inviting scents of dark cocoa powder and roasted nuts.",
        about: "'Parchment' indicates that this Robusta has been fully washed. This premium processing method removes the harsh, rubbery notes often associated with Robusta, revealing a cleaner, chocolatey bean of exceptional quality.",
        brew: "A fantastic single-origin espresso for those who love heavy body and thick crema without intense acidity."
    },
    {
        name: "Uganda Robusta",
        origin: "uganda",
        species: "robusta",
        caffeine: "high",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["dark", "smoky"],
        aroma: ["earth", "tobacco", "cacao"],
        shortDesc: "From the birthplace of Robusta, appealing wild earth and smoky tobacco notes.",
        flavorFull: "A deeply untamed and powerful cup. It coats the mouth with a heavy, syrupy texture, delivering intense, bittersweet notes of raw cacao, earthy forest floor, and smoky tobacco.",
        aromaFull: "Wild and rustic, featuring heavy aromas of damp earth, sweet tobacco leaf, and dark cocoa.",
        about: "Uganda is considered the botanical birthplace of Coffea canephora (Robusta), where it still grows wild in the forests. It is prized worldwide for its deep, heavy-bodied characteristics and authentic, wild flavor profile.",
        brew: "Excellent for dark roasted espresso blends, adding unparalleled body, crema, and a wild, earthy depth."
    },
    {
        name: "Brazil Conilon",
        origin: "brazil",
        species: "robusta",
        caffeine: "high",
        roast: 4, // Medium-Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["nutty", "bitter"],
        aroma: ["roasted-peanut", "earth"],
        shortDesc: "Brazilian Robusta variety; strong peanut-like nuttiness and bitterness.",
        flavorFull: "A straightforward, heavy-hitting cup. It delivers a strong, upfront bitterness balanced by an intense, savory nuttiness that strongly resembles roasted peanuts.",
        aromaFull: "Savory and earthy, dominated by the scent of roasted peanuts and dry earth.",
        about: "Conilon is the specific variety of Robusta grown extensively in Brazil. Known for its hardiness and high yield, it produces a cup that is very low in acidity but packs a massive, nutty punch and high caffeine content.",
        brew: "Primarily used to add body and crema to commercial espresso blends, or brewed strong to cut through milk."
    },
    {
        name: "Philippines Kapeng Barako",
        origin: "philippines",
        species: "liberica",
        caffeine: "low",
        roast: 5, // Dark
        acidity: 1, // Low
        body: 3, // Heavy
        primaryTaste: ["woody", "intense"],
        aroma: ["jackfruit", "cedar", "anise"],
        shortDesc: "Rare species leaving a very intense impression with heavy wood and unique jackfruit flavors.",
        flavorFull: "An unforgettable, intense experience. It features a heavy, pungent profile with distinct, savory woody notes and a highly unique, sweet-and-sour flavor reminiscent of ripe jackfruit and star anise.",
        aromaFull: "Incredibly aromatic and polarizing, offering strong scents of cedar wood, tropical jackfruit, and sharp herbal spices.",
        about: "Barako (meaning 'wild boar' or 'stud') belongs to the rare Liberica species, which makes up less than 2% of global coffee. It produces massive cherries and a uniquely pungent, strong, and masculine flavor profile deeply tied to Philippine coffee culture.",
        brew: "Traditionally brewed simply by boiling the coarse grounds in a pot of water, often sweetened heavily with muscovado sugar."
    },
    {
        name: "Malaysia Liberica",
        origin: "malaysia",
        species: "liberica",
        caffeine: "low",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["smoky", "sweet"],
        aroma: ["brown-sugar", "smoke"],
        shortDesc: "Fills the mouth with thick texture, smoke, and a deep sweetness that intensifies as you chew.",
        flavorFull: "A remarkably thick and almost chewy texture. It coats the palate with a deep, lingering brown sugar sweetness, beautifully contrasted by a heavy, enveloping smokiness.",
        aromaFull: "Sweet and heavy, heavily featuring the comforting aroma of dark brown sugar melting over wood smoke.",
        about: "Malaysia is one of the few countries that commercially cultivates Liberica. The beans are often processed uniquely (sometimes roasted with sugar or margarine locally), resulting in an incredibly dense, smoky, and uniquely sweet coffee experience.",
        brew: "Best prepared using a traditional sock filter (Kopi style) to capture its dense, heavy, and syrupy essence."
    },
    {
        name: "Vietnam Excelsa",
        origin: "vietnam",
        species: "liberica",
        caffeine: "regular",
        roast: 4, // Medium-Dark
        acidity: 2, // Medium
        body: 3, // Heavy
        primaryTaste: ["tart", "fruity"],
        aroma: ["jackfruit", "dark-choc"],
        shortDesc: "A Liberica variant adds an intense, unique tart (sour) fruitiness when roasted.",
        flavorFull: "A wild and complex cup. It surprises the palate with an intense, tart, almost sour fruitiness similar to jackfruit, which quickly gives way to a heavy, dark chocolate and roasted body.",
        aromaFull: "Pungent and deeply fruity, combining the exotic sweetness of jackfruit with bitter dark cocoa.",
        about: "Excelsa was once considered its own species but is now classified as a variant of Liberica. Grown largely in Southeast Asia, it is famous for adding a mysterious, tart, and intensely fruity dimension when added to coffee blends.",
        brew: "Rarely drunk purely on its own; it is best used to add a wild, fruity complexity to a dark-roasted house blend."
    },
    {
        name: "Colombia Sugarcane Decaf",
        origin: "colombia",
        species: "arabica",
        caffeine: "none",
        roast: 3, // Medium
        acidity: 2, // Medium
        body: 2, // Medium
        primaryTaste: ["sweet", "nutty"],
        aroma: ["brown-sugar", "almond"],
        shortDesc: "Caffeine removed using sugarcane extract, perfectly preserving natural sweetness and nuttiness.",
        flavorFull: "A decaf that doesn't taste like one. It maintains the classic Colombian profile with a rich brown sugar sweetness and a pleasant, clean nutty finish.",
        aromaFull: "Warm and inviting, with scents of caramelized brown sugar and toasted almonds.",
        about: "The Sugarcane process is a natural decaffeination method that uses ethyl acetate derived from fermented sugarcane. Unlike harsh chemical methods, this process preserves the coffee's original flavor cell structure and even enhances its natural sweetness.",
        brew: "Works beautifully in any method, from pour-over to espresso, providing a full coffee experience without the caffeine kick."
    }
];
