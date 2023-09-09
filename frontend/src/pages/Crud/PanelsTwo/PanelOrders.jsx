import { PanelsTwoStyled } from "./PanelsTwoStyled";
import { server } from "../../../server";
import { useEffect, useState } from "react";
import axios from "axios";


const PanelOrders = () => {
  const [data, setData] = useState([])
   useEffect(() => {
     axios
       .get(`http://localhost:5000/api/v2/stripe/get-all-orders`, {
         withCredentials: true,
       })
       .then((res) => {
         setData(res.data.order);
       });
   }, []);

   console.log(data)

  return (
    <PanelsTwoStyled>
        <h2>Pedidos</h2>
    </PanelsTwoStyled>
  )
}

export default PanelOrders