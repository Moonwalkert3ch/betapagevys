// src/App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SurveyProductPost from './components/SurveyProductPost'; // or wherever you place it

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/survey" element={<SurveyProductPost />} />
      </Routes>
    </Router>
  );
}

export default App;
