// Datos centralizados para la tienda - Futuro: reemplazar con API
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

// Productos de ejemplo basados en la imagen del carrito
export const products: Product[] = [
  {
    id: "1",
    name: "Basic Starter Pack",
    price: 399,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    colors: ["Navy", "Black", "Grey", "Brown", "Green", "Blue", "Red", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blazers"
  },
  {
    id: "2",
    name: "Pink Blouse",
    price: 1490,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
    colors: ["Black", "Pink", "White", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: false,
    category: "Blouses"
  },
  {
    id: "3",
    name: "Premium Suit",
    price: 1399,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Yellow", "Navy", "Grey", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Suits"
  },
  {
    id: "4",
    name: "iPhone",
    price: 1599,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "White", "Red"],
    sizes: ["128GB", "256GB", "512GB", "1TB"],
    inStock: true,
    category: "Electronics"
  },
  {
    id: "5",
    name: "Classic Jeans",
    price: 89,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "Grey", "White"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
    category: "Jeans"
  },
  {
    id: "6",
    name: "Elegant Dress",
    price: 299,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
    colors: ["Black", "Red", "Navy", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Dresses"
  },
  {
    id: "7",
    name: "Sport Jacket",
    price: 199,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Grey", "Brown"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Jackets"
  },
  {
    id: "8",
    name: "Casual T-Shirt",
    price: 39,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Grey", "Blue", "Red", "Green"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "T-Shirts"
  },
  {
    id: "9",
    name: "Designer Handbag",
    price: 599,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Red", "Navy"],
    sizes: ["One Size"],
    inStock: false,
    category: "Bags"
  },
  {
    id: "10",
    name: "Running Shoes",
    price: 149,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Blue", "Red"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
    category: "Shoes"
  },
  {
    id: "11",
    name: "Wool Sweater",
    price: 179,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
    colors: ["Grey", "Black", "Navy", "Brown", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Sweaters"
  },
  {
    id: "12",
    name: "Leather Belt",
    price: 79,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    category: "Accessories"
  },
  // Más productos Blazers
  {
    id: "13",
    name: "Executive Blazer",
    price: 599,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Navy", "Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Blazers"
  },
  {
    id: "14",
    name: "Casual Blazer",
    price: 299,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    colors: ["Beige", "Light Grey", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blazers"
  },
  {
    id: "15",
    name: "Wool Blazer",
    price: 799,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Dark Grey", "Black", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    category: "Blazers"
  },
  {
    id: "16",
    name: "Summer Blazer",
    price: 249,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    colors: ["White", "Light Blue", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blazers"
  },
  {
    id: "17",
    name: "Formal Blazer",
    price: 899,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Blazers"
  },
  {
    id: "18",
    name: "Linen Blazer",
    price: 199,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
    colors: ["Beige", "White", "Light Grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blazers"
  },
  // Más productos Blouses
  {
    id: "19",
    name: "Silk Blouse",
    price: 199,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Navy", "Red"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blouses"
  },
  {
    id: "20",
    name: "Cotton Blouse",
    price: 89,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
    colors: ["Blue", "White", "Pink", "Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blouses"
  },
  {
    id: "21",
    name: "Chiffon Blouse",
    price: 149,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
    colors: ["Black", "White", "Navy", "Purple"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blouses"
  },
  {
    id: "22",
    name: "Work Blouse",
    price: 79,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Navy", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blouses"
  },
  {
    id: "23",
    name: "Casual Blouse",
    price: 59,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
    colors: ["Pink", "Blue", "Yellow", "Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blouses"
  },
  {
    id: "24",
    name: "Evening Blouse",
    price: 299,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
    colors: ["Black", "Red", "Navy", "Gold"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Blouses"
  },
  // Más productos Suits
  {
    id: "25",
    name: "Business Suit",
    price: 1299,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Navy", "Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Suits"
  },
  {
    id: "26",
    name: "Wedding Suit",
    price: 1899,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Suits"
  },
  {
    id: "27",
    name: "Casual Suit",
    price: 899,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Beige", "Light Grey", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    category: "Suits"
  },
  {
    id: "28",
    name: "Summer Suit",
    price: 799,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["White", "Light Blue", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    category: "Suits"
  },
  {
    id: "29",
    name: "Formal Suit",
    price: 2199,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Charcoal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Suits"
  },
  {
    id: "30",
    name: "Designer Suit",
    price: 1599,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    colors: ["Navy", "Black", "Grey"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Suits"
  },
  // Más productos Jeans
  {
    id: "31",
    name: "Skinny Jeans",
    price: 129,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "Grey", "White"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
    category: "Jeans"
  },
  {
    id: "32",
    name: "Straight Jeans",
    price: 99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "Grey"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
    category: "Jeans"
  },
  {
    id: "33",
    name: "Bootcut Jeans",
    price: 119,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "Grey"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
    category: "Jeans"
  },
  {
    id: "34",
    name: "High Waist Jeans",
    price: 149,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "Grey", "White"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
    category: "Jeans"
  },
  {
    id: "35",
    name: "Vintage Jeans",
    price: 179,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "Grey"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
    category: "Jeans"
  },
  {
    id: "36",
    name: "Distressed Jeans",
    price: 199,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "Grey"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    inStock: true,
    category: "Jeans"
  },
  // Más productos Dresses
  {
    id: "37",
    name: "Cocktail Dress",
    price: 399,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
    colors: ["Black", "Red", "Navy", "Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Dresses"
  },
  {
    id: "38",
    name: "Summer Dress",
    price: 199,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
    colors: ["White", "Pink", "Blue", "Yellow"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Dresses"
  },
  {
    id: "39",
    name: "Work Dress",
    price: 249,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Grey", "Brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Dresses"
  },
  {
    id: "40",
    name: "Evening Dress",
    price: 599,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
    colors: ["Black", "Red", "Navy", "Gold"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Dresses"
  },
  {
    id: "41",
    name: "Casual Dress",
    price: 149,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
    colors: ["Blue", "Green", "Pink", "Purple"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Dresses"
  },
  {
    id: "42",
    name: "Formal Dress",
    price: 799,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Burgundy", "Charcoal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Dresses"
  },
  // Más productos Jackets
  {
    id: "43",
    name: "Leather Jacket",
    price: 399,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Jackets"
  },
  {
    id: "44",
    name: "Denim Jacket",
    price: 149,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    colors: ["Blue", "Black", "Grey", "White"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Jackets"
  },
  {
    id: "45",
    name: "Bomber Jacket",
    price: 199,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Green", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Jackets"
  },
  {
    id: "46",
    name: "Windbreaker",
    price: 129,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Red", "Yellow"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Jackets"
  },
  {
    id: "47",
    name: "Blazer Jacket",
    price: 299,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Grey", "Brown"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Jackets"
  },
  {
    id: "48",
    name: "Puffer Jacket",
    price: 249,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Red", "Green"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Jackets"
  },
  // Más productos T-Shirts
  {
    id: "49",
    name: "Vintage T-Shirt",
    price: 49,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Grey", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "T-Shirts"
  },
  {
    id: "50",
    name: "Graphic T-Shirt",
    price: 59,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Red", "Blue"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "T-Shirts"
  },
  {
    id: "51",
    name: "Polo Shirt",
    price: 79,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Navy", "Red"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "T-Shirts"
  },
  {
    id: "52",
    name: "Long Sleeve T-Shirt",
    price: 69,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Grey", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "T-Shirts"
  },
  {
    id: "53",
    name: "Tank Top",
    price: 39,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Grey", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "T-Shirts"
  },
  {
    id: "54",
    name: "Henley Shirt",
    price: 89,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Navy", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "T-Shirts"
  },
  // Más productos Shoes
  {
    id: "55",
    name: "Sneakers",
    price: 199,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    colors: ["White", "Black", "Blue", "Red"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
    category: "Shoes"
  },
  {
    id: "56",
    name: "Dress Shoes",
    price: 299,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Navy"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
    category: "Shoes"
  },
  {
    id: "57",
    name: "Boots",
    price: 399,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
    category: "Shoes"
  },
  {
    id: "58",
    name: "Sandals",
    price: 99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "White", "Navy"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
    category: "Shoes"
  },
  {
    id: "59",
    name: "Loafers",
    price: 249,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Navy"],
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
    category: "Shoes"
  },
  {
    id: "60",
    name: "High Heels",
    price: 199,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    colors: ["Black", "Red", "Navy", "White"],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    inStock: true,
    category: "Shoes"
  },
  // Más productos Bags
  {
    id: "61",
    name: "Crossbody Bag",
    price: 199,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Red", "Navy"],
    sizes: ["One Size"],
    inStock: true,
    category: "Bags"
  },
  {
    id: "62",
    name: "Backpack",
    price: 149,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Grey", "Green"],
    sizes: ["One Size"],
    inStock: true,
    category: "Bags"
  },
  {
    id: "63",
    name: "Tote Bag",
    price: 89,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Beige", "Navy"],
    sizes: ["One Size"],
    inStock: true,
    category: "Bags"
  },
  {
    id: "64",
    name: "Clutch Bag",
    price: 129,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Red", "Gold", "Silver"],
    sizes: ["One Size"],
    inStock: true,
    category: "Bags"
  },
  {
    id: "65",
    name: "Messenger Bag",
    price: 179,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Navy", "Grey"],
    sizes: ["One Size"],
    inStock: true,
    category: "Bags"
  },
  {
    id: "66",
    name: "Weekend Bag",
    price: 299,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Brown", "Grey"],
    sizes: ["One Size"],
    inStock: true,
    category: "Bags"
  },
  // Más productos Sweaters
  {
    id: "67",
    name: "Cashmere Sweater",
    price: 399,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
    colors: ["Grey", "Black", "Navy", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Sweaters"
  },
  {
    id: "68",
    name: "Cardigan",
    price: 199,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
    colors: ["Grey", "Black", "Navy", "Brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Sweaters"
  },
  {
    id: "69",
    name: "Turtleneck",
    price: 149,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
    colors: ["Black", "Grey", "Navy", "White"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Sweaters"
  },
  {
    id: "70",
    name: "Hoodie",
    price: 129,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
    colors: ["Black", "Grey", "Navy", "Red"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    inStock: true,
    category: "Sweaters"
  },
  {
    id: "71",
    name: "Pullover",
    price: 179,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
    colors: ["Grey", "Black", "Navy", "Brown"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Sweaters"
  },
  {
    id: "72",
    name: "V-Neck Sweater",
    price: 159,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
    colors: ["Grey", "Black", "Navy", "Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    category: "Sweaters"
  },
  // Más productos Accessories
  {
    id: "73",
    name: "Leather Wallet",
    price: 99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Tan"],
    sizes: ["One Size"],
    inStock: true,
    category: "Accessories"
  },
  {
    id: "74",
    name: "Watch",
    price: 599,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Silver", "Gold", "Rose Gold"],
    sizes: ["One Size"],
    inStock: true,
    category: "Accessories"
  },
  {
    id: "75",
    name: "Sunglasses",
    price: 199,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Grey", "Blue"],
    sizes: ["One Size"],
    inStock: true,
    category: "Accessories"
  },
  {
    id: "76",
    name: "Scarf",
    price: 79,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Grey", "Navy", "Red"],
    sizes: ["One Size"],
    inStock: true,
    category: "Accessories"
  },
  {
    id: "77",
    name: "Hat",
    price: 49,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Navy", "Grey", "Brown"],
    sizes: ["One Size"],
    inStock: true,
    category: "Accessories"
  },
  {
    id: "78",
    name: "Gloves",
    price: 59,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    colors: ["Black", "Brown", "Grey", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    category: "Accessories"
  },
  // Más productos Electronics
  {
    id: "79",
    name: "Smartphone",
    price: 899,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    colors: ["Black", "White", "Blue", "Red"],
    sizes: ["128GB", "256GB", "512GB"],
    inStock: true,
    category: "Electronics"
  },
  {
    id: "80",
    name: "Laptop",
    price: 1299,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    colors: ["Silver", "Black", "Gold"],
    sizes: ["256GB", "512GB", "1TB"],
    inStock: true,
    category: "Electronics"
  },
  {
    id: "81",
    name: "Tablet",
    price: 599,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    colors: ["Black", "White", "Silver"],
    sizes: ["64GB", "128GB", "256GB"],
    inStock: true,
    category: "Electronics"
  },
  {
    id: "82",
    name: "Headphones",
    price: 299,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    colors: ["Black", "White", "Blue", "Red"],
    sizes: ["One Size"],
    inStock: true,
    category: "Electronics"
  },
  {
    id: "83",
    name: "Smart Watch",
    price: 399,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    colors: ["Black", "Silver", "Gold", "Rose Gold"],
    sizes: ["38mm", "42mm"],
    inStock: true,
    category: "Electronics"
  },
  {
    id: "84",
    name: "Camera",
    price: 799,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    colors: ["Black", "Silver"],
    sizes: ["One Size"],
    inStock: true,
    category: "Electronics"
  }
];

// Carrito de ejemplo
export const cartItems: CartItem[] = [
  {
    product: products[0],
    quantity: 1,
    selectedColor: "Navy",
    selectedSize: "Small"
  },
  {
    product: products[1],
    quantity: 1,
    selectedColor: "Black",
    selectedSize: "Medium"
  },
  {
    product: products[2],
    quantity: 1,
    selectedColor: "Yellow",
    selectedSize: "Large"
  }
];

// Función para calcular totales del carrito
export function calculateCartTotals(items: CartItem[]) {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 0 : 0; // Envío gratis
  const tax = Math.round(subtotal * 0.002); // 0.2% de impuesto
  const total = subtotal + shipping + tax;
  
  return {
    subtotal,
    shipping,
    tax,
    total
  };
}

// Función para obtener productos por categoría
export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
}

// Función para obtener todas las categorías únicas
export function getAllCategories(): string[] {
  return [...new Set(products.map(product => product.category))];
}

// Función para obtener productos filtrados
export function getFilteredProducts(filters: {
  category?: string;
  search?: string;
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
}): Product[] {
  let filteredProducts = products;

  // Filtro por categoría
  if (filters.category) {
    filteredProducts = filteredProducts.filter(product => 
      product.category.toLowerCase() === filters.category!.toLowerCase()
    );
  }

  // Filtro por búsqueda
  if (filters.search) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
      product.category.toLowerCase().includes(filters.search!.toLowerCase())
    );
  }

  // Filtro por precio
  if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
    filteredProducts = filteredProducts.filter(product => {
      const priceMin = filters.priceMin || 0;
      const priceMax = filters.priceMax || Number.MAX_SAFE_INTEGER;
      return product.price >= priceMin && product.price <= priceMax;
    });
  }

  // Filtro por stock
  if (filters.inStock) {
    filteredProducts = filteredProducts.filter(product => product.inStock);
  }

  return filteredProducts;
}

// Función para obtener estadísticas de categorías
export function getCategoryStats() {
  const categories = getAllCategories();
  return categories.map(category => {
    const categoryProducts = getProductsByCategory(category);
    return {
      name: category,
      count: categoryProducts.length,
      inStock: categoryProducts.filter(p => p.inStock).length,
      avgPrice: Math.round(categoryProducts.reduce((sum, p) => sum + p.price, 0) / categoryProducts.length)
    };
  });
}
