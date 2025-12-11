import express, { Request, Response } from "express";
import { ProductChallenge } from "./src/models/ProductChallenge.js";
import datos from "./datos.json" with { type: "json" };

const app = express();
app.use(express.json());

const productos: Map<number, ProductChallenge> = new Map();
datos.items.forEach((prod)=> {
    productos.set(prod.id, prod);
})

app.get("/products", async (req: Request, res: Response) => {
  res.send(JSON.stringify(Array.from(productos.values())));
});

app.get("/products/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const producto = productos.get(id);
    if (!producto) {
        res.status(404).send({ message: "Product not found" });
        return;
    }
    res.send(JSON.stringify(producto));
});





app.listen(3000, () => {
  console.log("running on 3000");
});
