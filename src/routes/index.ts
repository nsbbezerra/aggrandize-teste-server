import { Router } from "express";

import ProductsController from "../controllers/ProductsController";

const router = Router();

/** Fetching products */

router.get("/products", ProductsController.Show);

export { router };
