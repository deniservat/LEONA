
const products = [
  { 
    id: 1, 
    name: "Radiant Glow Kit", 
    price: 24.99, 
    category: "kits", 
    amount: 0, 
    description: "Illuminate your skin with this all-natural kit for a radiant and healthy complexion. Perfect for everyday use.", 
    color: ["sand"],
    ingredients: ["Argan Oil", "Shea Butter", "Rose Extract", "Vitamin E", "Jojoba Oil"],
    benefits: "Enhance your natural beauty with a luminous glow. Apply daily for a radiant complexion.",
    discount: 0
  },
  { 
    id: 2, 
    name: "Revitalizing Serum", 
    price: 16.99, 
    category: "skin", 
    amount: 0, 
    description: "Nourish and rejuvenate your skin with our revitalizing serum. Experience a natural glow and hydration every day.", 
    color: ["blue"],
    ingredients: ["Hyaluronic Acid", "Vitamin C", "Green Tea Extract", "Aloe Vera", "Chamomile"],
    benefits: "Achieve a hydrated and radiant look. Apply a small amount in the morning and evening for best results.",
    discount: 20
  },
  { 
    id: 3, 
    name: "Enchanting Eyes Palette", 
    price: 19.99, 
    category: "eyes", 
    amount: 0, 
    description: "Create mesmerizing eye looks with our enchanting eyes palette. Natural shades for stunning and long-lasting beauty.", 
    color: ["black"],
    ingredients: ["Mica", "Iron Oxides", "Talc", "Kaolin", "Jojoba Oil"],
    benefits: "Define and highlight your eyes. Mix and match shades for versatile and long-lasting eye looks.",
    discount: 10
  },
  { 
    id: 4, 
    name: "Luscious Lips Balm", 
    price: 8.69, 
    category: "lips", 
    amount: 0, 
    description: "Achieve soft and luscious lips with our natural lip balm. Hydrate and enhance your smile effortlessly.", 
    color: ["green"],
    ingredients: ["Coconut Oil", "Shea Butter", "Beeswax", "Almond Oil", "Vitamin E"],
    benefits: "Nourish and moisturize lips for a soft and kissable pout. Apply as needed throughout the day.",
    discount: 10
  },
  { 
    id: 5, 
    name: "Hydrating Skin Elixir", 
    price: 22.99, 
    category: "skin", 
    amount: 0, 
    description: "Experience the ultimate hydration with our skin elixir. Lock in moisture for a supple and healthy complexion.", 
    color: ["red"],
    ingredients: ["Hyaluronic Acid", "Rosehip Oil", "Vitamin C", "Aloe Vera", "Glycerin"],
    benefits: "Quench skin's thirst and achieve a radiant glow. Apply a few drops morning and night for best results.",
    discount: 20
  },
  { 
    id: 6, 
    name: "Natural Beauty Essentials Kit", 
    price: 29.99, 
    category: "kits", 
    amount: 0, 
    description: "Discover the essentials for a natural beauty routine. Achieve a flawless look with our curated beauty kit.", 
    color: ["purple"],
    ingredients: ["Jojoba Oil", "Shea Butter", "Green Tea Extract", "Argan Oil", "Vitamin E"],
    benefits: "Elevate your beauty routine with natural essentials. Perfect for a complete and radiant makeup look.",
    discount: 0
  },
  { 
    id: 7, 
    name: "Vibrant Eyes Liner", 
    price: 12.99, 
    category: "eyes", 
    amount: 0, 
    description: "Define and highlight your eyes with our vibrant eyes liner. Achieve a bold and natural look effortlessly.", 
    color: ["sand", "black"],
    ingredients: ["Jojoba Oil", "Shea Butter", "Beeswax", "Iron Oxides", "Carnauba Wax"],
    benefits: "Create precise lines for a bold eye look. Glide smoothly for a defined and long-lasting result."
  },
  { 
    id: 8, 
    name: "Organic Lip Tint", 
    price: 5.99, 
    category: "lips", 
    amount: 0, 
    description: "Add a touch of color with our organic lip tint. Nourish your lips while enhancing your natural beauty.", 
    color: ["blue", "pink"],
    ingredients: ["Cocoa Butter", "Beetroot Extract", "Jojoba Oil", "Coconut Oil", "Vitamin E"],
    benefits: "Achieve a hint of color and moisture. Glide on lips for a natural and effortless beauty boost."
  },
  { 
    id: 9, 
    name: "Glowing Skin Mask", 
    price: 15.99, 
    category: "skin", 
    amount: 0, 
    description: "Treat your skin to a spa day with our glowing skin mask. Rejuvenate and reveal a radiant complexion.", 
    color: ["grey"],
    ingredients: ["Kaolin Clay", "Turmeric", "Honey", "Aloe Vera", "Rosewater"],
    benefits: "Pamper your skin with a revitalizing mask. Apply, relax, and unveil a radiant and refreshed complexion."
  },
  { 
    id: 10, 
    name: "Botanical Bliss Moisturizer", 
    price: 18.99, 
    category: "skin", 
    amount: 0, 
    description: "Indulge your skin in the botanical bliss of our moisturizer. Achieve a soft and supple complexion naturally.", 
    color: ["green"],
    ingredients: ["Shea Butter", "Coconut Oil", "Hyaluronic Acid", "Chamomile Extract", "Vitamin E"],
    benefits: "Hydrate and nourish your skin with a botanical blend. Use daily for a naturally radiant and moisturized complexion."
  },
  { 
    id: 11, 
    name: "Nature's Kiss Lip Scrub", 
    price: 9.99, 
    category: "lips", 
    amount: 0, 
    description: "Pamper your lips with nature's kiss lip scrub. Exfoliate and moisturize for irresistibly smooth lips.", 
    color: ["purple"],
    ingredients: ["Brown Sugar", "Jojoba Oil", "Honey", "Almond Oil", "Vanilla Extract"],
    benefits: "Gently exfoliate for soft and smooth lips. Massage onto lips, then rinse for a kissably smooth finish."
  },
  { 
    id: 12, 
    name: "Soothing Lavender Mist", 
    price: 14.49, 
    category: "skin", 
    amount: 0, 
    description: "Refresh and soothe your skin with our lavender mist. A calming blend for a peaceful and rejuvenating experience.", 
    color: ["purple"],
    ingredients: ["Lavender Oil", "Aloe Vera", "Witch Hazel", "Chamomile Extract", "Glycerin"],
    benefits: "Spritz for a calming and refreshing experience. Use as a toner or whenever a burst of relaxation is needed."
  },
  { 
    id: 13, 
    name: "Pure Radiance Highlighter", 
    price: 17.99, 
    category: "kits", 
    amount: 0, 
    description: "Illuminate your features with our pure radiance highlighter. Achieve a natural and dewy glow for a luminous look.", 
    color: ["sand", "pink"],
    ingredients: ["Mica", "Coconut Oil", "Beeswax", "Shea Butter", "Rosehip Oil"],
    benefits: "Enhance your features with a radiant glow. Apply to cheekbones and brow bones for a luminous and natural look."
  },
  { 
    id: 14, 
    name: "Eco-Friendly Bamboo Brush Set", 
    price: 32.99, 
    category: "eyes", 
    amount: 0, 
    description: "Upgrade your makeup routine with our eco-friendly bamboo brush set. Sustainable beauty at its best.", 
    color: ["sand"],
    ingredients: ["Bamboo", "Synthetic Bristles", "Aluminum", "Recycled Plastic", "Cotton"],
    benefits: "Elevate your makeup application with eco-friendly brushes. Cruelty-free and perfect for a sustainable beauty routine."
  },
  { 
    id: 15, 
    name: "Balancing Tea Tree Toner", 
    price: 20.49, 
    category: "skin", 
    amount: 0, 
    description: "Balance and tone your skin with the soothing properties of tea tree. Refresh your complexion naturally.", 
    color: ["green"],
    ingredients: ["Tea Tree Oil", "Witch Hazel", "Aloe Vera", "Chamomile Extract", "Lavender Oil"],
    benefits: "Achieve a balanced and refreshed complexion. Apply with a cotton pad after cleansing for best results."
  },
  { 
    id: 16, 
    name: "Natural Radiance BB Cream", 
    price: 26.99, 
    category: "kits", 
    amount: 0, 
    description: "Achieve a flawless complexion with our natural radiance BB cream. Enhance your beauty with a lightweight and natural finish.", 
    color: ["sand", "pink"],
    ingredients: ["Jojoba Oil", "Shea Butter", "Mineral Pigments", "Aloe Vera", "Green Tea Extract"],
    benefits: "Perfect your skin with a lightweight and natural finish. Apply evenly for a radiant and flawless complexion."
  },
  { 
    id: 17, 
    name: "Jasmine-infused Hair Oil", 
    price: 23.49, 
    category: "lips", 
    amount: 0, 
    description: "Nourish your hair with the exotic aroma of jasmine-infused hair oil. Achieve silky-smooth locks with a touch of luxury.", 
    color: ["yellow", "white"],
    ingredients: ["Jojoba Oil", "Argan Oil", "Jasmine Extract", "Coconut Oil", "Vitamin E"],
    benefits: "Indulge your hair with a luxurious aroma. Apply to damp or dry hair for a silky and frizz-free finish."
  },
  { 
    id: 18, 
    name: "Green Tea & Aloe Vera Mask", 
    price: 16.99, 
    category: "skin", 
    amount: 0, 
    description: "Revitalize your skin with the power of green tea and aloe vera. Experience a spa-like treatment at home.", 
    color: ["green"],
    ingredients: ["Green Tea Extract", "Aloe Vera", "Kaolin Clay", "Honey", "Chamomile Extract"],
    benefits: "Treat your skin to a spa-like experience. Apply a thin layer, relax, and rinse for a revitalized complexion."
  },
  { 
    id: 19, 
    name: "Natural Brow Styler", 
    price: 10.99, 
    category: "eyes", 
    amount: 0, 
    description: "Define and shape your brows naturally with our brow styler. Achieve a polished and effortless look.", 
    color: ["sand", "brown"],
    ingredients: ["Castor Oil", "Beeswax", "Cocoa Butter", "Jojoba Oil", "Vitamin E"],
    benefits: "Shape and define your brows for a polished look. Glide on for easy application and a natural finish."
  },
  { 
    id: 20, 
    name: "Refreshing Citrus Body Scrub", 
    price: 12.99, 
    category: "kits", 
    amount: 0, 
    description: "Invigorate your senses and exfoliate your skin with our refreshing citrus body scrub. A burst of energy for your skin.", 
    color: ["orange"],
    ingredients: ["Sea Salt", "Citrus Essential Oils", "Coconut Oil", "Grapeseed Oil", "Vitamin E"],
    benefits: "Exfoliate and energize your skin. Massage onto damp skin in circular motions for a refreshing and invigorating experience."
  },
  { 
    id: 21, 
    name: "Soothing Chamomile Cleanser", 
    price: 14.99, 
    category: "skin", 
    amount: 0, 
    description: "Gently cleanse your skin with the soothing power of chamomile. Remove impurities for a fresh and calm complexion.", 
    color: ["yellow"],
    ingredients: ["Chamomile Extract", "Aloe Vera", "Jojoba Oil", "Glycerin", "Cucumber Extract"],
    benefits: "Gently cleanse and soothe your skin. Massage onto damp skin, rinse, and enjoy a fresh and calm complexion."
  },
  { 
    id: 22, 
    name: "Tropical Paradise Lip Gloss", 
    price: 7.49, 
    category: "lips", 
    amount: 0, 
    description: "Drench your lips in the tropical paradise of our lip gloss. Add shine and a hint of exotic flavor to your look.", 
    color: ["red", "orange"],
    ingredients: ["Coconut Oil", "Mango Extract", "Papaya Extract", "Beeswax", "Vitamin E"],
    benefits: "Add a glossy finish and tropical flavor to your lips. Swipe on for a hydrating and luscious touch of paradise."
  },
  { 
    id: 23, 
    name: "Radiant Rosewater Mist", 
    price: 18.99, 
    category: "kits", 
    amount: 0, 
    description: "Elevate your skincare routine with our radiant rosewater mist. Hydrate and revitalize your skin with a floral touch.", 
    color: ["purple", "pink"],
    ingredients: ["Rosewater", "Witch Hazel", "Aloe Vera", "Glycerin", "Lavender Oil"],
    benefits: "Refresh and soothe your skin with a burst of floral hydration. Spritz on face as needed throughout the day."
  },
  { 
    id: 24, 
    name: "Natural Hues Eyeshadow Palette", 
    price: 25.99, 
    category: "eyes", 
    amount: 0, 
    description: "Explore a spectrum of natural hues with our eyeshadow palette. Create versatile and stunning eye looks effortlessly.", 
    color: ["sand", "brown"],
    ingredients: ["Mica", "Iron Oxides", "Talc", "Kaolin", "Jojoba Oil"],
    benefits: "Create endless eye looks with versatile and natural shades. Blend and build for stunning and long-lasting results."
  },
  { 
    id: 25, 
    name: "Cocoa & Shea Butter Body Lotion", 
    price: 13.49, 
    category: "kits", 
    amount: 0, 
    description: "Indulge your skin in the richness of cocoa and shea butter. Moisturize and nourish for soft and smooth skin.", 
    color: ["sand", "brown"],
    ingredients: ["Cocoa Butter", "Shea Butter", "Coconut Oil", "Almond Oil", "Vitamin E"],
    benefits: "Hydrate and nourish your skin with a rich and luxurious blend. Smooth onto skin for soft and silky results."
  },
  { 
    id: 26, 
    name: "Minty Fresh Breath Mist", 
    price: 9.99, 
    category: "kits", 
    amount: 0, 
    description: "Revitalize your breath with our minty fresh breath mist. A natural and refreshing way to maintain oral hygiene.", 
    color: ["green"],
    ingredients: ["Peppermint Oil", "Spearmint Oil", "Xylitol", "Aloe Vera", "Tea Tree Oil"],
    benefits: "Freshen your breath naturally. Spray directly into the mouth for an instant burst of minty freshness."
  },
  { 
    id: 27, 
    name: "Silk Elegance Hair Serum", 
    price: 28.49, 
    category: "eyes", 
    amount: 0, 
    description: "Transform your hair with the silk elegance of our hair serum. Achieve a smooth and frizz-free finish.", 
    color: ["sand", "white"],
    ingredients: ["Silk Proteins", "Argan Oil", "Jojoba Oil", "Coconut Oil", "Vitamin E"],
    benefits: "Add shine and smoothness to your hair. Apply to damp or dry hair for a silky and frizz-free finish."
  },
  { 
    id: 28, 
    name: "Sun-Kissed Bronzing Powder", 
    price: 19.99, 
    category: "lips", 
    amount: 0, 
    description: "Get a sun-kissed glow with our bronzing powder. Add warmth and radiance to your complexion naturally.", 
    color: ["sand", "brown"],
    ingredients: ["Mica", "Iron Oxides", "Talc", "Kaolin", "Jojoba Oil"],
    benefits: "Achieve a natural sun-kissed glow. Apply to areas where the sun naturally hits for a radiant and bronzed look."
  },
  { 
    id: 29, 
    name: "Jasmine & Green Tea Shampoo", 
    price: 15.99, 
    category: "skin", 
    amount: 0, 
    description: "Cleanse and nourish your hair with the soothing blend of jasmine and green tea. A spa-like experience for your locks.", 
    color: ["green", "white"],
    ingredients: ["Jasmine Extract", "Green Tea Extract", "Aloe Vera", "Coconut Oil", "Vitamin E"],
    benefits: "Indulge your hair with a spa-like experience. Gently massage into wet hair and rinse for nourished and refreshed locks."
  },
  { 
    id: 30, 
    name: "Heavenly Vanilla Lip Scrub", 
    price: 11.49, 
    category: "lips", 
    amount: 0, 
    description: "Treat your lips to the heavenly aroma of vanilla with our lip scrub. Gently exfoliate for soft and kissable lips.", 
    color: ["sand", "pink"],
    ingredients: ["Brown Sugar", "Vanilla Extract", "Jojoba Oil", "Coconut Oil", "Vitamin E"],
    benefits: "Gently exfoliate and moisturize for irresistibly smooth lips. Massage onto lips, then rinse for a heavenly touch."
  },
  { 
    id: 31, 
    name: "Acai Berry Anti-Aging Mask", 
    price: 24.99, 
    category: "skin", 
    amount: 0, 
    description: "Combat signs of aging with our acai berry anti-aging mask. Rejuvenate and restore your skin's youthful glow.", 
    color: ["purple", "pink"],
    ingredients: ["Acai Berry Extract", "Kaolin Clay", "Hyaluronic Acid", "Vitamin C", "Rosehip Oil"],
    benefits: "Revitalize and nourish your skin. Apply a thin layer, relax, and rinse for a youthful and radiant complexion."
  },
  { 
    id: 32, 
    name: "Sustainable Bamboo Bath Brush", 
    price: 16.49, 
    category: "kits", 
    amount: 0, 
    description: "Elevate your bath time with our sustainable bamboo bath brush. Gentle exfoliation for smooth and radiant skin.", 
    color: ["green"],
    ingredients: ["Bamboo", "Synthetic Bristles", "Aluminum", "Recycled Plastic", "Cotton"],
    benefits: "Upgrade your bath routine with eco-friendly materials. Use for gentle exfoliation and a spa-like experience."
  },
  { 
    id: 33, 
    name: "Coconut Bliss Body Butter", 
    price: 21.99, 
    category: "eyes", 
    amount: 0, 
    description: "Indulge in the coconut bliss of our body butter. Hydrate and nourish your skin for a luxurious and tropical experience.", 
    color: ["white", "brown"],
    ingredients: ["Coconut Oil", "Shea Butter", "Cocoa Butter", "Almond Oil", "Vitamin E"],
    benefits: "Moisturize and nourish your skin with a tropical blend. Smooth onto skin for a luxurious and hydrated feel."
  },
  { 
    id: 34, 
    name: "Petals & Peony Perfume Oil", 
    price: 30.99, 
    category: "kits", 
    amount: 0, 
    description: "Immerse yourself in the delicate scent of petals and peony with our perfume oil. A natural and captivating fragrance.", 
    color: ["purple", "pink"],
    ingredients: ["Jojoba Oil", "Rose Extract", "Peony Extract", "Lavender Oil", "Vanilla Extract"],
    benefits: "Enhance your aura with a captivating scent. Apply to pulse points for a long-lasting and alluring fragrance."
  },
  { 
    id: 35, 
    name: "Eco-Friendly Cotton Pads", 
    price: 8.99, 
    category: "kits", 
    amount: 0, 
    description: "Go green with our eco-friendly cotton pads. Perfect for applying and removing your favorite natural cosmetics.", 
    color: ["white", "green"],
    ingredients: ["Organic Cotton", "Bamboo Fiber", "Recycled Paper", "Cornstarch", "Water-based Adhesive"],
    benefits: "Choose sustainability with eco-friendly cotton pads. Ideal for applying and removing makeup while caring for the environment."
  },
  { 
    id: 36, 
    name: "Mango & Papaya Body Scrub", 
    price: 12.99, 
    category: "eyes", 
    amount: 0, 
    description: "Reveal silky-smooth skin with our mango and papaya body scrub. Exfoliate and indulge in a tropical spa experience.", 
    color: ["orange"],
    ingredients: ["Sugar", "Mango Extract", "Papaya Extract", "Coconut Oil", "Vitamin E"],
    benefits: "Exfoliate and indulge in a tropical spa experience. Massage onto damp skin for silky-smooth and revitalized results."
  },
  { 
    id: 37, 
    name: "Forest Breeze Deodorant", 
    price: 9.49, 
    category: "skin", 
    amount: 0, 
    description: "Stay fresh with our forest breeze deodorant. A natural and effective way to keep odors at bay throughout the day.", 
    color: ["green", "brown"],
    ingredients: ["Coconut Oil", "Arrowroot Powder", "Baking Soda", "Tea Tree Oil", "Cypress Oil"],
    benefits: "Stay naturally fresh all day. Apply as needed for effective odor protection with a hint of forest breeze."
  },
  { 
    id: 38, 
    name: "Bamboo Charcoal Detox Mask", 
    price: 17.99, 
    category: "skin", 
    amount: 0, 
    description: "Purify and detoxify your skin with our bamboo charcoal mask. Experience a deep cleanse for a radiant complexion.", 
    color: ["black", "green"],
    ingredients: ["Bamboo Charcoal", "Kaolin Clay", "Aloe Vera", "Tea Tree Oil", "Witch Hazel"],
    benefits: "Draw out impurities and achieve a radiant complexion. Apply a thin layer, relax, and rinse for a detoxified and refreshed skin."
  },
  { 
    id: 39, 
    name: "Lemon Zest Cuticle Oil", 
    price: 6.99, 
    category: "eyes", 
    amount: 0, 
    description: "Nourish and hydrate your cuticles with the refreshing scent of lemon zest. Achieve healthy and well-groomed nails.", 
    color: ["yellow"],
    ingredients: ["Jojoba Oil", "Sweet Almond Oil", "Lemon Essential Oil", "Vitamin E", "Argan Oil"],
    benefits: "Nourish and hydrate cuticles for healthy and well-groomed nails. Apply to cuticles and massage for optimal results."
  },
  { 
    id: 40, 
    name: "Gentle Baby Massage Oil", 
    price: 11.99, 
    category: "skin", 
    amount: 0, 
    description: "Calm and nurture your baby's delicate skin with our gentle baby massage oil. A soothing blend for a bonding experience.", 
    color: ["blue"],
    ingredients: ["Sweet Almond Oil", "Chamomile Extract", "Lavender Oil", "Calendula Extract", "Jojoba Oil"],
    benefits: "Soothe and bond with your baby. Gently massage onto baby's skin for a calming and nurturing experience."
  }
];

// Now, the 'products' array contains 40 products with detailed information.


  
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




