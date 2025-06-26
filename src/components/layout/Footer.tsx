import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'instagram', url: 'https://www.instagram.com/aulia._hn/?hl=fr', icon: '/public/ressources/image/logo/instagram.svg' },
    { name: 'soundcloud', url: 'https://soundcloud.com/aulia11', icon: '/public/ressources/image/logo/soundcloud_bw.svg' },
    { name: 'youtube', url: 'https://www.youtube.com/@aulia_hn', icon: '/public/ressources/image/logo/youtube.svg' },
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
                className="hover:opacity-75 transition-opacity"
              >
                <img src={link.icon} alt={link.name} className="h-6 w-6" />
              </a>
            ))}
          </div>
          
          <div className="text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Aulia. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
