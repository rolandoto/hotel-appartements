import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";


const AccordionAsk =({faqs}) =>{

    return ( <section className=" flex flex-col items-center  max-w-7xl md:flex-row container mx-auto py-12">
                <div className="md:w-1/2 px-4 ">
                    <h2 className="text-[30px] text-center  font-lora text-[#004E45] mb-6">Preguntas frecuentes</h2>
                    <div>
                        {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 px-4 mt-8 md:mt-0">
                    <img src="https://grupo-hoteles.com/storage/app/10/page/131908304-10-page-slider-1-appartments-familiar-piscina-apartotel-turismo-medellin-antioquia-colombia-centrodemedellin.webp" alt="Hotel Building" className="w-[800px] object-cover h-[700px] rounded-md shadow-md" />
                </div>
            </section>)
}

export default AccordionAsk