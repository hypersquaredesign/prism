import React from 'react';
import { Triangle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Triangle className="text-blue-500 mr-2" />
        <span className="text-2xl font-bold text-gray-800">PRISm</span>
        <span className="ml-2 text-sm text-gray-500">Reveal what's beyond the surface</span>
      </div>
    </header>
  );
};

export default Header;