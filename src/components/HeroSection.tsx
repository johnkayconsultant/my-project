import Hero from "@/assets/Hero.png";
import { LaptopMinimal } from 'lucide-react';
import {Link} from "react-router-dom";
import button from "./ui/button";

const HeroSection=()=>{
    return(
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

            {/* add background image */}
            <div className="inset-0 z-0 absolute">
                <img 
                src={Hero}
                alt="Johnkay home"
                 className="w-full h-full object-fit"/>
                 <div className="absolute bg-overlay inset-0"/>
                </div>

                {/* insert text on the image */}
                <div className="relative z-10">
                    <div className="grid lg: grid-cols-2 gap-12 items-center">
                        {/* now the context */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 py-2 px-4  rounded-full animate-fade-in">
                                 <LaptopMinimal className="w-5 h-5 text-blue-800" />
                                 <span className="text-shadow-mauve-700  font-bold text-amber-300 ">Your trusted Consult
                                </span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-500 animate-fade-in px-7 "
                                style={{animationDelay: "0.1"}}>WELCOME TO 
                                <span> JOHNKAY CONSULTANT</span>
                                </h1>
                                <p className="text-lg max-w-xl text-cream/70 px-7 text-gray-100 font-extrabold">
                                    At Johnkay Consultant, we are committed to making business registration and compliance simple, fast, and stress-free. With expertise in CAC services, tax registration, trademark registration, and digital profiling, we provide professional solutions that empower businesses to succeed.
                                </p>
                                <Link to="/Services">
                                <button className="size-xl px-7 text-2xl text-amber-500">
                                    Explore Our Service</button>
                                </Link>
                                <Link to="/Contact">
                                <button className="text-xl text-amber-300">
                                    Contact
                                </button>
                                </Link>

                                {/* stat segment */}
                                <div className="grid grid-cols-3 px-8 gap-6 border-t">
                                    <div>
                                        <div className="text-3xl font-bold text-green-300">500+</div>
                                        <div className="text-white text-2xl">Completed Jobs</div>
                                        </div>

                                    <div>
                                        <div className="text-3xl font-bold text-green-300">3years+</div>
                                    <div className="text-white text-2xl">Experience</div>
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">
                                        <div className="px-4">100</div>
                                        <div>Global Partner</div>
                                    </div>

                                  {/* visual display element     */}
                                </div>
                        </div>
                    </div>
                    </div>

        </section>
        );
};
export default HeroSection;