
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import EmiCalculator from './components/EmiCalculator';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Application from './components/Application';
import LoanApproval from './components/LoanApproval';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
      <div className='mb-20'>
      <Navbar />
      </div>
        
        <main className="flex-grow">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calculator" element={<EmiCalculator />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/application" element={<Application />} />
            <Route path="/loan-approval" element={<LoanApproval />} />
            
            

          </Routes>
      
        </main>
      </div>
    </Router>
  );
};

export default App;
