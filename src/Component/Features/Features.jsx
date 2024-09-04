import React from "react"
import CardFeatures from "../CardFeatures/CardFeatures"
import { FaHotel } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const Features =({features}) =>{


    /**
     * 
     * {features.map((feature, index) => (
                        <CardFeatures   
                                {...feature} 
                                key={index}
                    />
                    ))}
     * 
     */

                    /**
                     * 
                     * 
                     
                        <div className="flex flex-col space-y-4">
                            <div className="bg-green-800 text-white rounded-lg p-4 flex items-center space-x-4">
                            <div className="bg-white text-green-800 rounded-full p-2">
                                <img src="/path-to-icon" alt="Check-in" className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">CHECK IN</h3>
                                <p>A partir de las 3:00pm</p>
                                <p className="text-sm">(early check in sujeto a disponibilidad)</p>
                            </div>
                            </div>

                            <div className="bg-green-800 text-white rounded-lg p-4 flex items-center space-x-4">
                            <div className="bg-white text-green-800 rounded-full p-2">
                                <img src="/path-to-icon" alt="Check-out" className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">CHECK OUT</h3>
                                <p>Hasta la 1:00 pm</p>
                                <p className="text-sm">(late check out sujeto a disponibilidad)</p>
                            </div>
                            </div>
                        </div>
                     * 
                     */

    return  (<div className="my-12 text-center mx-auto max-w-7xl">
                <h2 className="text-3xl font-normal text-center  text-[#004E45]   mb-8">Tu hogar en el centro de Medellín</h2>
                    <div className=" lg:grid block grid-cols-3 p-6 md:p-6 md:grid-cols-3 gap-6">
                        <div className="bg-[#e9d4b3] flex  p-6 items-start rounded-lg shadow-md ">
                            <div className=" bg-white  h-12 rounded-full p-2 mr-4">
                                    <FaHotel fontSize={30} color="#004E45" />
                            </div>
                            <div className=" flex-col flex items-start ">
                                <h2 className="text-lg font-bold">Tipos de habitación</h2>
                                <ul className="text-start space-y-1 text-gray-500">
                                        <li>Estandar (2 per)</li>
                                        <li>Superior (2 per)</li>
                                        <li>Twin (2 per)</li>
                                        <li>Familiar (Max 4 por apto.)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#e9d4b3] lg:mt-0   mt-3  flex p-6 items-start rounded-lg shadow-md ">
                            <div className=" bg-white  h-12 rounded-full p-2 mr-4">
                                    <FaHotel fontSize={30} color="#004E45"  />
                            </div>
                            <div className=" flex-col flex items-start ">
                                <h2 className="text-lg font-bold">Servicios</h2>
                                <ul className="text-start space-y-1 text-gray-500">
                                        <li>Piscina</li>
                                        <li>Coworking</li>
                                        <li>Restaurante</li>
                                        <li>Sauna</li>
                                </ul>
                            </div>
                        </div>

                        <div className=" items-start  rounded-lg flex flex-col justify-between  ">
                                <div className="bg-[#004E45] lg:mt-0   mt-3 p-1 flex  items-center rounded-lg shadow-md ">
                                    <div className=" bg-white  h-12 rounded-full p-2 mr-4">
                                            <FaClock fontSize={30} color="#004E45"  />
                                    </div>
                                    <div className=" flex-col flex items-start ">
                                        <h2 className="text-lg font-lora text-white">Check in</h2>
                                        <ul className="text-start space-y-1 text-white">
                                                <li>A partir de las 3:00pm</li>
                                                <li>(early check in sujeto a disponibilidad)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-[#004E45] lg:mt-0   mt-3 p-1 flex  items-center rounded-lg shadow-md ">
                                    <div className=" bg-white  h-12 rounded-full p-2 mr-4">
                                            <FaClock fontSize={30} color="#004E45"  />
                                    </div>
                                    <div className=" flex-col flex items-start ">
                                        <h2 className="text-lg font-lora  text-white ">Check out</h2>
                                        <ul className="text-start space-y-1 text-white">
                                                <li>Hasta la 1:00 pm</li>
                                                <li>(les’t check out sujeto a disponibilidad)</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
    )

}
export default Features 