import React from 'react';
import Layout from '../components/Layout/Layout';
import doctor from '../assets/doctor.jpg';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
const DoctorDetails = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-20 mb-20 bg-base-100 shadow-xl">
        <div className="flex flex-col lg:flex-row">
          <figure className="w-full lg:w-1/2">
            <img src={doctor} alt="doctor img" />
          </figure>
          <div className="card-body mt-20 p-4 lg:w-1/2">
            <h2 className="card-title text-2xl font-bold">Dr. Shyam Bahadur</h2>
            <h3 className="card-title text-base font-normal">
              Detail Specialist
            </h3>
            <h3 className="card-title text-base font-bold">
              Qualification: <span className="font-normal">BDS,MDS</span>
            </h3>
            <h3 className="card-title text-base font-bold mb-6">
              Specialist: <span className="font-normal">BDS,MDS</span>
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              quidem earum excepturi. Qui quasi eveniet nulla incidunt repellat
              vel ab magni earum. Quibusdam doloribus iure ut.
            </p>
            <div className="card-actions justify-end">
              <button className="bg-btnColor btn text-white hover:bg-blue-600">
                <Link to="/book-appointment">Appointment</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Rating className="" />
    </Layout>
  );
};

export default DoctorDetails;
