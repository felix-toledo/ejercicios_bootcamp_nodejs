import express, { Request, Response } from "express";
import { Product } from "./interfaces/Product.js";
import { InventoryManager } from "./classes/InventoryManager.js";
import { RealProduct } from "./interfaces/Product.js";
import { checkIfAdmin } from "./middleware/chekIfAdmin.js";
import { loginHandler } from "./login/login.js";

const app = express();
app.use(express.json());
app.use(checkIfAdmin);

// GET /products: has to give me a map of products.
// GET /products/:id: has to gibe me a product with that id with req.params
// POST /products: has to allow me add a new product with req.body

const inventory = new InventoryManager();

const sampleProduct: Product = {
  id: 1,
  name: "Towel",
  price: 9.5,
};

inventory.addProduct(sampleProduct);

app.get("/products", async (req: Request, res: Response) => {
  res.send(inventory.getAllProducts());
});

app.get("/products/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const product = inventory.searchProductById(id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.post("/login", loginHandler);

app.post("/products", async (req: Request, res: Response) => {
  console.log("isnide");
  try {
    const newProduct: RealProduct = req.body;
    if (newProduct.name && newProduct.price) {
      inventory.addProduct(newProduct);
      res.status(201).send({ message: "Product added successfully" });
    } else {
      res.status(400).send({ message: "Invalid product data" });
    }
  } catch (e) {
    res.status(500).send({ message: "Error 500: ", e });
  }
});

app.listen(3000, () => {
  console.log("running on 3000");
});
