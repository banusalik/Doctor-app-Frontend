import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-gray-600 mb-10">
            Oops! The page you are looking for might be under construction.
          </p>
          <Link
            to="/"
            className="mt-4 px-6 py-3 bg-btnColor text-white rounded-md hover:bg-blue-600"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
