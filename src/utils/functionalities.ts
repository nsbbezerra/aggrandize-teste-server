import { ProductsFilterProps, ProductsProps } from "./types";

function productsFilter(data: ProductsFilterProps[]) {
  let filteredProducts: ProductsProps[] = [];

  let products = data.flatMap((item) => item.products);

  /** Set filter
   * Filter by products with stock greater than or equal to 10
   * Shoes will be shown only those with a discount less than or equal to 15
   */

  products.map((product) => {
    if (product.stock >= 10) {
      product.category.includes("shoes")
        ? product.discountPercentage <= 15 && filteredProducts.push(product)
        : filteredProducts.push(product);
    }
  });

  return filteredProducts;
}

export { productsFilter };
