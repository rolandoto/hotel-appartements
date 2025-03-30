import React from "react"
import {  IconFaFacebookF, IconFaInstagram, IconFaMapMarkerAlt, IconFaWhatsapp, IconFaYoutube, IconsMdEmail } from "../Icons/Icons"
import pdf from "../../Image/APPARTMENTS.pdf"
import garantia from "../../Image/garantia.pdf"

const Footer =({PostHotelByIdHotel}) =>{

    const handleFacebook = () => {
        window.open("https://www.facebook.com/apartments.med", "_blank");
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/appartments.med", "_blank");
    };

    return (
            <footer className="bg-gray-100   text-black py-8">
                <div className="mx-auto max-w-7xl p-4  flex flex-col md:flex-row justify-between  md:items-center">
                <div className="block">
                    <img
                        src="https://github.com/rolandoto/image-pms/blob/main/Logo%20apartments%20.png?raw=true"
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        className="w-48 mb-4 m-auto "
                    />
                        <button
                            onClick={PostHotelByIdHotel}
                            className="m-auto  w-full px-8 py-4 bg-[#004E45] text-white  transition-colors">
                            Reservar
                        </button>
                </div>
            
                <div>
                    <div className="mt-6">
                        <ul className="space-y-2">
                            <li className="flex items-center"> <IconFaWhatsapp /> +57 301 779 01 17</li>
                            <li className="flex items-center mr-6">  <IconsMdEmail  color={"black"}/> reservas@appartments.com.co</li>
                            <li className="flex items-center"> <IconFaMapMarkerAlt/> Cra. 44 #47-02, La Candelaria, Medellín</li>
                        </ul>
                    
                    </div>
                    
                    <div className="w-[350px] lg:w-[280px] lg:w-122 " >
                            <div className="flex justify-center space-x-4 mt-4">
                                <IconFaInstagram     onclick={handleInstagram} />
                                <IconFaFacebookF  onclick={handleFacebook} />
                            </div>
                    </div>
                </div>
               
                <div className=" ">
                    <div class="bg-gray-100 text-black flex items-center justify-between ">
                        <div class="w-full max-w-md mt-6">
                            <h2 class="text-center text-xl font-semibold mb-6">Navegación</h2>
                            <div className="block" >
                                <ul>
                                    <li><a target="_blank" href={pdf} className="text-black"> Términos y Condiciones del sitio web</a>.</li>
                                    <li> <a target="_blank" href={garantia} className="text-black"> Política de garantía</a>.</li>
                                    <li>  <a target="_blank" className="text-black"> Política de tratamiento de datos</a>.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="text-center border-t-1  mx-auto max-w-7xl  text-black mt-8">
                    <div className=" flex  flex-col sm:flex-row  justify-between mt-8 mx-auto max-w-7xl items-center">
                            <div>
                            © Copyright. Todos los derechos reservados.
                            </div>
                          
                                    <div className=" ">
                                    <div className="flex space-x-4">
                                    <img 
                                        src="https://github.com/rolandoto/image-pms/blob/main/payment.png?raw=true" 
                                        alt="Métodos de pago" 
                                        width="200" 
                                        height="100" 
                                    />
                                    </div>
                            </div>
                        </div>
                </div>
            </footer>
    )
}
export default Footer