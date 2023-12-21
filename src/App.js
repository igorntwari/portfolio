import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import HelloPage from './pages/HelloPage.tsx';
import TestimonialsPage from './pages/TestimonialsPage.tsx'
import StackPage from './pages/StackPage.tsx';
import Contact from './pages/Contact.tsx';
import Home from './components/Home';
import ProjectsPages from './pages/ProjectsPage.tsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/stack" element={<StackPage />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path='Project' element = {<ProjectsPages />} />
      </Routes>
    </Router>
  );
}

export default App;
