import EventCalender from "@/src/components/EventCalender"
import Annoucements from "@/src/components/Annoucements"
import BigCalendar from "@/src/components/BigCalender"
const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row ">
      {/* GAUCHE */}
      <div className="w-full xl:w-2/3"> 
      <div className="h-full bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold ">Schedule (4) </h1>
        <BigCalendar/>

      </div>
      
      </div>

      {/* DROITE */}
      
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <EventCalender/>
      <Annoucements/>
      
      </div>
    </div>
  )
}

export default StudentPage