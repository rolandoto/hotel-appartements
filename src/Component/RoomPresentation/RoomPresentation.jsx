import React from "react";
import { useNavigate } from "react-router-dom";

const RoomPresentaion =() =>{
    const navigate = useNavigate();

    const HandNext = () =>{
        navigate("/Accomodation");
    }

    return (  <div className="bg-[#f2fff5] py-12 px-4">
                <div className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4 text-">
                    <h2 className="text-3xl font-normal text-center  text-green-500 text-[30px] font-lora ">Reserva tu habitación hoy mismo</h2>
                    <p className="text-gray-700 text-justify mt-8 mb-4">
                    Ubicado en una zona céntrica, Hotel Apartments ofrece la combinación perfecta entre confort y conveniencia. Cada una de nuestras habitaciones está equipada con todo lo que necesitas para sentirte como en casa: desde camas cómodas y modernas instalaciones, hasta Wi-Fi gratuito y televisión inteligente. Además, algunas habitaciones cuentan con cocinas totalmente equipadas, ideales para estancias más largas.
                    </p>
                    <p className="text-gray-700 text-justify mb-4">
                    Hotel Apartments está estratégicamente situado a solo unos pasos de las principales atracciones turísticas, restaurantes y bares de Medellín. Nuestra ubicación te permite explorar la ciudad con facilidad y disfrutar de todo lo que tiene para ofrecer.
                    </p>
                    <button onClick={HandNext}  className="text-white bg-green-500 mt-4  w-[200px] p-3 rounded hover:bg-green-600"><span className=" text-[20px]" >Reservar</span></button>
                </div>
                <div className="md:w-1/2 p-4">
                <img 
                    src="https://grupo-hoteles.com/storage/app/10/rooms/823835062-47-rooms-slider-2-Habitacion-Familiar-Hotel-en-Medellin-appartments-slider-1.webp" 
                    alt="Reservation" 
                    width="600" 
                    height="400" 
                    className="w-full rounded-lg shadow-lg" 
                />
                </div>
                </div>
            </div>)
  

}

export default RoomPresentaion