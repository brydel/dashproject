import FormModal from "@/src/components/FormModal"
import Pagination from "@/src/components/Pagination"
import Table from "@/src/components/Table"
import TableSearch from "@/src/components/TableSearch"
import { classesData, examsData, lessonsData, parentsData, role, studentsData, subjectsData, teachersData } from "@/src/lib/data"
import Image from "next/image"
import Link from "next/link"
import { MdPlusOne } from "react-icons/md"
import { MdAdd } from "react-icons/md"

type Exam={
  id:number,
  subject: string,
  class: string,
  teacher: string,
  date: string,
}

const columns = [
    {
      header: "Suject",
      accessor: "name",
    },
    {
      header: "Class",
      accessor: "class",
      
     
    },
    {
        header: "Ensiengnant",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
    },

    {
      header: "Actions",
      accessor: "action",
    },
  ];


const ExamListPage = () => {

  const renderRaw = (item: Exam) =>(
    <tr className="border-b border-gray-200 even:bg-green-50 text-sm hover:bg-brydelPurpleLight" key={item.id}>
      <td className="flex items-center gap-4 p-4">
      {item.subject}
        
       
      </td>
      
      <td className="">
      {item.class}
        
       
      </td>
      <td className="hidden md:table-cell">
      {item.teacher}
        
       
      </td>
      <td className="hidden md:table-cell">
      {item.date}
        
       
      </td>
      
      
      

      

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          {/* <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brydelSky ">

            <Image src="/edit.png" alt=" " height={14} width={14}/>
          </button> */}
          
          </Link>
         { role === "admin" && (
        //     <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brydelPurple ">
        //     <Image src="/delete.png" alt=" " height={14} width={14}/>
        //   </button>
            <>
            <FormModal table="exam" type="update" data={item} />
            <FormModal table="exam" type="delete" data={item} />
            </>
        
        )}

        </div>
      </td>

      
    </tr>
  );



  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* TOP */}

     <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Tout Les Exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ">
            <TableSearch/>
            <div className="flex items-center gap-4 self-end ">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brydelYellow ">
                    <Image src="/filter.png" alt=" " height={14} width={14}/>

                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brydelYellow ">
                    <Image src="/sort.png" alt=" " height={14} width={14}/>

                </button>
              { role === "admin" && (
                // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brydelYellow ">
                //     <MdAdd/>

                // </button>
                
                <FormModal table="exam" type="create"  />
            )}

            </div>


        </div>
     </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRaw} data={examsData}/>

     

      {/* PAGINATION */}
      <Pagination/>

      

    
    </div>
  )
}

export default ExamListPage