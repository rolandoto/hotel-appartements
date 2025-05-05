import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header =({scrollToRoomSectionEvent}) =>{

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
            <nav className="  w-full z-40 items-center fixed p-3 lg:bg-gray-100  bg-gray-0  shadow-md">
                    <div  className="lg:flex hidden    mx-auto  items-center   justify-between   max-w-7xl" > 
                    <div className="text-3xl font-bold text-indigo-600">
                    <Link to="/">
                        <img 
                        className="w-[50px]" 
                        src="https://raw.githubusercontent.com/rolandoto/image-pms/refs/heads/main/Logo%20apartments%20.png" 
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        />
                    </Link>
                    </div>

                    <div className=" hidden lg:block   space-x-4">
                        <Link to="/" className="text-black cursor-pointer text-[16px] font-normal  "  >Inicio</Link>
                        <Link to="/Events" className="text-black cursor-pointer text-[16px] font-normal "   >Próximos eventos</Link>
                        <Link to="/Accomodation" className="text-black  cursor-pointer text-[16px] font-normal "  >Reservas</Link>
                    </div>
                    <div className="hidden lg:block " >
                        <a 
                         target="_blank"
                         href="https://www.google.com/maps/place/Cra.+44+%2347-2,+La+Candelaria,+Medell%C3%ADn,+La+Candelaria,+Medell%C3%ADn,+Antioquia/data=!4m2!3m1!1s0x8e442857010d3d3d:0x4a1527b0d0a1c02f?sa=X&ved=1t:242&ictx=111"
                        className="text-white  bg-[#004e45] w-[150px] p-4 rounded hover:text-white">Cómo llegar</a>
                    </div>

                    <div className="lg:hidden" >
                    <button
                        className="text-black focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                    </div> 
            </div>

           {menuOpen &&  <div className="lg:hidden flex flex-col mt-4 space-y-2">
                            <Link to="/" className="text-black text-[16px] font-normal  " >
                                Inicio
                            </Link>
                            <Link to="/Events" className="text-black text-[16px] font-normal  "  >
                                Próximos eventos
                            </Link>
                            <Link  to="/Accomodation" className="text-black text-[16px] font-normal  ]" >
                                Reservas
                            </Link>
                            <a  target="_blank"
                                href="https://www.google.com/maps/place/Cra.+44+%2347-2,+La+Candelaria,+Medell%C3%ADn,+La+Candelaria,+Medell%C3%ADn,+Antioquia/data=!4m2!3m1!1s0x8e442857010d3d3d:0x4a1527b0d0a1c02f?sa=X&ved=1t:242&ictx=111"
                                className="text-white bg-[#004E45] w-full p-4 rounded hover:bg-white-500"   
                            >
                                Cómo llegar
                            </a>
                        </div>
                }
        </nav>  
    )

}

export default Header