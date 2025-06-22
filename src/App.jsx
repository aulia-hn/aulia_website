import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Singles from './pages/Singles'
import ProjectDetail from './pages/ProjectDetail'
import AudioPlayer from './components/ui/AudioPlayer'
import { musicProjects } from './data/music'

function App() {
  const [currentTrack, setCurrentTrack] = useState(musicProjects[0].tracks[0])
  const [currentProject, setCurrentProject] = useState(musicProjects[0])

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white text-black">
        <Header />
        <div className="flex-grow flex pt-16">
          {/* Left sidebar - empty */}
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
            </Routes>
          </main>
          
          {/* Right sidebar - Player and lyrics */}
          <div className="hidden lg:flex lg:w-1/3 flex-col bg-white
            -50 p-6 fixed top-16 right-0 bottom-0 overflow-y-auto">
            <div className="sticky top-0">
              <AudioPlayer 
                tracks={currentProject.tracks}
                initialTrackIndex={currentProject.tracks.findIndex(t => t.id === currentTrack.id)}
                onTrackChange={(trackId) => {
                  const track = currentProject.tracks.find(t => t.id === trackId)
                  if (track) setCurrentTrack(track)
                }}
              />
            </div>
            
            <div className="mt-8">
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
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App