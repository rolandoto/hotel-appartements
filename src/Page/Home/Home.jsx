import React, { useCallback, useEffect, useRef, useState } from "react"
import UseCalenderSearch from "../../Hooks/UseCalenderSearch";
import { DateRange } from 'react-date-range';
import esLocale from 'date-fns/locale/es';
import Search from "../../Component/Search/Search";
import {useNavigate } from "react-router-dom";
import Header from "../../Component/Header/Header";
import CalenderSearchHome from "../../Component/CalenderSearch/CalenderSearchHome";
import TitleWelcome from "../../Component/TitleWelcome/TitleWelcome";
import Features from "../../Component/Features/Features";
import Footer from "../../Component/Footer/Footer";
import AccordionAsk from "../../Component/AccordionAsk/AccordionAsk";
import Events from "../../Component/Events/Events";
import RoomDetail from "../../Component/RoomDetail/RoomDetail";
import RoomPresentaion from "../../Component/RoomPresentation/RoomPresentation";
import "./home.css"
import { IconRiCloseLargeLine, IconsFaBanSmoking, IconsFaConciergeBell, IconsFaGlassMartini, IconsFaSquareParking, IconsFaStore, IconsGiForkKnifeSpoon, IconsRiBankFill, IconsaCar } from "../../Component/Icons/Icons";
import 'react-date-range/dist/styles.css'; // import the default styles
import 'react-date-range/dist/theme/default.css'; // import the default theme
import moment from 'moment';
import 'moment/locale/es';
import UseCart from "../../Hooks/UseCart";
import Cart from "../../Component/Cart/Cart";
import UseHotelActions from "../../Actions/useHotelsActions";
import { useSelector } from "react-redux";
import WhatsappButton from "../../Component/WhatsappButton/WhatsappButton";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const Home =() =>{
  const navigate = useNavigate();
  moment.locale('es');
  
  useEffect(() => {
    // Scrolls to the top of the document on component mount
    window.scrollTo(0, 0);
}, []);

  const {getCartSubtotal} = UseCart()
  const {hotelList,loadingHotel,errorHotel}= useSelector((state) => state.Hotel)
  const {getListHotel} =UseHotelActions()

  const fetchDate =async() =>{
    await getListHotel()
  }

  useEffect(() =>{
    fetchDate()
  },[])

  const FillContent =()=>{
    if(errorHotel){
      return   <h1>Error en el servicio</h1>
              }
  }

  const FindIdHotel=(hotel) =>{
		return hotel.id_hotel ==10
	}
	
	const hotel = hotelList.find(FindIdHotel)


const subtotal = getCartSubtotal()


/**
 * 
 * <div className="max-w-6xl md:p-0 p-8 mx-auto py-8">
     <h2 className=" text-left  md:text-[30px] text-[25px] text-blue-900  font-lora  mb-6">¿Buscas un lugar cómodo y seguro para tu viaje a Medellín? </h2>


     <p class="text-[15px] text-left text-gray-700 leading-relaxed  mx-auto max-w-7xl">
 Nuestro hotel en el centro de la ciudad es la opción ideal para turistas médicos, viajeros de larga estancia y familias. Ofrecemos habitaciones amplias, servicios personalizados y una ubicación estratégica cerca de todo lo que necesitas. ¡Disfruta de tu estancia en la ciudad de la eterna primavera!
     </p>
     <div className="relative mt-8 w-full max-w-6xl mx-auto overflow-hidden">
     <div
       className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
     >
       <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-auto object-cover" />
       <div className="  absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
         <div className="max-w-4xl mx-auto" >
         <h2 className="text-2xl font-bold">{slides[currentSlide].title}</h2>
         <p className="mt-2  md:text-[20px] text-[10px] ">{slides[currentSlide].description}</p>
         </div>
       
       </div>
     </div>


     <button
       onClick={handlePrev}
       className="absolute left-4 top-1/2 text-[70px] transform -translate-y-1/2  text-white p-2 rounded-full "
     >
       &#8249;
     </button>
     <button
       onClick={handleNext}
       className="absolute right-4 top-1/2  text-[70px] transform -translate-y-1/2  text-white p-2 rounded-full "
     >
       &#8250;
     </button>
     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
       {slides.map((_, idx) => (
         <span
           key={idx}
           onClick={() => setCurrentSlide(idx)}
           className={`block w-2 h-2 rounded-full ${
             idx === currentSlide ? 'bg-white' : 'bg-gray-400'
           } cursor-pointer`}
         />
       ))}
     </div>
   </div>
   </div>
      

 * 
 */

  const reviews = [

    {
      id: 1,
      name: "Robinson Vasquez",
      date: "hace un mes",
      rating: 4,
      text: "Un ambiente tranquilo, buena ubicación!",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Robinson(3).png?raw=true", // Add the path to the avatar image if available
    },
    {
      id: 2,
      name: "Bárbara Pérez",
      date: "hace un mes",
      rating: 5,
      text: "",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Cielo.png?raw=true", // Add the path to the avatar image if available
    },
    {
      id: 3,
      name: "Esleidy Largo",
      date: "",
      rating: 5,
      text: "",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/Esleidy(3).png?raw=true", // Add the path to the avatar image if available
    },
   
    {
      id: 4,
      name: "IMPORT JHEYSSI SAS",
      date: "hace 5 meses",
      rating: 5,
      text: "Un poquito lejos del centro, sobre la iluminación es perfecta para descansar y la ubicación estratégica para encender las luces por zonas me parece muy bueno para el precio! Más amabilidad es lo único que podría pedir, con esto no digo que son groseros, mejor dicho son intermedio! 👍",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/importadora(2).png?raw=true",
    },
    {
      id: 5,
      name: "Angie gil",
      date: "hace un mes",
      rating: 5,
      text: "Es un lugar muy agradable, con un restaurante encantador, buena atención al cliente, las habitaciones aseadas y ordenadas; el único defecto es que las habitaciones no cuentan con agua caliente y no hay TV por cable, pero por lo demás todo está súper bien.      ",
      avatar: "https://github.com/rolandoto/image-pms/blob/main/angie(2).png?raw=true",
    }
  ];
  
  const features = [
    { icon: <IconsFaGlassMartini/>, title: 'Cóctel de bienvenida' },
    { icon: <IconsGiForkKnifeSpoon/>, title: 'Desayuno incluido' },
    { icon: <IconsFaConciergeBell/>, title: 'Recepción 24 horas' },
    { icon: <IconsaCar/>, title: 'Variedad de transporte', description: 'Metro, tranvía, autobús, taxi' },
    { icon: <IconsGiForkKnifeSpoon/>, title: 'Restaurante - Bar  ', description: ' con vista panorámica' },
    { icon: <IconsFaStore/>, title: 'Alianzas comerciales', description: 'Servicio de taxi, gimnasio, tours, médico, comunicaciones.' }
  ];

      const roomSectionRef = useRef(null);
      const roomEventsSectionRef = useRef(null);

      const scrollToRoomSection = () => {
        if (roomSectionRef.current) {
            roomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  

    const scrollToRoomSectionEvent = () => {
      if (roomEventsSectionRef.current) {
          roomEventsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

      const [contextShowMenuPeople, setContextShowMenuPeople] = useState(false);
      const {handleSelect,state,
            setContextMenuPosition,
            contextMenuPosition,
            handChangeAdults,
            handChangeChildrem,
            handDecreaseAdults,
            handDecreaseChildren,
            totalCountAdults,
            adults,
            childrem ,
            getClassNameForDate } =  UseCalenderSearch()
        
      
    const formattedStartDateToString = moment(state?.[0]?.startDate ?? '').format('DD MMM YYYY').toLowerCase();

    const formattedEndDateToString = moment(state?.[0]?.endDate ?? '').format('DD MMM YYYY').toLowerCase();
    
    const PostHotelByIdHotel = useCallback(async () => {
      setContextMenuPosition(false);
      navigate("/Accomodation");
    }, []);

    const HandClickMenuPeople =() =>{
      if(contextShowMenuPeople){
        setContextShowMenuPeople(false)
      }else if(!contextShowMenuPeople){
        setContextShowMenuPeople(true)
      }
      setContextMenuPosition(false)
    }
  
    const HandClickMenu =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }
       
  
    const HandClickMenuEnd =() =>{
      if(contextMenuPosition){
        setContextMenuPosition(false)
      }else if(!contextMenuPosition){
        setContextMenuPosition(true)
      }
      setContextShowMenuPeople(false)
    }             

    const hotelReferid = [
      {
        description: "Viaje de Negocios",
        image: 'https://github.com/rolandoto/image-pms/blob/main/Logos/47street.jpg?raw=true', // Replace with actual image URL
        url: 'https://47medellinstreethotel.com/',
      
      },
      {
        description: "Viaje romántico en pareja",
        image: 'https://github.com/rolandoto/image-pms/blob/main/MG_8648-scaled.jpg?raw=true', // Replace with actual image URL
        url: 'https://galleryhotel.co/',
      },
      {
        description: "Viaje Turismo de Salud",
        image: 'https://github.com/rolandoto/image-pms/blob/main/_MG_0188%20(1).jpg?raw=true', // Replace with actual image URL
        url: 'https://appartments.com.co/',
      }
    ];
  
    const testimonials = [
      {
        name: 'Monika Aguilar',
        image: 'https://github.com/rolandoto/image-pms/blob/main/unnamed%20(3).png?raw=true', // Replace with actual image URL
        feedback: 'El hotel es muy lindo, habitaciones tal como las fotos el servicio muy amable',
      },
      {
        name: 'Marisol Andrea Arenas Gonzalez',
        image: 'https://github.com/rolandoto/image-pms/blob/main/unnamed%20(4).png?raw=true', // Replace with actual image URL
        feedback: 'Habitaciones cómodas, excelente servio del personal siempre están dispuestos a colaborar en lo que más se necesite.',
      },
      {
        name: 'Luisa Fernanda Padilla Ciro',
        image: 'https://github.com/rolandoto/image-pms/blob/main/unnamed%20(5).png?raw=true', // Replace with actual image URL
        feedback: 'Excelente lugar para descansar, tiene lindas vistas, personal altamente calificado a el servicio, habitaciones limpias y cómodas, excelente espacio para ir a pasar un rato agradable.',
      },
    ];

    const faqs = [
      {
        question: '¿Cuáles son los sitios turísticos de la ciudad y si están cerca al hotel?',
        answer: (
          <ul className="list-disc list-inside">
            <li>Teatros (3 a 9 min caminando)</li>
            <li>Museo de Antioquia</li>
            <li>Plaza Botero</li>
            <li>Jardín Botánico de Medellín</li>
            <li>Parque Lleras</li>
            <li>Comuna 13</li>
          </ul>
        ),
      },
      {
        question: '¿Cómo es la seguridad del sector? ¿se puede salir en la noche?',
        answer: 'La seguridad del sector es buena, pero siempre se recomienda tomar precauciones normales como en cualquier ciudad. Es seguro salir en la noche, especialmente en áreas concurridas y turísticas.',
      },
      {
        question: '¿Cuáles son los mejores centros comerciales de la ciudad de Medellín?',
        answer: (
          <ul className="list-disc list-inside">
            <li>Centro Comercial Santa Fe</li>
            <li>Centro Comercial El Tesoro</li>
            <li>Centro Comercial Oviedo</li>
            <li>Centro Comercial Premium Plaza</li>
          </ul>
        ),
      },
      {
        question: '¿Dónde puedo cambiar divisas?',
        answer: 'Puede cambiar divisas en casas de cambio ubicadas en centros comerciales, en el aeropuerto, y en diversas partes del centro de la ciudad.',
      },
    ];

    const rooms = [
      {  title: 'Room Estandar', price:120000 , image:"https://grupo-hoteles.com/storage/app/10/rooms/1174471989-45-rooms-slider-1-estandar4.jpeg", 
          features:  ["Smart TV","Wi-Fi","Microondas","Escritorio","Wi-Fi","Cocina"] },
      { title: 'Room Superior ',price:130000, image: "https://grupo-hoteles.com/storage/app/10/rooms/283422645-48-rooms-slider-1-Habitacion-Superior-Hotel-en-Medellin-appartments.webp", 
        features:['Smart TV',"Wi-Fi","Aire acondicionado","Cocina" ] },
      { title: 'Room Twin',price:142000, image: "https://grupo-hoteles.com/storage/app/10/rooms/1470384104-46-rooms-slider-1-Habitacion-Twin-Hotel-en-Medellin-appartments.webp", 
      features: ['Smart TV', 'Wi-Fi',"Cocina"] },
      { title: 'Room Familiar ',price:230000, image: "https://grupo-hoteles.com/storage/app/10/rooms/578074716-47-rooms-slider-1-Habitacion-Familiar-Hotel-en-Medellin-appartments.webp", 
      features:['Wi-Fi', 'Smart TV',"Ventiladores de Techo","Cocina"] }
    ];

    const monthsToShow = window.innerWidth >= 700 ? 2 : 1; // Cambia 768 según tu punto de ruptura deseado


    /**
     *     <div className="max-w-7xl mx-auto py-8">
              <h2 className="text-[30px] text-center text-orange-500  font-lora  mb-6">Lo que opinan nuestros clientes</h2>
              <div className="block md:flex" >
                    <div className="flex items-center justify-center ">
                      <div className="max-w-sm p-6">
                        <div className="flex items-center">
                          <img
                            className="w-12 h-12 rounded-full"
                            src="https://github.com/rolandoto/image-pms/blob/main/2020-06-27.jpg?raw=true"
                            alt="Hotel"
                          />
                          <div className="ml-4">
                            <h2 className="text-lg font-semibold">Gallery Hotel Medellín</h2>
                            <div className="flex items-center">
                              <span className="text-orange-500 text-lg font-bold">4.0</span>
                              <div className="flex ml-1">
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">Basado en 600 reseñas.</p>
                            <p className="text-sm text-gray-500 mt-2">powered by <span className="text-gray-700 font-semibold">Google</span></p>
                          </div>
                        </div>
                        <a target="_blank" href="https://www.google.com/search?hl=en-CO&gl=co&q=Gallery+Hotel+Medell%C3%ADn,+Cl.+47+%2341-55,+La+Candelaria,+Medell%C3%ADn,+La+Candelaria,+Medell%C3%ADn,+Antioquia&ludocid=13557792269951917256&lsig=AB86z5Xi3QsXtAp5vxVbKW_n47sq#lrd=0x8e4428575a0dc0d1:0xbc26f43cbd055cc8,3" className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center">

                          valóranos en <span className="ml-1 font-semibold"><svg viewBox="0 0 512 512" height="18" width="18"><g fill="none" fill-rule="evenodd"><path d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z" fill="#4285f4"></path><path d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z" fill="#34a853"></path><path d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z" fill="#fbbc05"></path><path d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z" fill="#ea4335"></path><path d="M20 20h472v472H20V20z"></path></g></svg></span>
                        </a>
                      </div>
                            </div>
              <div className="flex overflow-x-scroll space-x-4">
                {reviews.map((review) => (
                  <div key={review.id} className="min-w-[250px] max-w-[250px] p-4 bg-white shadow rounded-lg">
                    <div className="flex items-center space-x-2 mb-4">
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((star, index) => (
                        
                        <svg className={`w-5 h-5  ${index < review.rating ?" text-orange-500" :"text-gray-300"} `} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.455c.969 0 1.371 1.24.588 1.81l-3.6 2.61a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.54 1.118l-3.6-2.61a1 1 0 00-1.176 0l-3.6 2.61c-.784.57-1.838-.197-1.54-1.118l1.374-4.223a1 1 0 00-.364-1.118l-3.6-2.61c-.783-.57-.381-1.81.588-1.81h4.455a1 1 0 00.95-.69l1.374-4.223z" />
                      </svg>
                       
                      ))}
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>


            </div>
          </div>

     * 
     */



          const [currentSlide, setCurrentSlide] = useState(0);
const [fade, setFade] = useState(true); // Estado para manejar la opacidad

const handlePrev = () => {
  setFade(false); // Inicia el efecto de desvanecimiento
  setTimeout(() => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    setFade(true); // Restaura la opacidad después de cambiar el slide
  }, 500); // Espera 500ms antes de cambiar el slide para completar el fade-out
};

const handleNext = () => {
  setFade(false); // Inicia el efecto de desvanecimiento
  setTimeout(() => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    setFade(true); // Restaura la opacidad después de cambiar el slide
  }, 500); // Espera 500ms antes de cambiar el slide para completar el fade-out
};
 const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


 const slides = [
  {
    title: 'Viaje en familia',
    description: "Nuestro hotel en el corazón de Medellín te ofrece pequeños apartamentos ideales para familias, equipados con cocina, nevera y todas las comodidades que necesitas para sentirte como en casa. ",
    description1:" Vive una experiencia inolvidable mientras exploras la ciudad, con el espacio y confort perfectos para tu estancia. ¡Tu hogar lejos de casa te espera!",
    image: 'https://github.com/rolandoto/image-pms/blob/main/Dueto/Familia-viajera.jpg?raw=true',
  },
  {
    title: 'Turismo Médico',
    description: 'Si vienes a Medellín por motivos de turismo médico, nuestro hotel es la elección ideal. Estamos cerca de las principales clínicas y centros de salud de la ciudad, y te ofrecemos un ambiente tranquilo y cómodo para tu recuperación. ',
    description1:" Además, nuestras instalaciones están diseñadas para proporcionar el descanso y la atención que necesitas durante tu proceso de recuperación    ",
    image: 'https://github.com/rolandoto/image-pms/blob/main/Dueto/Turis-Medico.jpg?raw=true',
  },
  {
    title: 'Viajes de larga duración    ',
    description: 'Si planeas una estancia prolongada, nuestro hotel te ofrece todo lo que necesitas para sentirte como en casa. ',
    description1:"Con instalaciones diseñadas para hacer tu vida más cómoda, una ubicación ideal para explorar la ciudad, y servicios que cubren todas tus necesidades, seremos tu hogar lejos de casa durante todo el tiempo que necesites.    ",
    image: 'https://github.com/rolandoto/image-pms/blob/main/Dueto/Viejo-F.jpg?raw=true',
  },
  // Add more slides as needed
];

const [currentIndex, setCurrentIndex] = useState(0);

  // función para avanzar
  const nextSlide = () => {
    if (currentIndex < rooms.length - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // función para retroceder
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

    return (
        <div>
          {FillContent}
           <Header  scrollToRoomSectionEvent={scrollToRoomSectionEvent}   />
           <div className="relative bg-cover bg-center  h-[650px]" style={{ 
                backgroundImage: `url(https://github.com/rolandoto/image-pms/blob/main/Piscina.jpg?raw=true)`,}}>
              <div className="absolute inset-0  bg-black opacity-30  "></div>
              <div className="relative lg:p-4 p-4 text-center max-w-5xl m-auto z-10 flex flex-col items-initial justify-center h-full  text-white">
                  <h1 className="text-4xl text-center text-left md:text-6xl lg:text-6xl font-lora">
                    {loadingHotel ?"cargando " :hotel?.nombre}  
                  </h1>
                  <p className="mt-2  text-center text-base md:text-xl lg:text-3xl font-lora font-normal">
                  Hotel en el centro de Medellín en armonía con la naturaleza
                  </p>
                  <div className="w-full flex justify-center" >
                      <button className="mt-6 text-center border border-2 w-40 text-white px-6 py-3  " onClick={scrollToRoomSection}>
                          Reservar
                      </button>
                  </div>
              </div>
          </div>

          {subtotal >0 &&<Cart    /> } 
            <CalenderSearchHome HandClickMenuPeople={HandClickMenuPeople} 
                                 formattedStartDateToString={formattedStartDateToString}
                                 formattedEndDateToString={formattedEndDateToString}
                                  HandClickMenuEnd={HandClickMenuEnd}
                                  HandClickMenu={HandClickMenu}
                                  onsubmit={PostHotelByIdHotel}
                                  totalCountAdults={totalCountAdults}/>

          <div className="hidden lg:block  ">
              {contextMenuPosition && (
                <DateRange
                  className="flex  calender-search-home lg:hidden"
                  rangeColors={["rgb(255 104 0 / 36%);"]}
                  minDate={new Date()}
                  onChange={handleSelect}
                  editableDateInputs={false}
                  months={2}
                  dayContentRenderer={(date) => {
                    const className = getClassNameForDate(date);
                  
                    return (
                      <div className={className}>
                        {date.getDate()}
                      </div>
                    );
                  }}
                  autoFocus
                  moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                  showSelectionPreview={false} // Muestra la selección previa
                  startDatePlaceholder="Early"
                  showDateDisplay={false}
                  ranges={state}
                  direction="horizontal"
                  locale={esLocale}
                />
              )}
            </div>
          {contextMenuPosition &&
              <div class="  lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50  md:shadow-[17px_20px_40px_rgba(0,0,0,0.21)] md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div class="bg-white p-4  rounded-lg shadow-lg w-full h-full md:w-auto md:h-auto">
                  <button class="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextMenuPosition(false)} ><IconRiCloseLargeLine /></button>
                 <div>
                    <h2 class="text-center text-2xl font-semibold mb-4">Selecionar fecha</h2>
                    <DateRange 
                          className="flex calender-search-home lg:hidden"
                          rangeColors={["rgb(255 104 0 / 36%);"]}
                          minDate={new Date()}
                          onChange={handleSelect}
                          editableDateInputs={false}
                          months={monthsToShow}
                          dayContentRenderer={(date) => {
                            const className = getClassNameForDate(date);
                          
                            return (
                              <div className={className}>
                                {date.getDate()}
                              </div>
                            );
                          }}
                          autoFocus
                          moveRangeOnFirstSelection={false} // No mueve el rango en la primera selección
                          showSelectionPreview={false} // Muestra la selección previa
                          startDatePlaceholder="Early"
                          showDateDisplay={false}
                          ranges={state}
                          direction="horizontal"
                          locale={esLocale}
                      />
                     
                    </div>
                    <button
                      className="mt-6 bg-[#004E45] text-white px-6 py-3 rounded-lg hover:bg-green-400"
                      onClick={(e) => setContextMenuPosition(false) }
                      style={{
                        position: 'absolute',
                        bottom: '20px',  // Ajusta esta propiedad según la distancia que desees del borde inferior
                        left: '50%',     // Centra el botón horizontalmente
                        transform: 'translateX(-50%)', // Ajusta la posición centrada
                      }}
                    >
                      Continuar
                    </button>
                 </div> 
            </div>} 
            {contextShowMenuPeople &&
              <div className=" lg:hidden fixed inset-0 bg-white flex items-start justify-center z-50   md:rounded-[1.25rem] md:!font-size[16px] md:!user-select-none">
                <div className="bg-white p-4   rounded-lg  w-full h-full md:w-auto md:h-auto">
                  <button className="absolute top-4 right-4 text-black text-lg" onClick={() =>setContextShowMenuPeople(false)} ><IconRiCloseLargeLine /></button>
                        <div>
                              <h2 className="text-center text-2xl font-semibold mb-4">Selecionar adultos</h2>
                              <Search contextShowMenuPeople={contextShowMenuPeople}
                              top={715}
                              adults={adults}
                              childrem={childrem}
                              handChangeAdults={handChangeAdults}
                              handDecreaseAdults={handDecreaseAdults}
                              handChangeChildrem={handChangeChildrem}
                              handDecreaseChildren={handDecreaseChildren}
                              setContextShowMenuPeople={setContextShowMenuPeople}  />
                      </div>
                  </div> 
              </div>} 
              <div className="hidden lg:block  ">
                {contextShowMenuPeople && 
                  <Search contextShowMenuPeople={contextShowMenuPeople}
                  top={715}
                  adults={adults}
                  childrem={childrem}
                  handChangeAdults={handChangeAdults}
                  handDecreaseAdults={handDecreaseAdults}
                  handChangeChildrem={handChangeChildrem}
                  handDecreaseChildren={handDecreaseChildren}
                  setContextShowMenuPeople={setContextShowMenuPeople}  />}
              </div>
             
          <TitleWelcome />


          <div className="max-w-6xl    md:p-0 p-8 mx-auto py-8">
     <h2 className=" text-left  md:text-[30px] text-[25px] text-[#004E45]  font-lora  mb-6">¿Buscas un lugar cómodo y seguro para tu viaje a Medellín? </h2>


     <p class="text-[15px] text-left text-gray-700 leading-relaxed  mx-auto max-w-7xl">
 Nuestro hotel en el centro de la ciudad es la opción ideal para turistas médicos, viajeros de larga estancia y familias. Ofrecemos habitaciones amplias, servicios personalizados y una ubicación estratégica cerca de todo lo que necesitas. ¡Disfruta de tu estancia en la ciudad de la eterna primavera!
     </p>
     <div className="relative mt-8 w-full max-w-6xl mx-auto overflow-hidden">
     <div
       className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
       <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full  bg-fixed	  h-[550px] object-cover" />
       <div className="  absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-white px-4 text-center">
         <div className="max-w-3xl mx-auto" >
         <h2 className="  text-[35px] ">{slides[currentSlide].title}</h2>
         <p className="mt-2 font-sans  md:text-[15px] text-[10px] ">{slides[currentSlide].description}</p>
 
         <p className="mt-2 font-sans  md:text-[15px] text-[10px] ">{slides[currentSlide].description1}</p>
         </div>
       
       </div>
     </div>


     <button
       onClick={handlePrev}
       className="absolute left-4 top-1/2 text-[70px] transform -translate-y-1/2  text-white p-2 rounded-full "
     >
       &#8249;
     </button>
     <button
       onClick={handleNext}
       className="absolute right-4 top-1/2  text-[70px] transform -translate-y-1/2  text-white p-2 rounded-full "
     >
       &#8250;
     </button>
     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
       {slides.map((_, idx) => (
         <span
           key={idx}
           onClick={() => setCurrentSlide(idx)}
           className={`block w-2 h-2 rounded-full ${
             idx === currentSlide ? 'bg-white' : 'bg-gray-400'
           } cursor-pointer`}
         />
       ))}
     </div>
   </div>
   </div>

          <Features features={features} />

          <RoomPresentaion />
          <div ref={roomSectionRef} >   
            <RoomDetail ref={roomSectionRef}  rooms={rooms} />
          </div>




      <div className="bg-[#004E45] py-12 mt-20 ">
          <div className=" max-w-7xl m-auto">
            <h2 className="text-3xl text-white font-lora text-center mb-8">
              Lo que dicen nuestros clientes
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center  ">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg lg:mt-0 m-5 text-center w-full max-w-xs"
                >
                  <img
                    className=" rounded-full mx-auto mb-4"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
          
          <div className="p-8 mt-10 ">
          <div className=" max-w-7xl rounded-3xl m-auto p-6 bg-[#004E45] mb-8">
              <div className="flex justify-center" >
                <div className=" bg-white  h-12 rounded-full p-2 mr-4">
                  <GiForkKnifeSpoon color="#004E45" fontSize={30}  />
                </div>
                <div>
                    <h2 className="text-2xl font-lora text-white items-center">
                    Restaurante Rooftop
                  </h2>
                  <p className="text-sm text-white font-lora">(La alimentación incluye menú a veganos y/o alérgicos)</p>
                </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl m-auto">
          <div className="lg:flex lg:p-0 p-8 block justify-between lg:space-x-8 space-y-4 lg:space-y-0">
            <img
              src="https://github.com/rolandoto/image-pms/blob/main/Captura%20de%20pantalla%202024-11-06%20a%20la(s)%201.38.31%20p.m..png?raw=true"
              alt="Comida 1"
              className="w-full lg:w-72 h-64 rounded-[30px] shadow-full "
            />
            <img
              src="https://github.com/rolandoto/image-pms/blob/main/Captura%20de%20pantalla%202024-11-06%20a%20la(s)%201.27.57%20p.m..png?raw=true"
              alt="Comida 2"
              className="w-full lg:w-72 h-64 rounded-[30px] shadow-full "
            />
            <img
              src="https://github.com/rolandoto/image-pms/blob/main/Captura%20de%20pantalla%202024-11-07%20a%20la(s)%209.28.34%20a.m..png?raw=true"
              alt="Comida 3"
              className="w-full lg:w-72 h-64 rounded-[30px] shadow-full "
            />
          </div>
      </div>




          <div ref={roomEventsSectionRef} >
            <Events  />
          </div>
          <WhatsappButton />
       
          
         
    <div
      className="relative h-[950px] bg-cover bg-center"
      style={{ backgroundImage: 'url("https://github.com/rolandoto/image-pms/blob/main/Piscina.jpg?raw=true")' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Main Message */}
      <div className="absolute  xl:top-1/4  top-0 text-white left-8 xl:left-16 max-w-lg">
        <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
          ¡Queremos que tu estancia sea inolvidable!
        </h1> 
        <p className="mt-4 text-base xl:text-lg">
          Por eso, te invitamos a descubrir otros rincones de la ciudad y a conocer nuevos lugares.
        </p>
        <p className="mt-2 text-base xl:text-lg">
          ¡Consulta nuestras recomendaciones de hoteles para vivir una experiencia inolvidable!
        </p>
      </div>

      {/* Image Cards */}
      <div className="absolute  lg:top-1/4 top-[350px] left-0 right-8 flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-end space-y-4 xl:space-y-0 xl:space-x-4">
        {hotelReferid.map((caption, index) => (
          <a
            target="_blank"
            href={caption.url}
            key={index}
            className="relative w-48 h-32 xl:w-64 xl:h-48 cursor-pointer rounded overflow-hidden shadow-lg"
          >
            <img
              src={caption.image}
              alt={caption.description}
              className="w-full h-fulls object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-[16px] md:text-[16px] p-2 w-full text-center">
              {caption.description}
            </div>
          </a>
        ))}
      </div>

    </div>



        {/**<AccordionAsk faqs={faqs} />   */}  
          <Footer  PostHotelByIdHotel={PostHotelByIdHotel}  />
    
          </div>
    )
    
}

export default Home