import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from "sweetalert";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useNavigate, useParams } from 'react-router-dom';
import primaryAxios from '../../Api/primaryAxios';

const BookStripeForm = ({ totalAmount, orderInfo }) => {
    
  const [user, loading] = useAuthState(auth);
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await primaryAxios.post("/create-payment-intent", {
        totalAmount: totalAmount,
      });
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    })();
  }, [totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPaying(true);

    if (elements == null) {
      return;
    }

    const card = elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error?.message);
    } else {
      setPaymentError("");
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (intentError) {
      setPaymentError(intentError?.message);
      setIsPaying(false);
    } else {
      setPaymentError("");
      if (paymentIntent.id) {
        swal(
          "Payment Successful",
          `Your Transaction Id Is ${paymentIntent.id}`,
          "success",
          {
            className: "rounded-3xl",
          }
        ).then((value) => {
          navigate("/orders");
        });
      }
      const payment = {
        orderId: orderInfo._id,
        transactionId: paymentIntent.id,
        userName: user?.displayName,
        userEmail: user?.email,
        productName: orderInfo?.name,
        productId: orderInfo?._id,
        price: orderInfo?.price,
        status: "paid",
        pdfLink: "https://www.pdfdrive.com/download.pdf?id=25178589&h=2399df2930020fa747e0c8d17bfc8720&u=cache&ext=pdf",
        productImage: orderInfo?.img,
        // uname: courseData?.uname,
      };
      const { data } =
        (await primaryAxios.post(`/order?email=${user?.email}`, payment));

      if (data) {
        setIsPaying(false);
      }
    }
  };
    return (
        <form className="w-full bg-base-200 p-5" onSubmit={handleSubmit}>
      <div className="my-3">
        <label className="text-lg">Card Number</label>
        <CardNumberElement
          className="p-2 bg-base-100 border border-neutral rounded-md mt-1"
          options={{
            style: {
              base: {
                fontSize: "20px",
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
        ></CardNumberElement>
      </div>
      <div className="flex gap-4">
      <div className="mb-3 w-full">
        <label className="text-lg">Expiration Date</label>
        <CardExpiryElement
          className="p-2 bg-base-100 border border-neutral rounded-md mt-1"
          options={{
            style: {
              base: {
                fontSize: "20px",
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
        ></CardExpiryElement>
      </div>
      <div className="mb-3 w-full">
        <label className="text-lg">CVC</label>
        <CardCvcElement
          className="p-2 bg-base-100 border border-neutral rounded-md mt-1"
          options={{
            style: {
              base: {
                fontSize: "20px",
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
        ></CardCvcElement>
      </div>
      </div>
      {paymentError && (
        <p className="mt-5 -mb-5 text-red-600 text-center">{paymentError}</p>
      )}
      <button
        className={`btn btn-md text-white w-full btn-primary uppercase mt-6 rounded-lg ${
          isPaying && "loading"
        }`}
        type="submit"
        disabled={!stripe || !elements || !clientSecret}
      >
        Pay ${totalAmount}
      </button>
    </form>
    );
};

export default BookStripeForm;