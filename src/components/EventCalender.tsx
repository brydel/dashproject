"use client"
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
      id: 1,
      title: "Réunion parents-profs",
      time: "10:00 AM",
      description: "Une réunion pour discuter des progrès des étudiants et des plans pour le prochain trimestre.",
    },
    {
      id: 2,
      title: "Atelier d'orientation",
      time: "02:00 PM",
      description: "Un atelier pour guider les étudiants sur leurs choix de carrière et d'études.",
    },
    {
      id: 3,
      title: "Fête de fin de trimestre",
      time: "06:00 PM",
      description: "Une célébration pour marquer la fin du trimestre avec des activités et des performances.",
    },
  ];
  


const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-4">
            {events.map(event =>(
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-brydelSky even:border-t-brydelPurple" key={event.id}>
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-gray-500">{event.title}</h1>
                        <span className="text-gray-200 text-xs ">{event.time}</span>
                        <p className=" mt-2 text-gray-300 text-sm">{event.description}</p>
                    </div>

                </div>
            ))}
        </div>
        
    </div>
  )
}

export default EventCalender


