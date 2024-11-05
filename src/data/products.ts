export const categories = [
    "All",
    "Tops",
    "Bottoms",
    "Outerwear",
    "Footwear",
    "Accessories"
] as const;


export const products = [
    { id: 1, name: "Classic White T-Shirt", price: 19.99, image: "https://images.unsplash.com/photo-1567593817284-0c5c0d19d5ec?auto=format&fit=crop&q=80&w=800", description: "Soft cotton t-shirt with a classic fit", category: "Tops" },
    { id: 2, name: "Slim Fit Jeans", price: 49.99, image: "https://images.unsplash.com/photo-1593032465171-b0e7f8b4aeff?auto=format&fit=crop&q=80&w=800", description: "Stylish and comfortable slim-fit jeans", category: "Bottoms" },
    { id: 3, name: "Leather Jacket", price: 199.99, image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800", description: "Classic leather jacket for a cool look", category: "Outerwear" },
    { id: 4, name: "Running Shoes", price: 89.99, image: "https://images.unsplash.com/photo-1562158076-7a29aafdd9d2?auto=format&fit=crop&q=80&w=800", description: "Lightweight running shoes with cushioning", category: "Footwear" },
    { id: 5, name: "Wool Scarf", price: 24.99, image: "https://images.unsplash.com/photo-1512499617640-c2f99904a96e?auto=format&fit=crop&q=80&w=800", description: "Warm and cozy wool scarf", category: "Accessories" },
    { id: 6, name: "Denim Jacket", price: 79.99, image: "https://images.unsplash.com/photo-1512757776216-c81bababab45?auto=format&fit=crop&q=80&w=800", description: "Classic denim jacket for any season", category: "Outerwear" },
    { id: 7, name: "Graphic Tee", price: 25.99, image: "https://images.unsplash.com/photo-1590912448160-18ac993d4e2e?auto=format&fit=crop&q=80&w=800", description: "Soft tee with a trendy graphic print", category: "Tops" },
    { id: 8, name: "Chino Pants", price: 39.99, image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&q=80&w=800", description: "Comfortable and stylish chino pants", category: "Bottoms" },
    { id: 9, name: "Puffer Jacket", price: 129.99, image: "https://images.unsplash.com/photo-1593032391332-7c97b0d9f4a7?auto=format&fit=crop&q=80&w=800", description: "Warm and durable puffer jacket", category: "Outerwear" },
    { id: 10, name: "Sneakers", price: 69.99, image: "https://images.unsplash.com/photo-1532323544230-e9e9c0ac48a6?auto=format&fit=crop&q=80&w=800", description: "Casual sneakers for everyday wear", category: "Footwear" },
    { id: 11, name: "Beanie Hat", price: 15.99, image: "https://images.unsplash.com/photo-1514913815072-c0eb468cd1da?auto=format&fit=crop&q=80&w=800", description: "Warm beanie for chilly weather", category: "Accessories" },
    { id: 12, name: "Plaid Flannel Shirt", price: 35.99, image: "https://images.unsplash.com/photo-1564463836580-e3e2a7f8650d?auto=format&fit=crop&q=80&w=800", description: "Soft and cozy plaid flannel shirt", category: "Tops" },
    { id: 13, name: "Cargo Pants", price: 45.99, image: "https://images.unsplash.com/photo-1600182472589-bc1b531d49f5?auto=format&fit=crop&q=80&w=800", description: "Stylish and functional cargo pants", category: "Bottoms" },
    { id: 14, name: "Trench Coat", price: 159.99, image: "https://images.unsplash.com/photo-1577383456714-3e6ddc02dc8f?auto=format&fit=crop&q=80&w=800", description: "Classic trench coat with a modern fit", category: "Outerwear" },
    { id: 15, name: "Leather Boots", price: 139.99, image: "https://images.unsplash.com/photo-1548094994-d235a53b9f15?auto=format&fit=crop&q=80&w=800", description: "Durable leather boots with a stylish finish", category: "Footwear" },
    { id: 16, name: "Silk Scarf", price: 29.99, image: "https://images.unsplash.com/photo-1554662789-1597781ea3c7?auto=format&fit=crop&q=80&w=800", description: "Elegant silk scarf with a soft texture", category: "Accessories" },
    { id: 17, name: "Basic Hoodie", price: 49.99, image: "https://images.unsplash.com/photo-1607544831866-61abd62e7e6d?auto=format&fit=crop&q=80&w=800", description: "Comfortable hoodie for casual wear", category: "Tops" },
    { id: 18, name: "Jogger Pants", price: 39.99, image: "https://images.unsplash.com/photo-1610661536082-8397859059f2?auto=format&fit=crop&q=80&w=800", description: "Stylish joggers for relaxed days", category: "Bottoms" },
    { id: 19, name: "Winter Coat", price: 179.99, image: "https://images.unsplash.com/photo-1603202863332-8f6c62ab5adf?auto=format&fit=crop&q=80&w=800", description: "Thick and warm winter coat", category: "Outerwear" },
    { id: 20, name: "High Top Sneakers", price: 79.99, image: "https://images.unsplash.com/photo-1530910417612-e812f6ddf472?auto=format&fit=crop&q=80&w=800", description: "Classic high-top sneakers for any look", category: "Footwear" },
    { id: 21, name: "Wide Brim Hat", price: 35.99, image: "https://images.unsplash.com/photo-1503342452485-86a3f1eaf84e?auto=format&fit=crop&q=80&w=800", description: "Chic wide brim hat for sunny days", category: "Accessories" },
    { id: 22, name: "Graphic Sweatshirt", price: 59.99, image: "https://images.unsplash.com/photo-1578073478960-3b6e3b01f5e8?auto=format&fit=crop&q=80&w=800", description: "Comfortable sweatshirt with a bold design", category: "Tops" },
    { id: 23, name: "Shorts", price: 25.99, image: "https://images.unsplash.com/photo-1604663430001-3eea1aee34e2?auto=format&fit=crop&q=80&w=800", description: "Comfortable shorts for warm days", category: "Bottoms" },
    { id: 24, name: "Peacoat", price: 189.99, image: "https://images.unsplash.com/photo-1598026904211-3d3df6fc0d60?auto=format&fit=crop&q=80&w=800", description: "Stylish peacoat for a timeless look", category: "Outerwear" },
    { id: 25, name: "Slip-On Loafers", price: 69.99, image: "https://images.unsplash.com/photo-1560200358-d9f5b03c6bfc?auto=format&fit=crop&q=80&w=800", description: "Casual and comfortable loafers", category: "Footwear" },
    { id: 26, name: "Leather Belt", price: 24.99, image: "https://images.unsplash.com/photo-1618331909814-924b428314c6?auto=format&fit=crop&q=80&w=800", description: "Genuine leather belt with classic buckle", category: "Accessories" },
    { id: 27, name: "Pullover Sweater", price: 54.99, image: "https://images.unsplash.com/photo-1526995460011-81e12daece0c?auto=format&fit=crop&q=80&w=800", description: "Warm pullover sweater in a cozy knit", category: "Tops" },
    { id: 28, name: "Skirt", price: 34.99, image: "https://images.unsplash.com/photo-1584710342824-9d9e5f963b70?auto=format&fit=crop&q=80&w=800", description: "Chic and stylish skirt for any occasion", category: "Bottoms" },
    { id: 29, name: "Rain Jacket", price: 99.99, image: "https://images.unsplash.com/photo-1565272796368-727a1f8f2d36?auto=format&fit=crop&q=80&w=800", description: "Water-resistant rain jacket for wet days", category: "Outerwear" },
    { id: 30, name: "Ankle Boots", price: 89.99, image: "https://images.unsplash.com/photo-1521359625204-0f3c35d50c32?auto=format&fit=crop&q=80&w=800", description: "Stylish ankle boots with a comfortable fit", category: "Footwear" }
];
/*

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    colors: string[];
    sizes: string[];
}

export const products: Product[] = [
    // Tops
    {
        id: 1,
        name: "Premium Cotton Sweater",
        price: 89.99,
        category: "Tops",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80",
        description: "Luxuriously soft cotton sweater perfect for layering",
        colors: ["Cream", "Navy", "Black"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        name: "Classic White Oxford Shirt",
        price: 59.99,
        category: "Tops",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
        description: "Timeless oxford shirt for any occasion",
        colors: ["White", "Light Blue", "Pink"],
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Silk Blouse",
        price: 129.99,
        category: "Tops",
        image: "https://images.unsplash.com/photo-1644931900634-c176f67d5ea8?w=500&q=80",
        description: "Elegant silk blouse with a relaxed fit",
        colors: ["Ivory", "Burgundy", "Forest Green"],
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: 4,
        name: "Casual V-Neck Tee",
        price: 29.99,
        category: "Tops",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        description: "Essential v-neck t-shirt in premium cotton",
        colors: ["White", "Black", "Gray", "Navy"],
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 5,
        name: "Merino Wool Turtleneck",
        price: 149.99,
        category: "Tops",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
        description: "Warm and stylish merino wool turtleneck",
        colors: ["Camel", "Black", "Gray"],
        sizes: ["S", "M", "L", "XL"]
    },

    // Bottoms
    {
        id: 6,
        name: "Slim Fit Chinos",
        price: 79.99,
        category: "Bottoms",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80",
        description: "Classic slim-fit chinos in cotton twill",
        colors: ["Khaki", "Navy", "Olive"],
        sizes: ["28", "30", "32", "34", "36"]
    },
    {
        id: 7,
        name: "High-Waisted Jeans",
        price: 99.99,
        category: "Bottoms",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
        description: "Flattering high-waisted jeans with stretch",
        colors: ["Light Wash", "Dark Wash", "Black"],
        sizes: ["24", "26", "28", "30", "32"]
    },
    {
        id: 8,
        name: "Pleated Midi Skirt",
        price: 89.99,
        category: "Bottoms",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80",
        description: "Elegant pleated midi skirt in flowing fabric",
        colors: ["Black", "Navy", "Burgundy"],
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: 9,
        name: "Tailored Wool Trousers",
        price: 159.99,
        category: "Bottoms",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80",
        description: "Professional wool trousers with perfect drape",
        colors: ["Charcoal", "Navy", "Black"],
        sizes: ["28", "30", "32", "34"]
    },
    {
        id: 10,
        name: "Cargo Pants",
        price: 89.99,
        category: "Bottoms",
        image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&q=80",
        description: "Modern cargo pants with multiple pockets",
        colors: ["Olive", "Black", "Khaki"],
        sizes: ["XS", "S", "M", "L", "XL"]
    },

    // Outerwear
    {
        id: 11,
        name: "Designer Denim Jacket",
        price: 129.99,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
        description: "Classic denim jacket with modern details",
        colors: ["Light Wash", "Dark Wash"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 12,
        name: "Wool Blend Peacoat",
        price: 249.99,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=500&q=80",
        description: "Timeless peacoat in premium wool blend",
        colors: ["Navy", "Black", "Camel"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 13,
        name: "Leather Biker Jacket",
        price: 299.99,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&q=80",
        description: "Edgy leather jacket with silver hardware",
        colors: ["Black", "Brown"],
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: 14,
        name: "Quilted Puffer Jacket",
        price: 179.99,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1547624643-3bf761b09502?w=500&q=80",
        description: "Warm quilted puffer with water-resistant finish",
        colors: ["Black", "Navy", "Olive"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 15,
        name: "Trench Coat",
        price: 199.99,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
        description: "Classic trench coat with belt detail",
        colors: ["Beige", "Black", "Navy"],
        sizes: ["XS", "S", "M", "L", "XL"]
    },

    // Footwear
    {
        id: 16,
        name: "Classic White Sneakers",
        price: 79.99,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
        description: "Minimalist white leather sneakers",
        colors: ["White", "Black"],
        sizes: ["36", "37", "38", "39", "40", "41", "42"]
    },
    {
        id: 17,
        name: "Leather Chelsea Boots",
        price: 189.99,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=500&q=80",
        description: "Versatile chelsea boots in premium leather",
        colors: ["Black", "Brown", "Tan"],
        sizes: ["36", "37", "38", "39", "40", "41", "42"]
    },
    {
        id: 18,
        name: "Running Shoes",
        price: 129.99,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
        description: "Performance running shoes with cushioning",
        colors: ["Black/White", "Gray/Blue", "All Black"],
        sizes: ["36", "37", "38", "39", "40", "41", "42"]
    },
    {
        id: 19,
        name: "Leather Loafers",
        price: 159.99,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=500&q=80",
        description: "Classic penny loafers in Italian leather",
        colors: ["Black", "Brown", "Burgundy"],
        sizes: ["36", "37", "38", "39", "40", "41", "42"]
    },
    {
        id: 20,
        name: "Canvas Slip-Ons",
        price: 49.99,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
        description: "Casual slip-on sneakers in durable canvas",
        colors: ["Black", "White", "Navy"],
        sizes: ["36", "37", "38", "39", "40", "41", "42"]
    },

    // Accessories
    {
        id: 21,
        name: "Leather Belt",
        price: 49.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        description: "Classic leather belt with silver buckle",
        colors: ["Black", "Brown", "Tan"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 22,
        name: "Wool Scarf",
        price: 39.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&q=80",
        description: "Soft wool scarf in classic patterns",
        colors: ["Gray", "Navy", "Camel"],
        sizes: ["One Size"]
    },
    {
        id: 23,
        name: "Leather Wallet",
        price: 69.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        description: "Slim leather wallet with card slots",
        colors: ["Black", "Brown"],
        sizes: ["One Size"]
    },
    {
        id: 24,
        name: "Sunglasses",
        price: 129.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        description: "Classic aviator sunglasses",
        colors: ["Gold/Green", "Silver/Gray"],
        sizes: ["One Size"]
    },
    {
        id: 25,
        name: "Leather Backpack",
        price: 199.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
        description: "Premium leather backpack with laptop compartment",
        colors: ["Black", "Brown", "Tan"],
        sizes: ["One Size"]
    },
    {
        id: 26,
        name: "Beanie Hat",
        price: 29.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
        description: "Warm knit beanie in soft wool blend",
        colors: ["Black", "Gray", "Navy"],
        sizes: ["One Size"]
    },
    {
        id: 27,
        name: "Leather Gloves",
        price: 79.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&q=80",
        description: "Touchscreen-compatible leather gloves",
        colors: ["Black", "Brown"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 28,
        name: "Silk Tie",
        price: 59.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&q=80",
        description: "Premium silk tie in classic patterns",
        colors: ["Navy/Red", "Black/Gray", "Blue/Gold"],
        sizes: ["One Size"]
    },
    {
        id: 29,
        name: "Watch",
        price: 299.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
        description: "Classic analog watch with leather strap",
        colors: ["Silver/Black", "Gold/Brown"],
        sizes: ["One Size"]
    },
    {
        id: 30,
        name: "Tote Bag",
        price: 89.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80",
        description: "Spacious canvas tote with leather handles",
        colors: ["Natural", "Black", "Navy"],
        sizes: ["One Size"]
    }
];*/
