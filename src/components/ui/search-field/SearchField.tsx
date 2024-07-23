import React from 'react';

const SearchField: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative">
        <input
          type="text"
          className="w-64 pl-10 pr-4 py-2 text-gray-300 bg-gray-800 rounded-full focus:outline-none focus:bg-gray-700"
          placeholder="Search"
        />
        <svg
          className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.9 14.32a8 8 0 111.42-1.42l4.35 4.36a1 1 0 01-1.42 1.42l-4.35-4.36zm-6.9-6.9a6 6 0 1112 0 6 6 0 01-12 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchField;
