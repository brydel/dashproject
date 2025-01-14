import Annoucements from "@/src/components/Annoucements";
import BigCalendar from "@/src/components/BigCalender";
import Performance from "@/src/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
    return (
      <div className=" flex-1 flex flex-col gap-4 p-4 xl:flex-row">
        {/* GAUCHE */}
        <div className="w-full xl:w-2/3">
          {/* TOP */}
          <div className="">
            {/* INFO CARD */}
            <div className="bg-brydelSky py-6 px-4 rounded-md flex-1 flex gap-4">
                <div className="w-1/3">
                <Image src="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
                </div>
                <div className="w-2/3 flex flex-col justify-between gap-4">
                <h1 className="text-xl font-semibold">Gween Kangah</h1>
                <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur</p>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/blood.png" alt="" width={14} height={14}/>
                        <span>B+</span>

                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                        <Image src="/date.png" alt="" width={14} height={14}/>
                        <span> Janvier 2025</span>
                        
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/mail.png" alt="" width={14} height={14}/>
                        <span>bsaounde@gmail.com</span>
                        
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/phone.png" alt="" width={14} height={14}/>
                        <span>+1 (123) 456 7891</span>
                        
                    </div>

                </div>

                
                </div>

            </div>
{/* SMALL CARDS */}

            <div className="flex flex-col gap-4 w-full xl:w-1/3">
            
            </div>
        <div className="flex-1 flex gap-4 justify-between flex-wrap mt-4">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6eme</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
          {/* CALENDRIER */}
          <div className="mt-4 bg-white rounded-md p-4 h-[800px] ">
            <h1>Ensiegnant&apos;s Calendrier</h1>
            <BigCalendar/>
          </div>
      </div>
  
        {/* DROITE */}
        <div className=" w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">Racourci...</h1>
            <div className="mt-4 flex g4 flex-wrap text-xs to-gray-400 gap-4 ">
                <Link className="p-4 rounded-md bg-brydelSkyLight" href="/">Student&apos;s Cours</Link>
                <Link className="p-4 rounded-md bg-brydelPurpleLight" href="/">Student&apos;s Ensiegnant</Link>
                <Link className="p-4 rounded-md bg-brydelYellowLight" href="/">Student&apos;s </Link>
                <Link className="p-4 rounded-md bg-red-50" href="/">Student&apos;s Examens</Link>
                <Link className="p-4 rounded-md bg-brydelSkyLight" href="/">Student&apos;s Devoirs</Link>
            </div>

        </div>
        <Performance/>
        <Annoucements/>

        
        </div>
      </div>
    );
  };
  
  export default SingleStudentPage;
  