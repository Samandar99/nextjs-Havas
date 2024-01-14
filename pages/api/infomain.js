import Cors from "micro-cors";


const cors = Cors({
  allowMethods: ['PUT', 'GET'],
});

async function handlerText(req, res) {

  if (req.method === 'PUT') {
    const { title, text } = req.body

    res.status(200).json({ title, text });

  } else if (req.method === 'GET'){
    res.status(200).json({
      title: "О НАС",
      text: "HAVAS - сеть дискаунтеров у дома. Мы предлагаем нашим покупателям качественные продукты по выгодной цене. В наших магазинах представлены товары известных мировых и локальных брендов, а также товары собственного производства под торговой маркой HAVAS",
    });

  }



}

export default cors(handlerText);
