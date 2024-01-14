import Cors from "micro-cors";
import { shops } from "./data/shops";



const cors = Cors({
    allowMethods: ['GET', 'POST', 'DELETE'],
})


const shopsHandler = async (req, res) => {

    if (req.method === 'GET') {
        res.status(200).json(shops)
    } else if (req.method === 'POST') {
        const { title, img, addres, worktime, numberTell } = req.body
        const newProduct = {
            id: Date.now(),
            title: title,
            img: img,
            addres: addres,
            worktime: worktime,
            numberTell: numberTell
        };
        shops.push(newProduct);
        res.status(201).json(newProduct)
    } else if(req.method === 'DELETE'){
      
        const {id} = req.body;
        const index = shops.findIndex(shop => shop.id === parseInt(id));

        if(index !== -1){
            shops.splice(index, 1)
            res.status(200).json({message: 'Product deleted successfully'})
        } else {
            res.status(404).json({message: 'Product deleted successfully'})
        }
        
    }

}


export default cors(shopsHandler)