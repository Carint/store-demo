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
