import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import UseHotelActions from "../../Actions/useHotelsActions"

const HeaderCheckout =() =>{

    const {hotelList,loadingHotel,errorHotel}= useSelector((state) => state.Hotel)
    const {getListHotel} =UseHotelActions()

    const fetchDate =async() =>{
      await getListHotel()
    }
  
    useEffect(() =>{
      fetchDate()
    },[])

    const FindIdHotel=(hotel) =>{
        return hotel.id_hotel ==10
    }
    
    const hotel = hotelList.find(FindIdHotel) 
  
    const FillContent =()=>{
        if(loadingHotel){
                return <p>cargando</p>
        }

        if(errorHotel){
            return   <h1>Error en el servicio</h1>
        }

        return  hotel?.nombre
    }
  

    return ( <div className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url(https://grupo-hoteles.com/storage/app/10/rooms/283422645-48-rooms-slider-1-Habitacion-Superior-Hotel-en-Medellin-appartments.webp)` }}>
                <div className="absolute inset-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-normal">{FillContent}</h1>
                    <p className="mt-4 text-[30px] md:text-5xl font-normal">Gestiona tu reserva</p>
                </div>
            </div>)
}

export default HeaderCheckout