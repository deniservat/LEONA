
const products = [
  { id: 1, name: "Radiant Glow Kit", price: 24.99, category: "kits", amount: 0, description: "Illuminate your skin with this all-natural kit for a radiant and healthy complexion. Perfect for everyday use.", color: "sand" },
  { id: 2, name: "Revitalizing Serum", price: 16.99, category: "skin", amount: 0, description: "Nourish and rejuvenate your skin with our revitalizing serum. Experience a natural glow and hydration every day.", color: "blue" },
  { id: 3, name: "Enchanting Eyes Palette", price: 19.99, category: "eyes", amount: 0, description: "Create mesmerizing eye looks with our enchanting eyes palette. Natural shades for stunning and long-lasting beauty.", color: "black" },
  { id: 4, name: "Luscious Lips Balm", price: 8.69, category: "lips", amount: 0, description: "Achieve soft and luscious lips with our natural lip balm. Hydrate and enhance your smile effortlessly.", color: "green" },
  { id: 5, name: "Hydrating Skin Elixir", price: 22.99, category: "skin", amount: 0, description: "Experience the ultimate hydration with our skin elixir. Lock in moisture for a supple and healthy complexion.", color: "red" },
  { id: 6, name: "Natural Beauty Essentials Kit", price: 29.99, category: "kits", amount: 0, description: "Discover the essentials for a natural beauty routine. Achieve a flawless look with our curated beauty kit.", color: "purple" },
  { id: 7, name: "Vibrant Eyes Liner", price: 12.99, category: "eyes", amount: 0, description: "Define and highlight your eyes with our vibrant eyes liner. Achieve a bold and natural look effortlessly.", color: "sand" },
  { id: 8, name: "Organic Lip Tint", price: 5.99, category: "lips", amount: 0, description: "Add a touch of color with our organic lip tint. Nourish your lips while enhancing your natural beauty.", color: "blue" },
  { id: 9, name: "Glowing Skin Mask", price: 15.99, category: "skin", amount: 0, description: "Treat your skin to a spa day with our glowing skin mask. Rejuvenate and reveal a radiant complexion.", color: "grey" }
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




