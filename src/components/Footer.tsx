import {Link, useLocation} from "react-router-dom";
import { Building2 } from "lucide-react";
import Services from "@/assets/Components/Pages/Services";

const Footer =()=>{
    const currentYear = new Date ().getFullYear(); 

const footerLinks= {
    Services:[
           {label:"Business Name Registration",href: "/services"},
           {label:"Company Registration",href: "/services"},
           {label:"NGO Registration",href: "/services"},
           {label:"Facebook Ads Management", href: "/services"},
           {label:"Digital Profiling", href: "/services"},
    ],
    company: [
        {label:"About us", href:"/about"},
        {label:"Contact", href:"/contact"},
        {label:"Our service", href:"/service"},
        ],

    support: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Terms of Service", href: "/" },
    ],
};

return(
    <footer className="bg-green-500 text-white">
        <div className="section-footer py-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                {/* brand */}
                <div className="space-y-6">
                    <Link to= "/services" className="flex gap-3 items-center">
                    <div className="w-24 h-20 rounded-lg gradient-accent flex items-center justify-center">
                        <span className="text-blue-900 font-bold text-xl">JK</span>
                    </div>
                    <div className="flex  flex-col items-center justify-between">
                        <span className="text-cream font-bold text-xl hidden sm:block"> JOHNKAY </span>
                        <span className="text-xl font-bold">CONSULTANT</span>
                        </div>
                    </Link>
                    <p className="text-sm">Your trusted partner in business registration, ngo registration, facebook ads, company registration, and all other digital profiling since <b>2024</b>.</p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl items-center justify-center flex
                       ">
                         <Building2 className="w-8 h-8"/>
                       </div>
                       <div className="text-xl">
                        <div className="font-semi-bold">Professional services</div>
                        </div> 
                    </div>

                    {/* SERVICES SECTION */}
                    <div className="font-bold text-cream mb-6">Services</div>

                </div>

            </div>


        </div>
</footer>



);
};
export default Footer;