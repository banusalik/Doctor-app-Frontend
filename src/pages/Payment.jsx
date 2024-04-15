import React from "react";
import Layout from "../components/Layout/Layout";
import KhaltiCheckout from "khalti-checkout-web";

const Payment = () => {
  const config = {
    // replace this key with yours
    publicKey: "test_public_key_db20ce0cdb3c4201ab57afc7ad855132",
    productIdentity: Doctor_ID,
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        handleStatus("Paid");
        handlePaymentSuccess(appointmentId, payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  const checkout = new KhaltiCheckout(config);

  const handlePaymentButtonClick = () => {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 1000 });
  };

  return (
    <Layout>
      <button id="payment-button" onClick={handlePaymentButtonClick}>
        Pay with Khalti
      </button>
    </Layout>
  );
};
export default Payment;
