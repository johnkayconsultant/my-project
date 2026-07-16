import{useState} from "react";
import { MapPin, PhoneCall,Mail, Clock } from 'lucide-react';
// import{useToast} from "react-router-dom";
import Header from "@/components/Header";


const contactInfo=[
  {
    icon: MapPin,
    title:"Location",
    description:"suite 15, powa shopping complex ifo, ogun-state",
  },
  {
    icon:PhoneCall,
    title:"Phone Number",
    description:"[+2349058500368, +2349035224385]",
  },
  {
    icon:Mail,
    title:"Email",
    description:"johnkayconsultant@gmail.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description:"[ 24hours Services]"
  },

];

const Contact=()=>{
//    const {Toast}= useToast();
   const [FormData, setFormData]= useState({
    name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });

    const handleChange= (
          e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>
    )=>{
      setFormData({
        ...FormData,
        [e.target.name]: e.target.value,
      })};

      return(
          <div className="min-h-screen bg-blue-900">
            <Header/>
           
            // hero section
                <section className="pt-32 pb-16 bg-blue-600">
                    <div className="section-container">
                        <div className="text-3xl text-center">
                            <span>Contact Us</span>
                        </div>
                    </div>


                </section>
                
         </div> 
         
      
      
      
      );
};
export default Contact;