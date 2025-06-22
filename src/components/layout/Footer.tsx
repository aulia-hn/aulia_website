import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { text: 'instagram', url: 'https://instagram.com' },
    { text: 'soundcloud', url: 'https://soundcloud.com' },
    { text: 'youtube', url: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-white py-8 text-gray-600 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-red-500 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
          
          <div className="text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Artist Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;