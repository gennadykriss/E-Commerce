import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage    from './pages/HomePage';
import NotFoundPage    from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
    </BrowserRouter>
  );
}
