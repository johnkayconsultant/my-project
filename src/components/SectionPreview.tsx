import { Link } from "react-router-dom";
import button from "./ui/button";
import { Building2 } from 'lucide-react';

const sectionFeatures= [{
    icon: Building2,
    title: "Business registration",
    description: "welcome to johnkay consult where life is easier"
    },
    {
    icon: Building2,
    title: "Business registration",
    description: "welcome to johnkay consult where life is easier"
    },
    {
    icon: Building2,
    title: "Business registration",
    description: "welcome to johnkay consult where life is easier"
    
},

]



const SectionPreview =()=>{
    return(
            <section className="py-24 bg-background">
                <div className="container-section">
                    {/* the section header */}
                    <div className="text-center mb-16 mx-auto">
                        <span>What to do</span>

                    </div>

                </div>


            </section>
    );
};
export default SectionPreview;