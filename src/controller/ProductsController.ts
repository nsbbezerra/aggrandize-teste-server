import { Request, Response, NextFunction } from "express";
import { configs } from "../configs";
import { productsFilter } from "../utils/functionalities";
import { ProductsFilterProps } from "../utils/types";

class ProductsController {
  async Show(request: Request, response: Response, next: NextFunction) {
    try {
      const fetcher = configs.categoriesOfProducts.map((category) => {
        return fetch(`${configs.FETCHER_ENDPOINT}/category/${category}`);
      });

      const items = await Promise.all(fetcher);
      const itemsToJson = await Promise.all(items.map((e) => e.json()));

      const products = productsFilter(itemsToJson as ProductsFilterProps[]);

      return response.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async Find(
    request: Request<{ id: string }, {}, {}>,
    response: Response,
    next: NextFunction
  ) {
    const { id } = request.params;

    try {
      const data = await fetch(`${configs.FETCHER_ENDPOINT}/${id}`);
      const product = await data.json();

      return response.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductsController();
