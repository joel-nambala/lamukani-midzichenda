import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// Component imports
import Navigation from './components/Navigation';
import Home from './components/Home';
import Features from './components/Features';
import Campaign from './components/Campaign';
import News from './components/News';
import Footer from './components/Footer';
import Donate from './components/Donate';
import Team from './components/Team';

// Features imports
import Events from './Features/Events';
import Mission from './Features/Mission';
import Support from './Features/Support';
import Volunteer from './Features/Volunteer';

// Causes
import Military from './Causes/Military';
import Family from './Causes/Family';
import Sponsor from './Causes/Sponsor';
import Child from './Causes/Child';

// Posts imports
import Hope from './Posts/Hope';
import Disability from './Posts/Disability';
import Jobs from './Posts/Jobs';
import LoveOlderPeople from './Posts/LoveOlderPeople';
import WaterChangesEverything from './Posts/WaterChangesEverything';

const App = function () {
  return (
    <div className="app">
      <Navigation />
      <Routes>
        {/* Components routing */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/news" element={<News />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/team" element={<Team />} />

        {/* Causes */}
        <Route path="/support-military-families" element={<Military />} />
        <Route path="/family-support-program" element={<Family />} />
        <Route path="/sponsor-an-orphan-child" element={<Sponsor />} />
        <Route path="/child-protection-program" element={<Child />} />

        {/* Features routing */}
        <Route path="/missions" element={<Mission />} />
        <Route path="/events" element={<Events />} />
        <Route path="/support" element={<Support />} />
        <Route path="/volunteer" element={<Volunteer />} />

        {/* Posts routing */}
        <Route path="/hope-for-everyone" element={<Hope />} />
        <Route
          path="/disability-is-not-the-end-of-your-career"
          element={<Disability />}
        />
        <Route path="/jobs-for-disabled-people" element={<Jobs />} />
        <Route
          path="/give-love-to-older-people"
          element={<LoveOlderPeople />}
        />
        <Route
          path="/water-changes-everything"
          element={<WaterChangesEverything />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
