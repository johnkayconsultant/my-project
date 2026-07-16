import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import button from "@/components/ui/button";
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
       <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-green-600"/>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-900 rounded-full"/>
        </div>

                 {/* hero section */}

              <section className="pt-25 bg-green-600">
                <div className="section hero">
                  <div className="text-center max-w-auto mx-auto">
                    <span className="text-white rounded-full text-2xl font bold m-6">ABOUT US</span>
                    <h1 className="text-4xl md:5xl mb-6 font bold text-blue-200">Digital Services Since 2014</h1>
                    <p className="text-xl px-40">JOHNKAY CONSULTANT is an entity that carries out all digital services that you can mention of, also we teaches how to learn and earn cac registration.</p>
                  </div>

                         {/* stats section */}
                         <section className="py-20 bg-yellow-300">
                          <div className="section for stats">
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                              {Stat.map((Stat,index)=>(
                                <div key={index} className="text-center">
                              <div className="text-xl md:text-2xl font-bold mb-2">{Stat.label}
                                </div>
                            </div>
                              ))}
                            </div>
                          </div>
                      </section>

                      {/* story section */}
                      <section className="py-20">
                        <div className="bg-primary">
                          <div className="grid lg:grid-cols-2  gap-12 items-center">
                            <div>
                              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center px-6">The Story of Johnkay Consultant</h1>
                            </div>
                            <div className="space-y-4 text-muted-foreground">
                              <p>Johnkay Consultant was founded with one simple mission: to help entrepreneurs turn their business ideas into legally recognized and successful brands.</p>

                              <p>
                                What started as a passion for guiding people through business registration soon grew into a trusted consultancy serving startups, companies, NGOs, and established businesses across Nigeria. Many aspiring entrepreneurs had great ideas but struggled with CAC registration, tax compliance, digital presence, and business documentation. Johnkay Consultant stepped in to simplify the process.

Today, Johnkay Consultant provides professional services including CAC Business Registration, Company Incorporation, NGO Registration, SCUML Registration, TIN and Tax Registration, Trademark Registration, Annual Returns Filing, and Digital Business Profiling. Beyond registration, the company also empowers business owners through training, helping them understand compliance and build sustainable businesses.

Driven by integrity, professionalism, and customer satisfaction, Johnkay Consultant continues to support individuals and organizations in building credible, compliant, and successful businesses—one registration at a time.

                              </p>
                            </div>
                          </div>
                        </div>
                    </section>
                      
                      {/* value display */}
                      <section className="py-16 bg-white">
                        <div className="section-value">
                          <div className="text-center max-w-2xl max-auto font-bold text-blue-950 mb-16">
                            <h1 className="text-3xl md:text-4xl font-bold">Our Core Value</h1>
                            <p className="text-muted-foreground">
                            The principles that guide everything we do and how we serve our clients.
                           </p>
                          </div>
                          <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                            {value.map((value, index)=>(
                              <div
                              key={index}
                              className="bg-card rounded-xl p-6 text-center border"
                              >
                                <div className="h-14 w-14rounded-lg gradient-accent flex items-center justify-center mx-auto mb-4">
                                <value.icon className="w-7 h-7"/>

                                </div>
                                <h3 className="text-2xl">{value.title}</h3>
                                <p className="text-sm">{value.description}</p>
                                </div>
                         ))}
                        </div>
                         </div>
                      </section>

                    {/* CTA section */}
                    <section className="py-18 bg-brown-300">
                      <div className="text-center font-bold text-4xl md:5xl text-white">
                        <h1>Let Work Together</h1>
                        <p>Working with us will be a best idea and a good innovation, quality job will be delivered by <b>JOHNKAY CONSULTANT</b></p>
                        <Link to="/services">
                        <button className="py-3 bg-yellow-300 hover:cursor rounded-full w-40 h-20">services</button>
                        </Link>
                      </div>

                    </section>
                </div>

              </section>
              {/* <Footer/> */}
        </div>

      
      )
}

export default About;