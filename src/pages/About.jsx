import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { CgPill } from 'react-icons/cg';
import { FaHeart } from 'react-icons/fa';
import { FaTooth } from 'react-icons/fa';
import { GiKidneys } from 'react-icons/gi';
import { IoEye } from 'react-icons/io5';
import { GiHealthNormal } from 'react-icons/gi';
import { LuSyringe } from 'react-icons/lu';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import plus and minus icons

const About = () => {
  const faqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Where does it come from?',
      answer:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
    {
      question: 'Is it safe to use?',
      answer:
        "Yes, Lorem Ipsum is safe to use and has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: 'Is it safe to use?',
      answer:
        "Yes, Lorem Ipsum is safe to use and has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: 'Is it safe to use?',
      answer:
        "Yes, Lorem Ipsum is safe to use and has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: 'Is it safe to use?',
      answer:
        "Yes, Lorem Ipsum is safe to use and has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: 'Is it safe to use?',
      answer:
        "Yes, Lorem Ipsum is safe to use and has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Calculate the number of columns
  const numColumns = 2;

  // Create rows by chunking the faqData array
  const faqRows = Array.from(
    { length: Math.ceil(faqData.length / numColumns) },
    (_, rowIndex) => {
      const startIndex = rowIndex * numColumns;
      const endIndex = startIndex + numColumns;
      return faqData.slice(startIndex, endIndex);
    }
  );
  const initialElements = [
    {
      id: 1,
      isExpanded: false,
      icon: <FaHeart className="text-blue-500" />,
      title: 'Cardiology',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      isExpanded: false,
      icon: <FaTooth className="text-blue-500" />,
      title: 'Dental',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      isExpanded: false,
      icon: <GiKidneys className="text-blue-500" />,
      title: 'Pulmonary',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      isExpanded: false,
      icon: <IoEye className="text-blue-500" />,
      title: 'Eye Care',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      isExpanded: false,
      icon: <GiHealthNormal className="text-blue-500" />,
      title: 'Endocrinology',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      isExpanded: false,
      icon: <LuSyringe className="text-blue-500" />,
      title: 'Orthopaedics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 7,
      isExpanded: false,
      icon: <FaHandHoldingMedical className="text-blue-500" />,
      title: 'Orthopaedics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 8,
      isExpanded: false,
      icon: <CgPill className="text-blue-500" />,
      title: 'Angioplasty',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more elements as needed
  ];

  const [elements, setElements] = useState(initialElements);

  const handleToggleExpand = (id) => {
    setElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id
          ? { ...element, isExpanded: !element.isExpanded }
          : element
      )
    );
  };

  return (
    <Layout>
      <div className="bg-gray-100 rounded-lg min-h-screen mx-2 px-0 my-0 lg:mx-20 lg:px-10 lg:my-6">
        <div className="container mx-auto py-12">
          <h1 className="text-xl font-bold text-center mb-2 tracking-widest uppercase">
            About Us
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Feel Like Home With Best Medical Care{' '}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {elements.map((element) => (
              <div key={element.id} className="flex flex-col items-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{element.icon}</div>
                  <h2 className="text-xl font-semibold mb-2">
                    {element.title}
                  </h2>
                  <p className="text-gray-600">{element.description}</p>
                  <button
                    className="flex items-center mt-2 text-black hover:underline focus:outline-none"
                    onClick={() => handleToggleExpand(element.id)}
                  >
                    <p>{element.isExpanded ? 'Read Less' : 'Read More'}</p>
                    <span className="ml-1 mt-1 text-white bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center">
                      {element.isExpanded ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {/* Additional content when expanded */}
                  {element.isExpanded && (
                    <div>
                      <p>
                        {/* Additional content goes here */}
                        More details...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="px-4 py-6 text-lg font-bold bg-white rounded-lg mb-10">
          FAQ
        </h1>
        <div className="grid mx-10 grid-cols-1 lg:grid-cols-2 gap-4">
          {faqRows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((faq, colIndex) => (
                <div key={colIndex} className="mb-6">
                  <div
                    className="flex justify-between items-center shadow-xl rounded-md bg-white p-3 cursor-pointer"
                    onClick={() =>
                      handleToggle(rowIndex * numColumns + colIndex)
                    }
                  >
                    <div className="flex justify-between items-center py-4 rounded-lg">
                      {faq.question}
                    </div>
                    <span className="mr-2 px-2 py-2 rounded-lg text-white">
                      {openIndex === rowIndex * numColumns + colIndex ? (
                        <>
                          <div className="bg-[#4A3AFF] mr-2 px-2 py-2 rounded-lg text-white">
                            <FaMinus />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-gray-200 mr-2 px-2 py-2 rounded-lg text-gray-400">
                            <FaPlus />
                          </div>
                        </>
                      )}
                    </span>
                  </div>
                  {openIndex === rowIndex * numColumns + colIndex && (
                    <div className="bg-white p-3 mt-[-32px]  py-8  rounded-md">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
