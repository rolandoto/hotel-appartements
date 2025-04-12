import React, { useEffect }  from "react";
import Events from "../../Component/Events/Events";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import UseCart from "../../Hooks/UseCart";
import Cart from "../../Component/Cart/Cart";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";
import Usetitle from "../../Hooks/UseTitle";

const EventsNext =()  =>{
    Usetitle({title:"Próximos eventos en Medellín"})
    useEffect(() => {
        // Scrolls to the top of the document on component mount
        window.scrollTo(0, 0);
    }, []);

    const {getCartSubtotal} = UseCart()
    const subtotal = getCartSubtotal()
    return (<>
             <Header/>

               {subtotal >0 &&<Cart /> } 
               <div className="relative bg-cover bg-center h-[410px]" style={{ 
                backgroundImage: `url(https://grupo-hoteles.com/storage/app/10/rooms/283422645-48-rooms-slider-1-Habitacion-Superior-Hotel-en-Medellin-appartments.webp)`,}}>
                    <div className="absolute inset-0 "></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-lora">
                           Eventos
                        </h1>
                    </div>
                </div>
                <WhatsappButton />
            <Events />
            <Footer/>
        </>)

}

export default EventsNext