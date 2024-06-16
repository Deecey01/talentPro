import { useLocation, useNavigate } from "react-router-dom"
import "./Success.scss"
import { useEffect } from "react";
import newRequest from "../../utils/newRequest.js";

const Success = () => {
    const {search}=useLocation();
    const navigate=useNavigate();
    const params=new URLSearchParams(search);
    const payment_intent=params.get("payment_intent");

    useEffect(()=>{
        const makeRequest=async()=>{
            try{
                await newRequest.put("/orders",{payment_intent});
                setTimeout(()=>{
                    navigate("/orders");
                },5000)
            }catch(err){
                console.log(err);
            }
        };
        makeRequest();
    },[]);
  return (
    <div>
      Payment Successfull.You are being redirected to the orders page. Please do not close the page.
    </div>
  )
}

export default Success
