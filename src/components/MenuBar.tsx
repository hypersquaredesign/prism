import React from 'react';
import { Compass, Search, Grid2X2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MenuBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-around items-center">
        <Button variant="ghost" size="icon">
          <Compass className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Grid2X2 className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};

export default MenuBar;