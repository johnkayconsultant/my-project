// import { Link } from "react-router-dom";
import { HeartHandshake } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { University } from 'lucide-react';
import { Earth } from 'lucide-react';
import Header from "@/components/Header";
import { CircleCheckBig } from 'lucide-react';


const services =[
         {icon: Building2,
          title:"Business Name Registration",
          description:"Register your business name with the Corporate Affairs Commission (CAC) quickly and professionally. We handle the entire registration process from start to finish.",
          features:["CAC Business Name Registration",
                    "Name Availability Search",
                    "Certificate Processing",
                    "Post-Registration Support",
               ],
            },

            {icon: BriefcaseBusiness,
              title: "Company Registration",
              description:
             "Incorporate your private limited company with expert guidance. We ensure all documentation is completed accurately and submitted on time.",
            features: [
                   "Private Limited Company",
                    "Company Name Reservation",
                      "CAC Certificate",
                  "Post-Incorporation Filing",
                ],
              },

               {
                icon: HeartHandshake,
              title: "NGO Registration",
               description:
               "Register your Non-Governmental Organization (Incorporated Trustees) with professional assistance, ensuring full compliance with CAC requirements.",
              features: [
                   "NGO Name Reservation",
                    "Trustee Registration",
                      "CAC Certificate",
                    "Compliance Guidance",
                   ],
                },

                {
                icon: University,
                title: "Facebook Ads Management",
                description:
                "Grow your business with targeted Facebook and Instagram advertising campaigns designed to generate quality leads and increase sales.",
                features: [
                  "Lead Generation Ads",
                  "Audience Targeting",
                  "Campaign Setup",
                  "Performance Optimization",
    ],
  },

                  {
                  icon: Earth,
                  title: "Digital Profiling",
                  description:
                    "Build a strong online presence for your business with professional digital profiling services that improve visibility and customer trust.",
                  features: [
                    "Google Business Profile",
                    "Business Email Setup",
                    "Social Media Setup",
                    "Brand Identity",
                  ],
                },
];

const Services = () => {
            return(
              <div className="min-h-screen bg-blue-400">
                <Header/>
                {/* hero section */}
                <section className="pt-32 pb-16 bg-amber-400">
                  <div className="Section Container">
                    <div className="text-center max-w-3xl mx-auto">
                  <span className="rounded-full font-bold inline-block px-4 py-2 ">Our Services</span>
                  <h1 className="text-4xl md:text-5xl ">Johnkay Consultant</h1>
                  <p className="py-3">
                    JOHNKAY CONSULTANT is a trusted business registration and digital consulting firm dedicated to helping entrepreneurs start, grow, and manage successful businesses in Nigeria.
                  </p>
                  </div>
                </div>
             </section>

                  {/* section grid */}
                  <section className="py-20 px-6">
                  <div className="section-container">
                    <div className="grid grid-cols-2 gap-8">
                    {services.map((services, index) => (
                        <div
                        key={index}
                        className="bg-card rounded-2xl p-8 hover:shadow-xl border">
                          
                    <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6">
                      <services.icon className="h-8 w-8"/>
                         </div>
                         <h3 className="text-2xl font-bold mb-4">{services.title}</h3>
                         <p>{services.description}</p>
                         <ul className="space-y-3">
                          {services.features.map((features,featuresIndex) =>(
                            <li key={featuresIndex} className="flex items-center gap-3">
                              <CircleCheckBig className="w-6 h-6"/>
                              <span className="text-foreground/80">{features}</span>

                            </li>
                          ))}
                         </ul>
                         </div>
                         ))}
                    </div>
                    
                   </div>
                </section>

                {/* cta section */}
                <section className="py-20 bg-gray-500">
                  <div className="text-center">
                      <h1 className="text-5xl md:8xl font-bold text-white">Ready to Get Started ?</h1>
                      <p className="text-2xl text-white mb-5">Contact us today to discuss how our services can help your business grow and succeed.</p>
                  </div>




                </section>
                </div>
            );
};
export default Services;