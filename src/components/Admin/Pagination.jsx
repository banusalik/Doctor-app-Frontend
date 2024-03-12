import React from 'react';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => onPageChange(i)}
          className={`cursor-pointer px-3 py-2 border ${
            i === currentPage ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  const renderPrevButton = () => {
    if (currentPage === 1) {
      return null; // No prev button on the first page
    }
    return (
      <span
        onClick={() => onPageChange(currentPage - 1)}
        className="cursor-pointer px-3 py-2 border bg-white"
      >
        Prev
      </span>
    );
  };

  const renderNextButton = () => {
    if (currentPage === totalPages) {
      return null; // No next button on the last page
    }
    return (
      <span
        onClick={() => onPageChange(currentPage + 1)}
        className="cursor-pointer px-3 py-2 border bg-white"
      >
        Next
      </span>
    );
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{' '}
        entries
      </div>
      <div>
        {renderPrevButton()}
        {renderPageNumbers()}
        {renderNextButton()}
      </div>
    </div>
  );
};
export default Pagination;
