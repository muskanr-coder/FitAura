const sampleProducts = [
  {
    name: "Linen Oversized Blazer",
    brand: "FitAura Studio",
    description: "Premium linen-blend blazer with a relaxed silhouette for elegant everyday layering.",
    category: "Women",
    price: 129,
    discountPrice: 109,
    sizes: ["S", "M", "L"],
    colors: ["Beige", "Ivory"],
    images: [
      "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.6,
    stock: 18,
    featured: true
  },
  {
    name: "Minimal Tailored Shirt",
    brand: "FitAura Studio",
    description: "Clean-cut cotton shirt with subtle texture and refined drape.",
    category: "Men",
    price: 64,
    discountPrice: 54,
    sizes: ["M", "L", "XL"],
    colors: ["White", "Sky"],
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503341338985-95ca1e349c2b?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.4,
    stock: 31,
    featured: true
  },
  {
    name: "Fluid Satin Midi Dress",
    brand: "FitAura Studio",
    description: "Soft satin midi dress with graceful movement and lightweight comfort.",
    category: "Women",
    price: 92,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blush", "Black"],
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.8,
    stock: 24,
    featured: true
  },
  {
    name: "Structured Wide-Leg Trousers",
    brand: "FitAura Studio",
    description: "High-waist, wide-leg trousers designed for polished office and streetwear looks.",
    category: "Women",
    price: 78,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Stone", "Black"],
    images: [
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.3,
    stock: 27,
    featured: false
  },
  {
    name: "Leather Crossbody Bag",
    brand: "FitAura Studio",
    description: "Compact full-grain leather crossbody with adjustable strap and magnetic closure.",
    category: "Accessories",
    price: 110,
    discountPrice: 95,
    sizes: ["One Size"],
    colors: ["Tan", "Black"],
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.7,
    stock: 15,
    featured: true
  },
  {
    name: "Chunky Platform Sneakers",
    brand: "FitAura Studio",
    description: "Street-forward platform sneakers with all-day cushioning and bold profile.",
    category: "Footwear",
    price: 99,
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["White", "Cream"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.2,
    stock: 34,
    featured: false
  },
  {
    name: "Relaxed Denim Jacket",
    brand: "FitAura Studio",
    description: "Vintage-wash denim jacket with roomy fit and tonal button detailing.",
    category: "Men",
    price: 88,
    sizes: ["M", "L", "XL"],
    colors: ["Blue", "Grey"],
    images: [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.5,
    stock: 22,
    featured: false
  },
  {
    name: "Fine Knit Polo",
    brand: "FitAura Studio",
    description: "Breathable fine-knit polo with a soft hand-feel and modern silhouette.",
    category: "Men",
    price: 57,
    discountPrice: 49,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Cream"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?auto=format&fit=crop&w=1200&q=80"
    ],
    rating: 4.1,
    stock: 40,
    featured: false
  }
];

export default sampleProducts;
