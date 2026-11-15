import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import SpaceScene from './pages/SpaceScene';
import Destination from './pages/Destination';
import MissionIntro from './pages/MissionIntro';
import Journey from './pages/Journey';
import FinalChapter from './pages/FinalChapter';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/explore" element={<SpaceScene />} />
        <Route path="/explore/:destinationId" element={<Destination />} />
        <Route path="/mission/:missionId" element={<MissionIntro />} />
        <Route path="/mission/:missionId/journey/:stageNumber" element={<Journey />} />
        <Route path="/mission/:missionId/legacy" element={<FinalChapter />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </>
  );
}
