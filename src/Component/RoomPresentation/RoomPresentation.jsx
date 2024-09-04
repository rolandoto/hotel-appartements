import React from "react";
import { useNavigate } from "react-router-dom";

const RoomPresentaion =() =>{
    const navigate = useNavigate();

    const HandNext = () =>{
        navigate("/Accomodation");
    }

    return (  <div className="bg-[#004E45] py-12 px-4">
                <div className="container mx-auto max-w-7xl   flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4 text-">
                    <h2 className="text-3xl font-normal text-center  text-white text-[30px] font-lora ">Conecta con la naturaleza en el corazón de Medellín…
                    </h2>
                    <p className="text-white text-justify mt-8 mb-4">
                    Ubicado en una zona céntrica, Hotel Apartments ofrece la combinación perfecta entre confort y conveniencia. Cada una de nuestras habitaciones está equipada con todo lo que necesitas para sentirte como en casa: desde camas cómodas y modernas instalaciones, hasta Wi-Fi gratuito y televisión inteligente. Además, algunas habitaciones cuentan con cocinas totalmente equipadas, ideales para estancias más largas.
                    </p>
                    <p className="text-white text-justify mb-4">
                    Hotel Apartments está estratégicamente situado a solo unos pasos de las principales atracciones turísticas, restaurantes y bares de Medellín. Nuestra ubicación te permite explorar la ciudad con facilidad y disfrutar de todo lo que tiene para ofrecer.
                    </p>
                    <button onClick={HandNext}  className="text-white border w-[200px] p-3 rounded hover:border-none"><span className=" text-[20px]" >Reservar</span></button>
                </div>
                <div className="md:w-1/2 p-4">
                <img 
                    src="https://github.com/rolandoto/image-pms/blob/main/fachada%20(1).png?raw=true" 
                    alt="Reservation" 
                    width="600" 
                    height="400" 
                    className="w-full rounded-3xl  shadow-lg" 
                />
                </div>
                </div>
            </div>)
  

}

export default RoomPresentaion