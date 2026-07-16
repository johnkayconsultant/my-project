import button from "./ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
const ContactSection=()=>{
        return(
                <section className="py-32 bg-white">
                    {/* context */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <span className="inline-block text-amber font-semibold text-sm uppercase tracking-wider mb-4">OUR CONTACT</span>
                            <h1>Let's Build {" "}
                                <span>Your Business Globally</span>
                            </h1>
                        </div>
                        <p className="text-muted-foreground text-lg">
                Ready to start your next project? Get in touch with our team 
                for a consultation and free quote.
              </p>
             </div>

                    {/* phone */}
             <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              </div>


                    {/* email  */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">johnkayconsultant@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl">
                    <MapPin className="w-5 h-5"/>
                </div>
                <div>
                    <h4 className="font-bold">Headquater</h4>
                    <p>Suite 15, powa shopping complex, ifo, ogun-state.</p>
                </div>

              </div>

                </section>
        
        
        
        )
    }
export default ContactSection;