import React from "react";
import { useNavigate } from "react-router-dom";

const CardRoomDetail =({features,image,title,price,id}) =>{

    const navigate = useNavigate();

    const handSubmitNextReservation =() =>{
        navigate("/Accomodation");
    }


    return (
            <div key={id} className="mt-20  p-6 rounded-lg relative ">
                
                <img
                        src={image}
                        alt={title}
                        className="w-full mt-8  lg:h-[250px]  h-[250px] sm:h-[400px] md:h-[500px]  object-cover rounded-3xl mb-4"
                    />
                    <h3 className=" words  text-[#004E45] text-[23px]  mb-4">{title}</h3>
                    <ul className="text-gray-700 h-[180px] text-left list-disc list-inside">
                    {features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                    <li >No incluye IVA</li>
                    </ul>        
                    <div className="PriceRoomDetail">
                        <div >
                            <strong className=" text-[20px] " >Desde ${parseInt(price).toLocaleString('es-CO')} cop</strong>
                        </div>
                        <button onClick={handSubmitNextReservation} className="text-white bg-[#004E45]  mt-4   w-[290px] md:w-[150px]  p-3 rounded hover:bg-[#004E45] "><span className=" text-[20px]" >Reservar</span></button>                  
                    </div>                  
            </div>
    )
}

export default CardRoomDetail