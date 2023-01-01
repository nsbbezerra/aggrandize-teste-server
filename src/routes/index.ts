import { Router } from "express";

import ProductsController from "../controller/ProductsController";

const router = Router();

/** Fetching products */

router.get("/products", ProductsController.Show);
router.get("/retrieve/:id", ProductsController.Find);

export { router };
