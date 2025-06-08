interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description?: string;
  rating?: number;
}

export const promotingProducts: Product[] = [
  {
    id: 1,
    title: "Organic Bananas",
    price: 4.99,
    thumbnail: "https://dummyjson.com/products/1",
    rating: 4.8,
    description: "Fresh organic bananas from Ecuador",
  },
  {
    id: 2,
    title: "Avocados",
    price: 3.49,
    thumbnail: "https://dummyjson.com/products/2",
    rating: 4.7,
    description: "Creamy Hass avocados",
  },
  {
    id: 3,
    title: "Greek Yogurt",
    price: 5.99,
    thumbnail: "https://dummyjson.com/products/3",
    rating: 4.9,
    description: "High-protein plain Greek yogurt",
  },
  {
    id: 4,
    title: "Free-Range Eggs",
    price: 6.49,
    thumbnail: "https://dummyjson.com/products/4",
    rating: 4.8,
    description: "Dozen free-range eggs",
  },
];
