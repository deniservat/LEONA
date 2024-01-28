
const products = [
  { id: 1, name: "Radiant Glow Kit", price: 24.99, category: "kits", amount: 0, description: "Illuminate your skin with this all-natural kit for a radiant and healthy complexion. Perfect for everyday use.", color: "sand" },
  { id: 2, name: "Revitalizing Serum", price: 16.99, category: "skin", amount: 0, description: "Nourish and rejuvenate your skin with our revitalizing serum. Experience a natural glow and hydration every day.", color: "blue" },
  { id: 3, name: "Enchanting Eyes Palette", price: 19.99, category: "eyes", amount: 0, description: "Create mesmerizing eye looks with our enchanting eyes palette. Natural shades for stunning and long-lasting beauty.", color: "black" },
  { id: 4, name: "Luscious Lips Balm", price: 8.69, category: "lips", amount: 0, description: "Achieve soft and luscious lips with our natural lip balm. Hydrate and enhance your smile effortlessly.", color: "green" },
  { id: 5, name: "Hydrating Skin Elixir", price: 22.99, category: "skin", amount: 0, description: "Experience the ultimate hydration with our skin elixir. Lock in moisture for a supple and healthy complexion.", color: "red" },
  { id: 6, name: "Natural Beauty Essentials Kit", price: 29.99, category: "kits", amount: 0, description: "Discover the essentials for a natural beauty routine. Achieve a flawless look with our curated beauty kit.", color: "purple" },
  { id: 7, name: "Vibrant Eyes Liner", price: 12.99, category: "eyes", amount: 0, description: "Define and highlight your eyes with our vibrant eyes liner. Achieve a bold and natural look effortlessly.", color: "sand" },
  { id: 8, name: "Organic Lip Tint", price: 5.99, category: "lips", amount: 0, description: "Add a touch of color with our organic lip tint. Nourish your lips while enhancing your natural beauty.", color: "blue" },
  { id: 9, name: "Glowing Skin Mask", price: 15.99, category: "skin", amount: 0, description: "Treat your skin to a spa day with our glowing skin mask. Rejuvenate and reveal a radiant complexion.", color: "grey" },
  { id: 10, name: "Botanical Bliss Moisturizer", price: 18.99, category: "skin", amount: 0, description: "Indulge your skin in the botanical bliss of our moisturizer. Achieve a soft and supple complexion naturally.", color: "green" },
  { id: 11, name: "Nature's Kiss Lip Scrub", price: 9.99, category: "lips", amount: 0, description: "Pamper your lips with nature's kiss lip scrub. Exfoliate and moisturize for irresistibly smooth lips.", color: "purple" },
  { id: 12, name: "Soothing Lavender Mist", price: 14.49, category: "skin", amount: 0, description: "Refresh and soothe your skin with our lavender mist. A calming blend for a peaceful and rejuvenating experience.", color: "purple" },
  { id: 13, name: "Pure Radiance Highlighter", price: 17.99, category: "kits", amount: 0, description: "Illuminate your features with our pure radiance highlighter. Achieve a natural and dewy glow for a luminous look.", color: "sand" },
  { id: 14, name: "Eco-Friendly Bamboo Brush Set", price: 32.99, category: "eyes", amount: 0, description: "Upgrade your makeup routine with our eco-friendly bamboo brush set. Sustainable beauty at its best.", color: "sand" },
  { id: 15, name: "Balancing Tea Tree Toner", price: 20.49, category: "skin", amount: 0, description: "Balance and tone your skin with the soothing properties of tea tree. Refresh your complexion naturally.", color: "green" },
  { id: 16, name: "Natural Radiance BB Cream", price: 26.99, category: "kits", amount: 0, description: "Achieve a flawless complexion with our natural radiance BB cream. Enhance your beauty with a lightweight and natural finish.", color: "sand" },
  { id: 17, name: "Jasmine-infused Hair Oil", price: 23.49, category: "lips", amount: 0, description: "Nourish your hair with the exotic aroma of jasmine-infused hair oil. Achieve silky-smooth locks with a touch of luxury.", color: "yellow" },
  { id: 18, name: "Green Tea & Aloe Vera Mask", price: 16.99, category: "skin", amount: 0, description: "Revitalize your skin with the power of green tea and aloe vera. Experience a spa-like treatment at home.", color: "green" },
  { id: 19, name: "Natural Brow Styler", price: 10.99, category: "eyes", amount: 0, description: "Define and shape your brows naturally with our brow styler. Achieve a polished and effortless look.", color: "sand" },
  { id: 20, name: "Refreshing Citrus Body Scrub", price: 12.99, category: "kits", amount: 0, description: "Invigorate your senses and exfoliate your skin with our refreshing citrus body scrub. A burst of energy for your skin.", color: "orange" },
  { id: 21, name: "Soothing Chamomile Cleanser", price: 14.99, category: "skin", amount: 0, description: "Gently cleanse your skin with the soothing power of chamomile. Remove impurities for a fresh and calm complexion.", color: "yellow" },
  { id: 22, name: "Tropical Paradise Lip Gloss", price: 7.49, category: "lips", amount: 0, description: "Drench your lips in the tropical paradise of our lip gloss. Add shine and a hint of exotic flavor to your look.", color: "red" },
  { id: 23, name: "Radiant Rosewater Mist", price: 18.99, category: "kits", amount: 0, description: "Elevate your skincare routine with our radiant rosewater mist. Hydrate and revitalize your skin with a floral touch.", color: "purple" },
  { id: 24, name: "Natural Hues Eyeshadow Palette", price: 25.99, category: "eyes", amount: 0, description: "Explore a spectrum of natural hues with our eyeshadow palette. Create versatile and stunning eye looks effortlessly.", color: "sand" },
  { id: 25, name: "Cocoa & Shea Butter Body Lotion", price: 13.49, category: "kits", amount: 0, description: "Indulge your skin in the richness of cocoa and shea butter. Moisturize and nourish for soft and smooth skin.", color: "sand" },
  { id: 26, name: "Minty Fresh Breath Mist", price: 9.99, category: "kits", amount: 0, description: "Revitalize your breath with our minty fresh breath mist. A natural and refreshing way to maintain oral hygiene.", color: "green" },
  { id: 27, name: "Silk Elegance Hair Serum", price: 28.49, category: "eyes", amount: 0, description: "Transform your hair with the silk elegance of our hair serum. Achieve a smooth and frizz-free finish.", color: "sand" },
  { id: 28, name: "Sun-Kissed Bronzing Powder", price: 19.99, category: "lips", amount: 0, description: "Get a sun-kissed glow with our bronzing powder. Add warmth and radiance to your complexion naturally.", color: "sand" },
  { id: 29, name: "Jasmine & Green Tea Shampoo", price: 15.99, category: "skin", amount: 0, description: "Cleanse and nourish your hair with the soothing blend of jasmine and green tea. A spa-like experience for your locks.", color: "green" },
  { id: 30, name: "Heavenly Vanilla Lip Scrub", price: 11.49, category: "lips", amount: 0, description: "Treat your lips to the heavenly aroma of vanilla with our lip scrub. Gently exfoliate for soft and kissable lips.", color: "sand" },
  { id: 31, name: "Acai Berry Anti-Aging Mask", price: 24.99, category: "skin", amount: 0, description: "Combat signs of aging with our acai berry anti-aging mask. Rejuvenate and restore your skin's youthful glow.", color: "purple" },
  { id: 32, name: "Sustainable Bamboo Bath Brush", price: 16.49, category: "kits", amount: 0, description: "Elevate your bath time with our sustainable bamboo bath brush. Gentle exfoliation for smooth and radiant skin.", color: "green" },
  { id: 33, name: "Coconut Bliss Body Butter", price: 21.99, category: "eyes", amount: 0, description: "Indulge in the coconut bliss of our body butter. Hydrate and nourish your skin for a luxurious and tropical experience.", color: "white" },
  { id: 34, name: "Petals & Peony Perfume Oil", price: 30.99, category: "kits", amount: 0, description: "Immerse yourself in the delicate scent of petals and peony with our perfume oil. A natural and captivating fragrance.", color: "purple" },
  { id: 35, name: "Eco-Friendly Cotton Pads", price: 8.99, category: "kits", amount: 0, description: "Go green with our eco-friendly cotton pads. Perfect for applying and removing your favorite natural cosmetics.", color: "white" },
  { id: 36, name: "Mango & Papaya Body Scrub", price: 12.99, category: "eyes", amount: 0, description: "Reveal silky-smooth skin with our mango and papaya body scrub. Exfoliate and indulge in a tropical spa experience.", color: "orange" },
  { id: 37, name: "Forest Breeze Deodorant", price: 9.49, category: "skin", amount: 0, description: "Stay fresh with our forest breeze deodorant. A natural and effective way to keep odors at bay throughout the day.", color: "green" },
  { id: 38, name: "Bamboo Charcoal Detox Mask", price: 17.99, category: "skin", amount: 0, description: "Purify and detoxify your skin with our bamboo charcoal mask. Experience a deep cleanse for a radiant complexion.", color: "black" },
  { id: 39, name: "Lemon Zest Cuticle Oil", price: 6.99, category: "eyes", amount: 0, description: "Nourish and hydrate your cuticles with the refreshing scent of lemon zest. Achieve healthy and well-groomed nails naturally.", color: "yellow" },
  { id: 40, name: "Aloe Vera Cooling Gel", price: 13.99, category: "skin", amount: 0, description: "Soothe and cool your skin with our aloe vera gel. Perfect for calming irritation and maintaining a hydrated complexion.", color: "green" }
];

  
  // creo local storage para alojar los products
  
  // función para guardar
  const saveProdLS = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };
  
  // función para cargar del localStorage
  const loadProdLS = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
    // si no existe que me tire un array vacío
  };
  
  // ni bien cargue la página, que ejecute la localStorage de products
  
  saveProdLS(products);
  
  // ahora aparecen en consola, en almacenamiento, pero todavía no están renderizados




