import React from "react"


const TitleWelcome  =() =>{

    return (
            <div className="flex flex-col  mt-[260px] lg:mt-24  mx-auto max-w-7xl  md:flex-row items-center my-12 p-4">
               <div className="md:w-1/2 p-4">
               <img
                    src="https://raw.githubusercontent.com/rolandoto/image-pms/refs/heads/main/_MG_0188%20(1).jpg"
                    alt="Room"
                    className="w-full h-[700px] rounded-3xl shadow-lg"
                />
                    </div>
                <div className="md:w-1/2 p-4 items-center justify-center flex flex-col">
                <img 
                        className="w-[200px]" 
                        src="https://raw.githubusercontent.com/rolandoto/image-pms/refs/heads/main/Logo%20apartments%20.png" 
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        />
                <p className="text-gray-700 text-justify	mt-4 mb-4">
                Ubicado en el centro de la ciudad de Medellín, nuestro hotel es el destino perfecto para quienes buscan una estancia de calidad en un ambiente moderno y acogedor. Ya sea que nos visites por turismo médico, en familia o para una estancia prolongada, te ofrecemos un espacio diseñado para tu confort. Disfruta de nuestra piscina de borde infinito con vistas impresionantes de la ciudad, una zona de coworking ideal para quienes necesitan trabajar mientras viajan, y una arquitectura que respeta y convive con la naturaleza. ¡Tu experiencia en la ciudad de la eterna primavera comienza aquí!
                </p>
                
                </div>
            </div>)

}

export default TitleWelcome