import Cors from 'micro-cors';
import { products } from "./data/products";

const cors = Cors({
  allowedMethods: ['GET', 'POST'],
});

const handler = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(products);
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
  }
};

export default cors(handler);
