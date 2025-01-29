import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useCart from "../Hooks/useCart";
import useAxiosWithInterceptors from "../Components/Authentications/useAxiosWithInterceptors";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosIntnce = useAxiosWithInterceptors();
  const [cart]=useCart();
  const [clientSecret,setSecrect]=useState(null);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const {user}=useContext(AuthContext);
useEffect(()=>
  {
        if(totalPrice>0)
        {
          axiosIntnce.post('/payment-intent',{price:totalPrice})
          .then(res=>
          {
             console.log(res);
             setSecrect(res.data.clientSecret);
          }
          )
        }
  },[])






  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log(card);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const {paymentIntent,error:confiError}=await stripe.confirmCardPayment(clientSecret.client_secret,
      {
        payment_method:{card:card,billing_details:{name:user?.email}}
      }
    )
    if(confiError)
    {
      console.log('Error',confiError);
    }else{
      console.log('Paymenintent',paymentIntent);
      if(paymentIntent.status ==='succeeded')
      {
        // Now Save The Info In DATA BASE ->>>>
        const paymentInfo = 
        {
           email:user.email,
           price:totalPrice,
           transactionId:paymentIntent.id,
           data: new Date(),
           status:'panding..'

        }
      await axiosIntnce.post('/payments',paymentInfo)
      .then(res=>
      {
        if(res.data.message)
        {
          Swal.fire({
            title: `${res.data.message}`,
            icon: "success",
            draggable: true
          });
        }
        console.log(res.data.message);
      }
      )
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Checkout Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border border-gray-300 rounded-md p-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
