// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import ProjectCard from '../components/ui/ProjectCard';
// import { getProjects, getSingles, getFeats, clips, playlists } from '../data/music';

// export default function Home() {
//   const projects = getProjects();
//   const singles = getSingles();
//   const feats = getFeats();
//   const [scrolled, setScrolled] = useState(() => window.scrollY > 50);


//   useEffect(() => {
//     const handleScroll = () => {
//       const shouldBeScrolled = window.scrollY > 50;
//       if (shouldBeScrolled !== scrolled) {
//         setScrolled(shouldBeScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   const ScrollableSection = ({ title, link, children }: { title: string, link: string, children: React.ReactNode }) => (
//     <section className="mb-20">
//       <Link to={link} className="group">
//         <img 
//           src={`/src/assets/images/sections/${title.toLowerCase()}.png`}
//           alt={title}
//           className="h-12 w-auto mb-10 group-hover:opacity-80 transition-opacity" 
//         />
//       </Link>
      
//       <div className="relative">
//         <div className="overflow-x-auto pb-4 hide-scrollbar">
//           <div className="flex gap-6">
//             {children}
//           </div>
//         </div>
//       </div>
//     </section>
//   );

//   return (
//     <div className="py-6">
//       <div 
//         className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
//           scrolled 
//             ? 'top-[-8rem] scale-[0.25] z-50' 
//             : 'top-30 scale-[0.8] z-30'
//         }`}
//       >
//         <img 
//           src="./ressources/image/aulia.png"
//           alt="Artist Logo"
//           //className="h- w-48 object-cover rounded-full shadow-xl" 
//         />
//       </div>
      
//       <div className={`transition-all duration-500 ease-in-out ${scrolled ? 'mt-24' : 'mt-64'}`}>
//         {/* Projects Section */}
//         <ScrollableSection title="Projects" link="/projects">
//           {projects.map(project => (
//             <div key={project.id} className="w-[300px] flex-shrink-0">
//               <ProjectCard project={project} type="project" />
//             </div>
//           ))}
//         </ScrollableSection>
        
//         {/* Singles Section */}
//         <ScrollableSection title="Singles" link="/singles">
//           {singles.map(single => (
//             <div key={single.id} className="w-[300px] flex-shrink-0">
//               <ProjectCard project={single} type="project" />
//             </div>
//           ))}
//         </ScrollableSection>

//         {/* Feats Section */}
//         {/* <ScrollableSection title="Feats" link="/feats">
//           {feats.map(feat => (
//             <div key={feat.id} className="w-[300px] flex-shrink-0">
//               <ProjectCard project={feat} type="project" />
//             </div>
//           ))}
//         </ScrollableSection> */}

//         {/* Clips Section */}
//         <ScrollableSection title="Clips" link="/clips">
//           {clips.map(clip => (
//             <Link 
//               key={clip.id} 
//               to={`/clip/${clip.id}`}
//               className="w-[300px] flex-shrink-0 relative group"
//             >
//               <div className="aspect-square">
//                 <img 
//                   src={clip.thumbnailUrl} 
//                   alt={clip.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                   <h3 className="text-white text-xl font-bold">{clip.title}</h3>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </ScrollableSection>

//         {/* Playlists Section */}
//         <ScrollableSection title="Playlists" link="/playlists">
//           {playlists.map(playlist => (
//             <div key={playlist.id} className="w-[300px] flex-shrink-0">
//               <ProjectCard project={playlist} type="playlist" />
//             </div>
//           ))}
//         </ScrollableSection>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../components/ui/ProjectCard';
import { getProjects, getSingles, getFeats, clips, playlists } from '../data/music';



export default function Home() {
  const projects = getProjects();
  const singles = getSingles();
  const feats = getFeats();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 50);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (shouldBeScrolled !== scrolled) {
        setScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const ScrollableSection = ({ title, link, children }: { title: string, link: string, children: React.ReactNode }) => (
    <section className="mb-20">
      <Link to={link} className="group">
        <img 
          src={`/src/assets/images/sections/${title.toLowerCase()}.png`}
          alt={title}
          className="h-12 w-auto mb-10 group-hover:opacity-80 transition-opacity" 
        />
      </Link>
      <div className="relative">
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
  const ScrollableSectionwithoutlink = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-20">
      <img 
          src={`/src/assets/images/sections/${title.toLowerCase()}.png`}
          alt={title}
          className="h-12 w-auto mb-10 group-hover:opacity-80 transition-opacity" 
      />
      <div className="relative">
        <div className="overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
  
  return (
    <div className="py-6 relative">
    <div className="hidden lg:block home-left-bg"></div>

      {/* Logo statique en fond (dans le header) */}
      {/* <div className="absolute top-0 left-0 w-full flex justify-center z-10 pointer-events-none">
        <img
          src="/public/ressources/image/0.png"
          alt="Header Background Logo"
          className={`transition-opacity duration-500 ease-in-out mt-4 w-[100px] sm:w-[120px] ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div> */}

      {/* Logo animé principal */}
      <div
        className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'top-[-1.5rem] scale-50 sm:scale-30 z-50'
            : 'top-[30vh] scale-150 z-30'
        }`}
      >
        <div className="w-[200px] sm:w-[300px] mx-auto">
          <img
            src="./ressources/image/aulia.png"
            alt="Artist Logo"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className={`transition-all duration-500 ease-in-out ${scrolled ? 'mt-40' : 'mt-[45vh]'}`}>
        <ScrollableSection title="Projects" link="/projects">
          {projects.map(project => (
            <div key={project.id} className="w-[300px] flex-shrink-0">
              <ProjectCard project={project} type="project" />
            </div>
          ))}
        </ScrollableSection>

        <ScrollableSection title="Singles" link="/singles">
          {singles.map(single => (
            <div key={single.id} className="w-[300px] flex-shrink-0">
              <ProjectCard project={single} type="project" />
            </div>
          ))}
        </ScrollableSection>

        {/* Feats Section (facultatif) */}
        {/* <ScrollableSection title="Feats" link="/feats">
          {feats.map(feat => (
            <div key={feat.id} className="w-[300px] flex-shrink-0">
              <ProjectCard project={feat} type="project" />
            </div>
          ))}
        </ScrollableSection> */}

        <ScrollableSectionwithoutlink title="Clips">
          {clips.map(clip => (
            <Link 
              key={clip.id} 
              to={`/clip/${clip.id}`}
              className="w-[300px] flex-shrink-0 relative group"
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <img
                  src={clip.thumbnailUrl}
                  alt={clip.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{clip.title}</h3>
                </div>
              </div>

            </Link>
          ))}
        </ScrollableSectionwithoutlink>

        <ScrollableSectionwithoutlink title="Playlists">
          {playlists.map(playlist => (
            <div key={playlist.id} className="w-[300px] flex-shrink-0">
              <ProjectCard project={playlist} type="playlist" />
            </div>
          ))}
        </ScrollableSectionwithoutlink>
      </div>
    </div>
  );
}
