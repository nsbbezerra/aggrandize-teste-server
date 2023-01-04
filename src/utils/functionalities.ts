import { ProductsFilterProps } from "./types";

function productsFilter(data: ProductsFilterProps[]) {
  let products = data.flatMap((item) => item.products);

  return products;
}

export { productsFilter };
