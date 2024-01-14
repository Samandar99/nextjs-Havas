import Cors from 'micro-cors';
import { products } from "./data/products";

const cors = Cors({
  allowedMethods: ['GET', 'POST', 'DELETE'],
});

const handler = async (req, res) => {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Если предоставлен ID, возвращаем один продукт
    if (id) {
      const product = products.find(product => product.id === parseInt(id));

      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } else {
      
      res.status(200).json(products);
    }
  } else if (req.method === 'POST') {
    const { title, info, img } = req.body;
    const newProduct = {
      id: Date.now(),
      title: title,
      img: img,
      info: info
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    const index = products.findIndex(product => product.id === parseInt(id));

    if (index !== -1) {
      products.splice(index, 1)
      res.status(200).json({ message: 'Product deleted successfully' })
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  }
};

export default cors(handler);
