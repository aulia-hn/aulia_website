import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Singles from './pages/Singles'
import ProjectDetail from './pages/ProjectDetail'
import ClipDetail from './pages/ClipDetail'
import AudioPlayer from './components/ui/AudioPlayer'
import { musicProjects } from './data/music'
import { ChevronUp } from 'lucide-react'

function App() {
  const [currentTrack, setCurrentTrack] = useState(musicProjects[0].tracks[0])
  const [currentProject, setCurrentProject] = useState(musicProjects[0])
  const [showLyrics, setShowLyrics] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white text-black">
        <Header />

        <div className="flex-grow flex pt-16">
          {/* Left sidebar */}
          <div className="hidden lg:block w-1/6 bg-white"></div>

          {/* Main content */}
          <main className="w-full lg:w-1/2 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/singles" element={<Singles />} />
              <Route 
                path="/project/:id" 
                element={
                  <ProjectDetail 
                    onTrackSelect={(track, project) => {
                      setCurrentTrack(track)
                      setCurrentProject(project)
                    }}
                  />
                } 
              />
              <Route path="/clip/:id" element={<ClipDetail />} />
            </Routes>
          </main>

          {/* Paroles sur desktop */}
          {!isMobile && (
            <div className="hidden lg:flex lg:w-1/3 flex-col bg-white
            -50 p-6 fixed top-16 right-0 bottom-0 overflow-y-auto">
              <h3 className="text-xl font-bold mb-4">{currentTrack.title} - Lyrics</h3>
              {currentTrack.lyrics ? (
                <pre className="font-sans text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
                  {currentTrack.lyrics}
                </pre>
              ) : (
                <p className="text-gray-500">No lyrics available for this track.</p>
              )}
            </div>
          )}
        </div>

        {/* Panel lyrics mobile */}

        {/* Une seule instance du lecteur */}

        {isMobile ? (
          <div className="fixed bottom-0 inset-x-0 z-50 bg-white border-t shadow-lg">
            {isMobile && (
          <>
            <div 
              className={`fixed inset-x-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                showLyrics ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ 
                top: 0,
                height: 'calc(100vh - 88px)',
                zIndex: -1
              }}
            >
              <div className="h-full overflow-y-auto p-6 bg-white pt-10">
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

            <button
              onClick={() => setShowLyrics(!showLyrics)}
              className="absolute bottom-[88px] left-1/2 transform -translate-x-1/2 bg-white rounded-t-lg px-4 py-2 shadow-lg border border-b-0 flex items-center space-x-2 z-50"
            >
              <span className="text-sm font-medium">Lyrics</span>
              <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${showLyrics ? 'rotate-180' : ''}`} />
            </button>
          </>
        )}
            <AudioPlayer
              tracks={currentProject.tracks}
              initialTrackIndex={currentProject.tracks.findIndex(t => t.id === currentTrack.id)}
              onTrackChange={(trackId) => {
                const track = currentProject.tracks.find(t => t.id === trackId)
                if (track) setCurrentTrack(track)
              }}
              compact={true}
            />
          </div>
        ) : (
          <div className="fixed top-16 right-0 w-1/3 z-50 bg-white border-l-[1.5px] border-black/40 shadow-l">
            <AudioPlayer
              tracks={currentProject.tracks}
              initialTrackIndex={currentProject.tracks.findIndex(t => t.id === currentTrack.id)}
              onTrackChange={(trackId) => {
                const track = currentProject.tracks.find(t => t.id === trackId)
                if (track) setCurrentTrack(track)
              }}
              compact={false}
            />
          </div>
        )}

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
