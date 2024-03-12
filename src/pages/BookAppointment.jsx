import Layout from '../components/Layout/Layout';
import doctor from '../assets/doctor.jpg';
import { BiSolidHide } from 'react-icons/bi';
import { BiShowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import KhaltiCheckout from 'khalti-checkout-web';

const BookAppointment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [visitTime, setVisitTime] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setVisitTime(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, department, visitTime);
  };

  const config = {
    // replace this key with yours
    publicKey: 'test_public_key_dc74e0fd57cb46cd93832aee0a390234',
    productIdentity: '1234567890',
    productName: 'Drogon',
    productUrl: 'http://gameofthrones.com/buy/Dragons',
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log('widget is closing');
      },
    },
    paymentPreference: [
      'KHALTI',
      'EBANKING',
      'MOBILE_BANKING',
      'CONNECT_IPS',
      'SCT',
    ],
  };

  const checkout = new KhaltiCheckout(config);

  const handlePaymentButtonClick = () => {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 1000 });
  };
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className=" lg:max-w-[70%]  p-8 gap-x-4 rounded-lg shadow-md flex flex-col md:flex-row">
          {/* Left Side (Image and Description) */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={doctor}
              alt="Your Image"
              className="w-full h-auto max-h-[60vh] rounded-lg mb-4"
            />

            <h2 className="font-bold">Dr. Shyam Bhattarai</h2>
            <p className="text-gray-700">Dental Specialist</p>
            <p className=" overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est
              recusandae quos itaque ratione modi repudiandae quas dolorum
              aliquam animi obcaecati tempora atque veniam aperiam optio
              excepturi, vitae rem non!
            </p>
          </div>

          {/* Right Side (Form) */}
          <div className="md:w-1/2 md:pl-8 bg-gray-300 rounded-lg">
            <h2 className="text-center font-bold mb-12 mt-8 text-2xl">
              Book Appointment
            </h2>
            <form
              type="submit"
              onSubmit={formSubmit}
              className="flex flex-col w-[80%] mx-auto bg-white rounded-lg p-4 pb-0"
            >
              {/* Name Field */}
              <label className="text-gray-700 mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-md px-3 py-2 mb-4"
                onChange={handleNameChange}
                required
              />

              {/* Email Field */}
              <label className="text-gray-700 mb-2" htmlFor="email">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md px-3 py-2 mb-4"
                onChange={handleEmailChange}
                required
              />

              {/* Date*/}
              <label className="text-gray-700 mb-2" htmlFor="date">
                Date{' '}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="border rounded-md px-3 py-2 mb-4"
                onChange={handleDateChange}
                required
              />

              {/* Time Field */}
              <label className="text-gray-700 mb-2" htmlFor="time">
                Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="border rounded-md px-3 py-2 mb-4"
                onChange={handleTimeChange}
                required
              />
              {/* Submit Button */}
            </form>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-blue-500 w-[70%] text-white px-4 py-2 mt-8 mb-6 lg:mb-4 rounded-md hover:bg-blue-600 transition duration-300"
                id="payment-button"
                onClick={handlePaymentButtonClick}
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookAppointment;
