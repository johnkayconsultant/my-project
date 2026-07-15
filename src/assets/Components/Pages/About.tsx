import Header from "@/components/Header";
import Footer from "@/components/Footer";
import button from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users,Shield, TrendingUp, Target } from 'lucide-react';


const Stat = [
        {value:"8+", label:"Years of Experience"},
        {value:"98+", label:"Satisfaction"},
        {value:"500+", label:"Project Completed"},
        {value:"150+", label:"Expert Teams"},
        ];

const  value = [
          {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in every project, ensuring quality outcomes that exceed expectations.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honesty and transparency guide our business practices, building trust with every client partnership.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients and partners to deliver solutions that truly meet their needs.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Embracing new technologies and methods to stay ahead and provide cutting-edge solutions.",
  },

];

const About =()=>{
      return(
        <div className="min-h-screen bg-blue-900">
          <Header/>
          {/* background partern */}
       {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-green-600"/>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-900 rounded-full"/>


       </div> */}

                 {/* hero section */}

              <section className="pt-32 pt-16 bg-green-600">
                <div className="section hero">
                  <div className="text-center max-w-auto mx-auto">
                    <span className="text-white rounded-full text-2xl font bold m-6">ABOUT US</span>
                    <h1 className="text-4xl md:5xl mb-6 font bold text-blue-200">Digital Services Since 2014</h1>
                    <p className="text-xl px-40">JOHNKAY CONSULTANT is an entity that carries out all digital services that you can mention of, also we teaches how to learn and earn cac registration.</p>
                  </div>


                </div>

              </section>
        </div>

      
      )
}

export default About;