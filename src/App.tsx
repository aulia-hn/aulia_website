import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Singles from './pages/Singles';
import Feats from './pages/Feats';
import Playlists from './pages/Playlists';
import ProjectDetail from './pages/ProjectDetail';
import ClipDetail from './pages/ClipDetail';
import AudioPlayer from './components/ui/AudioPlayer';
import { ChevronUp } from 'lucide-react';
import { musicProjects } from './data/music';

function App() {
  const [currentTrack, setCurrentTrack] = useState(musicProjects[0].tracks[0]);
  const [currentProject, setCurrentProject] = useState(musicProjects[0]);
  const [showLyrics, setShowLyrics] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white text-black">
        <Header />
        
        {/* Main content */}
        <main className="flex-1 pt-16 pb-[88px] lg:pb-0 px-4 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/singles" element={<Singles />} />
            <Route path="/feats" element={<Feats />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route 
              path="/project/:id" 
              element={
                <ProjectDetail 
                  onTrackSelect={(track, project) => {
                    setCurrentTrack(track);
                    setCurrentProject(project);
                  }}
                />
              } 
            />
            <Route path="/clip/:id" element={<ClipDetail />} />
          </Routes>
        </main>

        {/* Desktop player */}
        <div className="hidden lg:block lg:fixed lg:top-16 lg:right-0 lg:w-1/3 lg:bottom-0 bg-white border-l-[1.5px] border-black/40 shadow-l">    
          <div className="sticky top-0 bg-white">
            <AudioPlayer 
              tracks={currentProject.tracks}
              initialTrackIndex={currentProject.tracks.findIndex(t => t.id === currentTrack.id)}
              onTrackChange={(trackId) => {
                const track = currentProject.tracks.find(t => t.id === trackId);
                if (track) setCurrentTrack(track);
              }}
            />
          </div>
          
          <div className="p-6 bg-white border-t">
            <h3 className="text-xl font-bold mb-4">{currentTrack.title} - Lyrics</h3>
            {currentTrack.lyrics ? (
              <pre className="font-sans text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
                {currentTrack.lyrics}
              </pre>
            ) : (
              <p className="text-gray-500">No lyrics available for this track.</p>
            )}
          </div>
        </div>

        {/* Mobile/Tablet player */}
        <div className="lg:hidden fixed inset-x-0 bottom-0 z-50">
          {/* Lyrics panel */}
          <div 
            className={`fixed inset-x-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
              showLyrics ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ 
              height: 'calc(100vh - 88px)',
              bottom: '88px'
            }}
          >
            <div className="h-full overflow-y-auto p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">{currentTrack.title} - Lyrics</h3>
              {currentTrack.lyrics ? (
                <pre className="font-sans text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
                  {currentTrack.lyrics}
                </pre>
              ) : (
                <p className="text-gray-500">No lyrics available for this track.</p>
              )}
            </div>
          </div>

          {/* Lyrics toggle button */}
          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-t-lg px-4 py-2 shadow-lg border border-b-0 flex items-center space-x-2"
          >
            <span className="text-sm font-medium">Lyrics</span>
            <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${showLyrics ? 'rotate-180' : ''}`} />
          </button>

          {/* Audio player */}
          <div className="bg-white border-t shadow-lg">
            <AudioPlayer 
              tracks={currentProject.tracks}
              initialTrackIndex={currentProject.tracks.findIndex(t => t.id === currentTrack.id)}
              onTrackChange={(trackId) => {
                const track = currentProject.tracks.find(t => t.id === trackId);
                if (track) setCurrentTrack(track);
              }}
              compact
            />
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Singles from './pages/Singles';
// import Feats from './pages/Feats';
// import Playlists from './pages/Playlists';
// import ProjectDetail from './pages/ProjectDetail';
// import ClipDetail from './pages/ClipDetail';
// import AudioPlayer from './components/ui/AudioPlayer';
// import { ChevronUp } from 'lucide-react';
// import { musicProjects } from './data/music';

// function AppContent() {
//   const [currentTrack, setCurrentTrack] = useState(musicProjects[0].tracks[0]);
//   const [currentProject, setCurrentProject] = useState(musicProjects[0]);
//   const [showLyrics, setShowLyrics] = useState(false);

//   const location = useLocation();
//   const isHome = location.pathname === '/';
//   const [hasScrolled, setHasScrolled] = useState(() => !isHome);

//   useEffect(() => {
//     if (!isHome) {
//       setHasScrolled(true);
//       return;
//     }

//     const handleScroll = () => {
//       setHasScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isHome]);

//   return (
//     <div className="flex flex-col min-h-screen bg-white text-black">
//       <Header />

//       <main className="flex-1 pt-16 pb-[88px] lg:pb-0 px-4 max-w-5xl mx-auto">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/singles" element={<Singles />} />
//           <Route path="/feats" element={<Feats />} />
//           <Route path="/playlists" element={<Playlists />} />
//           <Route
//             path="/project/:id"
//             element={
//               <ProjectDetail
//                 onTrackSelect={(track, project) => {
//                   setCurrentTrack(track);
//                   setCurrentProject(project);
//                 }}
//               />
//             }
//           />
//           <Route path="/clip/:id" element={<ClipDetail />} />
//         </Routes>
//       </main>

//       {/* Sidebar (visible après scroll sur la homepage) */}
//       {hasScrolled && (
//         <div className="hidden lg:block lg:fixed lg:top-16 lg:right-0 lg:w-1/3 lg:bottom-0 bg-white border-l-[1.5px] border-black/40 shadow-l">
//           <div className="sticky top-0 bg-white">
//             <AudioPlayer
//               tracks={currentProject.tracks}
//               initialTrackIndex={currentProject.tracks.findIndex(
//                 (t) => t.id === currentTrack.id
//               )}
//               onTrackChange={(trackId) => {
//                 const track = currentProject.tracks.find((t) => t.id === trackId);
//                 if (track) setCurrentTrack(track);
//               }}
//             />
//           </div>

//           <div className="p-6 bg-white border-t">
//             <h3 className="text-xl font-bold mb-4">{currentTrack.title} - Lyrics</h3>
//             {currentTrack.lyrics ? (
//               <pre className="font-sans text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
//                 {currentTrack.lyrics}
//               </pre>
//             ) : (
//               <p className="text-gray-500">No lyrics available for this track.</p>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Mobile/Tablet player */}
//       <div className="lg:hidden fixed inset-x-0 bottom-0 z-50">
//         {/* Lyrics panel */}
//         <div
//           className={`fixed inset-x-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
//             showLyrics ? 'translate-y-0' : 'translate-y-full'
//           }`}
//           style={{
//             height: 'calc(100vh - 88px)',
//             bottom: '88px',
//           }}
//         >
//           <div className="h-full overflow-y-auto p-6 bg-white">
//             <h3 className="text-xl font-bold mb-4">{currentTrack.title} - Lyrics</h3>
//             {currentTrack.lyrics ? (
//               <pre className="font-sans text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
//                 {currentTrack.lyrics}
//               </pre>
//             ) : (
//               <p className="text-gray-500">No lyrics available for this track.</p>
//             )}
//           </div>
//         </div>

//         {/* Toggle button */}
//         <button
//           onClick={() => setShowLyrics(!showLyrics)}
//           className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-t-lg px-4 py-2 shadow-lg border border-b-0 flex items-center space-x-2"
//         >
//           <span className="text-sm font-medium">Lyrics</span>
//           <ChevronUp
//             className={`w-4 h-4 transition-transform duration-300 ${
//               showLyrics ? 'rotate-180' : ''
//             }`}
//           />
//         </button>

//         {/* Audio player */}
//         <div className="bg-white border-t shadow-lg">
//           <AudioPlayer
//             tracks={currentProject.tracks}
//             initialTrackIndex={currentProject.tracks.findIndex(
//               (t) => t.id === currentTrack.id
//             )}
//             onTrackChange={(trackId) => {
//               const track = currentProject.tracks.find((t) => t.id === trackId);
//               if (track) setCurrentTrack(track);
//             }}
//             compact
//           />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }
