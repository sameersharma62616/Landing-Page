
import AboutPage from "../pages/AboutPage";
import ClientSection from "../pages/ClientSection";
import ContactForm from "../pages/ContactForm";
import HeroSection from "../pages/HeroSection";
import Newsletter from "../pages/Newsletter";
import ProjectSection from "../pages/ProjectSection";
import Footer from "./Footer";
import Navbar from "./Navbar";


function HomePage() {
  return (
    <>
      <Navbar />
      
        <HeroSection />
     

      
        <AboutPage />
      

      
        <ProjectSection />
      

      
        <ClientSection />
      

      
        <ContactForm />
      

      
        <Newsletter />
      

      
        <Footer />
     
    </>
  );
}

export default HomePage;