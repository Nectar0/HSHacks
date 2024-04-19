import React from 'react';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sponsors from "./components/sponsors/Sponsors"
import Homepage from './components/homepage/Homepage';
import HackathonMap from './components/homepage/HackathonMap';
import Schedule from './components/homepage/Schedule';
import ProjectsThemes from './components/homepage/ProjectsThemes';
import LandingScreen from './components/landing-screen/LandingScreen';
import Workshop from './components/workshops/Workshop';
import LastYear from './components/landing/lastYear/LastYear';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing-screen" element={<LandingScreen />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/homepage" element={<Homepage animated={true} />} />
        <Route path="/home" element={<Homepage animated={false} />} />
        <Route path="/last-year" element={<LastYear />} />
        <Route path="/school-map" element={<HackathonMap />} />
        <Route path="/live-schedule" element={<Schedule display={false} />} />
        <Route path="/live-schedule-screen" element={<Schedule display={true} />} />
        <Route path="/workshops/:workshopId" element={<Workshop />} />
        <Route path="/project-themes" element={<ProjectsThemes />} />
      </Routes>
    </div>
  );
}

export default App;
