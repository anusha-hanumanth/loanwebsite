import Home from './Home';
import About from './About';
import Services from './Services';
import EmiCalculator from './EmiCalculator';
import Faq from './Faq';
import Contact from './Contact'
import Footer from './Footer';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    
    <div className="min-h-screen">
     {/* <Navbar /> */}
 <Home />
<About />
<Services />
<EmiCalculator />
<Faq />
<Contact />
   <Footer/>
    </div>
  );
};

export default HomePage;
