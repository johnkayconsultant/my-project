import{useState} from "react";
import {Menu, X} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SquareArrowRight } from 'lucide-react';


const Header=()=>{
    const [isMenuOpen, setIsMenuOpen] =  useState(false);
     const location = useLocation();

     const navLinks =[
                 {label: "Home", href: "/"},
                 {label:"Services", href:"/services"},
                 {label:"Contact", href:"/contact"},
                 {label:"About", href:"/about"},
                 {label:"Notfound", href:"*"},
                ];
            const isActive = (href:string)=>{
                if (href==="/") return location.pathname==="/";
                return location.pathname.startsWith(href);
                 };

            return(
                <header className="fixed top-0 right-0 left-0 z-50 bg-amber-600 border-b">
                    <div className="container-section">
                        <div className="flex items-center justify-between h-10">
                            {/* logo */}
                            <Link to="/" className="flex items-center gap-3">
                            <div className="w-24 h-20 items-center justify-center rounded-lg flex text-green-500">
                            <span className="font-bold text-xl text-blue-500">JK</span>
                            </div>
                            {/* for the text */}
                            <div className="flex flex-col items-center justify-between">
                                <span className="hidden sm:block text-xl font-bold text-green-600">JOHNKAY CONSULTANT</span>
                                </div>
                            </Link>
                            </div>
                           

                            {/* FOR DESKTOP  */}
                            <nav className="hidden md:flex items-center justify-center gap-8">
                                {navLinks.map((items)=>(
                                    <Link
                                    key={items.label}
                                    to= {items.href}
                                    className={`font-medium transition-colors duration-300 ${isActive(items.href)
                                        ? "text-blue-400"
                                        : "text-amber-200 hover:text-amber-900"
                                        }`}
                                    >{items.label}
                                    </Link>
                                    ))}

                                    {/* CTA BUTTON */}
                                    <div className="hidden md:block">
                                        <Link to="/contact">
                                            <div className="flex items-center gap-2">
                                         <span>CONTACT US</span>
                                         <SquareArrowRight size={18} />
                                            </div>
                                        </Link>
                                        </div>
                                        </nav>

                                {/* mobile toggle to close and open */}
                            
                            <SquareArrowRight 
                               className="md:hidden text-amber-300 p-2"
                               onClick={()=> setIsMenuOpen (!isMenuOpen)}
                                aria-label="Toggle menu">
                                    {isMenuOpen ? <X size={24}/> :<Menu size={24}/>} 
                                </SquareArrowRight>




                            {/* mobile display mode */}
                            {isMenuOpen && (
                                <nav className="md:hidden py-4 border-t animate-fade-in">
                                    <div className="flex flex-col gap-4">
                                        {navLinks.map((items)=>(
                                            <Link
                                            key={items.label}
                                            to ={items.href}
                                            className={`font-medium py-2 transition-colors ${isActive(items.href)
                                                ? "text-blue"
                                                : "text-green-500 hover:text-amber-200"
                                             }`}
                                             onClick={()=> setIsMenuOpen(false)}
                                            > {items.label}

                                            </Link>
                                        ))}

                                        <Link to ="/contact" onClick={()=>setIsMenuOpen(false)}>
                                        <div className="flex items-center gap-2">
                                          <span>CONTACT US</span>
                                         <SquareArrowRight size={18} />
                                            </div>
                                        </Link>
                                    </div>
                          
                                </nav>
                           
                            )}  
                    </div>
                </header>
                   );
                };
    
export default Header;
