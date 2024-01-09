import { products } from "./data/products";

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else if (req.method === "POST") {
    try {
      const formData = req.body;

      if (!formData || !formData.title || !formData.id) {
        throw new Error("Invalid request data");
      }

      const newProduct = {
        id: formData.id,
        title: formData.title,
      };

      products.push(newProduct);
      console.log("Product added:", newProduct);

      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error processing POST request:", error);
      res.status(500).json({
        error: "Internal Server Error",
        details: error.message,
        stack: error.stack,
      });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
