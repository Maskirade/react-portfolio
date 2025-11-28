import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Profile from './components/profile';
import Skills from './components/skills';
import Resume from './components/resume';
import Qualifications from './components/qualifications';
import Projects from './components/projects';

function App() {
  return (
    <div className="min-h-screen gradient-bg text-white font-sans">
      {/* Header: Home button and contact info */}
      <Header />
      
      {/* Main content grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side: Intro */}
          <Intro />
          
          {/* Right side: Profile and Name */}
          <Profile />
        </div>
        
        {/* Horizontal sections: Skills, Resume, Qualifications */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-12">
          <Skills />
          <Resume />
          <Qualifications />
        </div>
        
        {/* Projects below */}
        <Projects />
      </div>
    </div>
  );
}

export default App;