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
import Events from "../../Component/Events/Events";
import RoomDetail from "../../Component/RoomDetail/RoomDetail";
import RoomPresentaion from "../../Component/RoomPresentation/RoomPresentation";
import "./home.css"
import { IconRiCloseLargeLine, IconsFaConciergeBell, IconsFaGlassMartini, IconsFaStore, IconsGiForkKnifeSpoon, IconsaCar } from "../../Component/Icons/Icons";
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
import Usetitle from "../../Hooks/UseTitle";

const Home =() =>{
  const navigate = useNavigate();
  moment.locale('es');
  Usetitle({title:"Hotel Apartments Medellín"})
  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

const roomSectionRef = useRef(null);
const roomEventsSectionRef = useRef(null);
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

  const {getCartSubtotal} = UseCart()
  const { hotelList, loadingHotel, errorHotel } = useSelector((state) => state.Hotel);


  const { getListHotel } = UseHotelActions();  // Obtienes la función

  useEffect(() => {
    getListHotel();  // Llamada a getListHotel
  }, [getListHotel]); 

  const FillContent = () => {
    if (loadingHotel) {
      return <>Cargando...</>;  // Muestra un mensaje de carga
    }
  
    if (errorHotel) {
      return <>Error al cargar los hoteles</>;  // Muestra un mensaje de error
    }
    const findHotelById = (hotels, id) => hotels.find(hotel => hotel.id_hotel === id);
    const hotel = findHotelById(hotelList, 10);
    return <>{hotel?.nombre}</>;  // Muestra un mensaje cuando los hoteles están listos
  };

  const subtotal = getCartSubtotal()


  const features = [
    { icon: <IconsFaGlassMartini/>, title: 'Cóctel de bienvenida' },
    { icon: <IconsGiForkKnifeSpoon/>, title: 'Desayuno incluido' },
    { icon: <IconsFaConciergeBell/>, title: 'Recepción 24 horas' },
    { icon: <IconsaCar/>, title: 'Variedad de transporte', description: 'Metro, tranvía, autobús, taxi' },
    { icon: <IconsGiForkKnifeSpoon/>, title: 'Restaurante - Bar  ', description: ' con vista panorámica' },
    { icon: <IconsFaStore/>, title: 'Alianzas comerciales', description: 'Servicio de taxi, gimnasio, tours, médico, comunicaciones.' }
  ];

     
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

     
        
      
    const formattedStartDateToString = moment(state?.[0]?.startDate ?? '').format('DD MMM YYYY').toLowerCase();
    const formattedEndDateToString = moment(state?.[0]?.endDate ?? '').format('DD MMM YYYY').toLowerCase();
    

    const PostHotelByIdHotel = useCallback(async () => {
      setContextMenuPosition(false);
      navigate("/Accomodation");  // Redirige a la ruta de alojamiento
    }, [setContextMenuPosition, navigate]);  // Agregar navigate en las dependencias

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

   

    const rooms = [
      {
        id: 1,
        title: 'Room Estandar',
        price: 120000,
        image: "https://h-img2.cloudbeds.com/uploads/315188/img_0782_gallery~~6664679bdc57a.jpg",
        features: ["Cama doble", "Ventilador", "Nevera", "Smart TV", "Wi-Fi", "Escritorio", "Cocina"]
      },
      {
        id: 2,
        title: 'Room Superior',
        price: 130000,
        image: "https://h-img3.cloudbeds.com/uploads/315188/_mg_0135-hdr_featured~~66645f906dbce.jpg",
        features: ["Cama doble", "Aire acondicionado", "Nevera", "Smart TV", "Wi-Fi", "Escritorio", "Cocina"]
      },
      {
        id: 3,
        title: 'Room Twin',
        price: 142000,
        image: "https://h-img1.cloudbeds.com/uploads/315188/img_1126_gallery~~66646447ed984.jpg",
        features: ["Cama doble", "Ventilador", "Nevera", "Smart TV", "Wi-Fi", "Escritorio", "Cocina"]
      },
      {
        id: 4,
        title: 'Room Familiar',
        price: 230000,
        image: "https://h-img3.cloudbeds.com/uploads/315188/img_1193_featured~~666465064afd2.jpg",
        features: ["Cama doble", "Cama sencilla", "Aire acondicionado o Ventilador", "Nevera", "Smart TV", "Wi-Fi", "Escritorio", "Cocina"]
      },
    ];

    const monthsToShow = window.innerWidth >= 700 ? 2 : 1; // Cambia 768 según tu punto de ruptura deseado

    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(true); // Estado para manejar la opacidad

    const handlePrev = () => {
      setFade(false); // Inicia el efecto de desvanecimiento
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
        setFade(true); 
      }, 500); 
    };

    const handleNext = () => {
      setFade(false); // Inicia el efecto de desvanecimiento
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        setFade(true); 
      }, 500);
    };
    
    const slides = [
      {
        title: 'Viaje en familia',
        description: "Nuestro hotel en el corazón de Medellín te ofrece pequeños apartamentos ideales para familias, equipados con cocina, nevera y todas las comodidades que necesitas para sentirte como en casa. ",
        description1:" Vive una experiencia inolvidable mientras exploras la ciudad, con el espacio y confort perfectos para tu estancia. ¡Tu hogar lejos de casa te espera!",
        image: 'https://h-img3.cloudbeds.com/uploads/315188/_mg_0135-hdr_featured~~66645f906dbce.jpg',
      },
      {
        title: 'Turismo Médico',
        description: 'Si vienes a Medellín por motivos de turismo médico, nuestro hotel es la elección ideal. Estamos cerca de las principales clínicas y centros de salud de la ciudad, y te ofrecemos un ambiente tranquilo y cómodo para tu recuperación. ',
        description1:" Además, nuestras instalaciones están diseñadas para proporcionar el descanso y la atención que necesitas durante tu proceso de recuperación    ",
        image: 'https://h-img2.cloudbeds.com/uploads/315188/_mg_0135-hdr_featured~~66645f906dbce.jpg',
      },
      {
        title: 'Viajes de larga duración    ',
        description: 'Si planeas una estancia prolongada, nuestro hotel te ofrece todo lo que necesitas para sentirte como en casa. ',
        description1:"Con instalaciones diseñadas para hacer tu vida más cómoda, una ubicación ideal para explorar la ciudad, y servicios que cubren todas tus necesidades, seremos tu hogar lejos de casa durante todo el tiempo que necesites.    ",
        image: 'https://h-img2.cloudbeds.com/uploads/315188/img_1126_gallery~~66646447ed984.jpg',
      },
      // Add more slides as needed
    ];



    return (
        <div>
       
           <Header  scrollToRoomSectionEvent={scrollToRoomSectionEvent}   />
           <div className="relative bg-cover bg-center  h-[650px]" style={{ 
                backgroundImage: `url(https://github.com/rolandoto/image-pms/blob/main/Piscina.jpg?raw=true)`,}}>
              <div className="absolute inset-0  bg-black opacity-30  "></div>
              <div className="relative lg:p-4 p-4 text-center max-w-5xl m-auto z-10 flex flex-col items-initial justify-center h-full  text-white">
                  <h1 className="text-4xl text-center  md:text-6xl lg:text-6xl font-lora">
                      {FillContent()}
                  </h1>
                  <h2 className="mt-2  text-center text-base md:text-xl lg:text-3xl font-lora font-normal">
                  ¿Buscas un lugar cómodo y seguro para tu viaje a Medellín?
                  </h2>
                  <div className="w-full flex justify-center" >
                      <button className="mt-6 text-center  border-2 w-40 text-white px-6 py-3  " onClick={scrollToRoomSection}>
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
     <h2 className=" text-left  md:text-[30px] text-[25px] text-[#004E45]  font-lora  mb-6">¿Buscas un lugar cómodo y seguro para tu viaje a Medellín?</h2>


     <p class="text-[15px] text-left text-gray-700 leading-relaxed  mx-auto max-w-7xl">
 Nuestro hotel en el centro de la ciudad es la opción ideal para turistas médicos, viajeros de larga estancia y familias. Ofrecemos habitaciones amplias, servicios personalizados y una ubicación estratégica cerca de todo lo que necesitas. ¡Disfruta de tu estancia en la ciudad de la eterna primavera!
     </p>
     <div className="relative mt-8 w-full max-w-6xl mx-auto overflow-hidden">
     <div
       className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
       <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full    bg-fixed	  h-[550px] object-cover" />
       <div className=" rounded-2xl absolute inset-0  bg-opacity-10 flex flex-col justify-center items-center text-white px-4 text-center">
            <div className="md:max-w-3xl max-w-[16rem] mx-auto text-center">
        <h2 className="text-[35px]">{slides[currentSlide].title}</h2>
        <p className="mt-2 font-sans md:text-[15px] text-[10px] text-justify">
          {slides[currentSlide].description}
        </p>
        <p className="mt-2 font-sans md:text-[15px] text-[10px] text-justify">
          {slides[currentSlide].description1}
        </p>
      </div>
       </div>
     </div>


          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 text-[50px] transform -translate-y-1/2  text-white p-2 rounded-full "
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2  text-[50px] transform -translate-y-1/2  text-white p-2 rounded-full "
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
        className="relative h-[910px] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://github.com/rolandoto/image-pms/blob/main/Piscina.jpg?raw=true")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Main Message */}
        <div className="absolute xl:top-1/4 top-[90px] text-white max-w-lg px-6">
      <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
        ¡Queremos que tu estancia sea inolvidable!
      </h1>
      <p className="mt-4  text-justify text-base  xl:text-lg">
        Por eso, te invitamos a descubrir otros rincones de la ciudad y a conocer nuevos lugares.
      </p>
      <p className="mt-2 text-base xl:text-lg">
        ¡Consulta nuestras recomendaciones de hoteles para vivir una experiencia inolvidable!
      </p>
    </div>
      <div className="absolute  lg:top-1/4 top-[410px] left-0 right-8 flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-end space-y-4 xl:space-y-0 xl:space-x-4">
        {hotelReferid.map((caption, index) => (
              <a
              target="_blank"
              rel="noreferrer"
              href={caption.url}
              key={index}
              className="relative w-48 h-32 xl:w-64 xl:h-48 cursor-pointer rounded overflow-hidden shadow-lg"
            >
            <img
              src={caption.image}
              alt={caption.description}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-[16px] md:text-[16px] p-2 w-full text-center">
              {caption.description}
            </div>
          </a>
        ))}
      </div>
      </div>  


          <Footer  PostHotelByIdHotel={PostHotelByIdHotel}  />
    
          </div>
    )
    
}

export default Home