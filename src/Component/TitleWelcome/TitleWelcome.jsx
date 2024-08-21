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
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-normal text-green-500 mb-4 font-lora text-[30px] text-center ">¡Bienvenido a Hotel Apartments! Más que un apartamento, un espacio de comodidad.</h2>
                <p className="text-gray-700 text-justify	 mb-4">
                Ubicado en una zona privilegiada, Hotel Apartments te ofrece un hogar lejos de casa. Nuestros apartamentos combinan elegancia y confort, proporcionando un espacio ideal tanto para estancias cortas como largas. Equipados con todas las comodidades modernas, nuestros apartamentos te permiten disfrutar de la privacidad y el confort que necesitas durante tu viaje.
                </p>
                <p className="text-gray-700 text-justify	 ">
                Ya sea que estés aquí por negocios o por placer, Hotel Apartments te asegura una experiencia relajante en un entorno acogedor y contemporáneo. Con fácil acceso a las principales atracciones y servicios de la ciudad, nuestros apartamentos son la opción ideal para quienes buscan un equilibrio entre comodidad y conveniencia.
                </p>
                </div>
            </div>)

}

export default TitleWelcome