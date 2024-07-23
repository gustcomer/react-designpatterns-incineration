import React from 'react';
import SearchField from '@/components/ui/search-field/SearchField';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-4xl text-white mb-8">Welcome to the Search Page</h1>
      <SearchField />
    </div>
  );
};

export default Page;