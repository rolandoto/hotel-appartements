import React from "react"


const TitleWelcome  =() =>{

    return (
            <div className="flex flex-col  mt-[260px] lg:mt-24  mx-auto max-w-7xl  md:flex-row items-center my-12 p-4">
               <div className="md:w-1/2 p-4">
               <img
                    src="https://grupo-hoteles.com/storage/app/10/rooms/823835062-47-rooms-slider-2-Habitacion-Familiar-Hotel-en-Medellin-appartments-slider-1.webp"
                    alt="Room"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                    </div>
                <div className="md:w-1/2 p-4 items-center justify-center flex flex-col">
                <img 
                        className="w-[200px]" 
                        src="https://github.com/rolandoto/image-pms/blob/main/Logo%20apartments%20.png?raw=true" 
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        />
                <p className="text-gray-700 text-justify	mt-4 mb-4">
                Relájate en nuestros espacios diseñados pensando en tu comodidad. Hotel Apartments Medellín te ofrece todo lo que necesitas para disfrutar de una estancia inolvidable: habitaciones modernas y luminosas, una piscina infinita con vistas panorámicas a la ciudad, un coworking ideal para trabajar o estudiar, y un restaurante que deleitará tu paladar con los mejores sabores locales.
                </p>
                
                </div>
            </div>)

}

export default TitleWelcome