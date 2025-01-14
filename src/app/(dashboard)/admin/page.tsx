import Annoucements from "@/src/components/Annoucements"
import AttendanceChart from "@/src/components/AttendanceChart"
import CountChart from "@/src/components/CountChart"
import EventCalender from "@/src/components/EventCalender"
import FinanceChart from "@/src/components/FinanceChart"
import LastTransaction from "@/src/components/LastTransaction"
import UserCard from "@/src/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* GAUCHE */}

      <div className="w-full lg:w-2/3 flex flex-col gap-8">

      {/* CARD*/}
      <div className="flex gap-4 justify-between flex-wrap">
      <UserCard type="student"/>
      <UserCard type="teacher"/>
      <UserCard type="parent"/>
      <UserCard type="staff"/>

      </div>
      {/* Chart Millieu*/}
      <div className="flex gap-4 flex-col lg:flex-row">
         {/*CHart COUNT */}
         <div className="w-full lg:w-1/3 h-[450px]">
         <CountChart/>
         
         </div>

          {/* Chart Attendance*/}

          <div className="w-full lg:w-2/3 h-[450px]">

          <AttendanceChart/>
          
          
          </div>
         
      </div>

      {/*CHart BAS */}
      <div className="w-full h-[500px] ">
        <FinanceChart/>
        
        

      </div>
      <div className="w-full">
      <LastTransaction/>

      </div>
      
    

      
      </div>

     
      
      



      
      {/* DROITE */}

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalender/>
      <Annoucements/>
      
      </div>


    </div>
  )
}

export default AdminPage