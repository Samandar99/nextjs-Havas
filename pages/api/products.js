import { products } from "./data/products";

export default function handler(req, res) {
  if(req.method === "GET"){
    res.status(200).json(products);
  } else if(req.method === "POST"){
    const {title, info, img} = req.body  
    // console.log(info); 
    const newProduct = {
      id: Date.now(),
      title: title,
      img: img,
      info: info
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  
  }
  
}