import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
// import Contact from "./Contact";
import ContactSection from "@/components/ContactSection";

const Home=()=> {
  
    return (
        <div className="bg-background min-h-screen">
    <Header/>
    <HeroSection/>
    <ContactSection/>
    <Footer/>
    {/* <Contact/> */}
   
    
    </div>
  );
};

export default Home