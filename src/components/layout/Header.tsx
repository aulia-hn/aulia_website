import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/75 backdrop-blur-sm h-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          {showBackButton && (
            <Link
              to="/"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Go to home page"
            >
              <ChevronLeft size={24} />
            </Link>
          )}
          
          {!showBackButton && <div className="w-10" />}
          
          {/* Empty div to maintain centering */}
          {showBackButton && <div className="w-10" />}
        </div>
      </div>
    </header>
  );
};

export default Header;