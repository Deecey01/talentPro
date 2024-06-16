import "./Pay.scss"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import newRequest from './../../utils/newRequest.js';
import { useParams } from 'react-router-dom';
import CheckoutForm from "../../components/checkoutForm/CheckoutForm.jsx";

const stripePromise = loadStripe("pk_test_51PSQq2KIZLYJ0eAyjNjftOF3UeWOiRcqUePPRD6O4KeFbueIq4iaYYwixM8VbdzjpVUtIKcZIuvbYD623GHpVOj700XZgNmYza");


const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
    const { id } = useParams();
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`)
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
    }, [])

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <div>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
}

export default Pay
