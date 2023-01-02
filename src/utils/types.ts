interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category:
    | "tops"
    | "womens-dresses"
    | "womens-shoes"
    | "mens-shirts"
    | "mens-shoes"
    | "mens-watches"
    | "womens-watches"
    | "womens-bags"
    | "womens-jewellery"
    | "sunglasses";
  thumbnail: string;
  images: string[];
}

interface ProductsFilterProps {
  products: ProductsProps[];
}

export type { ProductsProps, ProductsFilterProps };
