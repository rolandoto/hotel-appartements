import React from "react"
import CardRoomDetail from "../CardRoomDetail/CardRoomDetail"
import { Fragment } from "react"

const RoomDetail =({rooms}) =>{

    

    return (
        <div className="py-12 px-4  ">
            <div className=" max-w-7xl mx-auto text-center">
                <h3 className="text-3xl font-normal text-center text-[#004E45]   font-lora mb-8">Nuestras habitaciones</h3>
                <p className="text-gray-700 mb-8">
                    Cada habitación está decorada con obras de artistas locales, creando un ambiente único e inspirador.
                </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                    {rooms.map((room) => (
                        <Fragment key={room.id}>
                            <CardRoomDetail {...room} />
                        </Fragment>
                        ))}
                    </div>
            </div>
        </div>
      )

}

export default RoomDetail