import { ProductsFilterProps, ProductsProps } from "./types";

function productsFilter(products: ProductsFilterProps[]) {
  let allProducts: ProductsProps[] = [];

  products.map((productList) => {
    productList.products.map((product) => {
      if (product.stock >= 10) {
        product.category.includes("shoes")
          ? product.discountPercentage <= 15 && allProducts.push(product)
          : allProducts.push(product);
      }
    });
  });
  return allProducts;
}

export { productsFilter };
