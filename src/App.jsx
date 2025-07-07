import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import {HomePage}    from './pages/HomePage';
import NotFoundPage    from './pages/NotFoundPage';
import SurveyPage from './pages/SurveryPage';
import SearchPage from './pages/SearchPage';
import BagPage from './pages/BagPage';

export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="bag" element={<BagPage />} />
          </Routes>
    </BrowserRouter>
  );
}
