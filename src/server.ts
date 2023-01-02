import * as dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();
const PORT = process.env.PORT || 4003;

app.use(cors());
app.use(router);

/** Handling erros */

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    const errorMessage = error.message;
    return response.status(400).json({
      defaultMessage: "An error occurred while processing your request",
      errorMessage,
    });
  }
);

/** Initializing the application */

app.listen(PORT, () => {
  console.log(`App is running on PORT: ${PORT}`);
});
