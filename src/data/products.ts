import {Product} from "../types.ts";

export const categories = [
    "All",
    "Tops",
    "Bottoms",
    "Outerwear",
    "Footwear",
    "Accessories"
] as const;

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
        name: "Classic Oxford Shirt",
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
        image: "https://plus.unsplash.com/premium_photo-1691367279403-aaa787d264f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Elegant silk blouse with a relaxed fit",
        colors: ["Ivory", "Burgundy", "Forest Green"],
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: 4,
        name: "Casual Tee",
        price: 29.99,
        category: "Tops",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        description: "Essential t-shirt in premium cotton",
        colors: ["White", "Black", "Gray", "Navy"],
        sizes: ["XS", "S", "M", "L", "XL"]
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
    {
        id: 17,
        name: "Comfortable Jeans",
        price: 189.99,
        category: "Bottoms",
        image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=500&q=80",
        description: "Versatile jeans",
        colors: ["Black", "Brown", "Tan"],
        sizes: ["36", "37", "38", "39", "40", "41", "42"]
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
    {
        id: 27,
        name: "Women's Coat",
        price: 79.99,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&q=80",
        description: "Autumn's edition coat",
        colors: ["Black", "Brown"],
        sizes: ["S", "M", "L"]
    },

    // Footwear
    {
        id: 16,
        name: "Classic Sneakers",
        price: 79.99,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80",
        description: "Minimalist leather sneakers",
        colors: ["White", "Black"],
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
        name: "Leather Backpack",
        price: 49.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        description: "Premium leather backpack with laptop compartment",
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
        name: "Modern and bold bag",
        price: 199.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
        description: "Premium leather bag",
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
    },
    {
        id: 5,
        name: "Merino Wool Hat",
        price: 149.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
        description: "Warm and stylish merino wool hat",
        colors: ["Camel", "Black", "Gray"],
        sizes: ["S", "M", "L", "XL"]
    },
]
