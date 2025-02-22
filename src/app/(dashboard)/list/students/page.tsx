import FormModal from "@/src/components/FormModal"
import Pagination from "@/src/components/Pagination"
import Table from "@/src/components/Table"
import TableSearch from "@/src/components/TableSearch"
import { role, studentsData, teachersData } from "@/src/lib/data"
import Image from "next/image"
import Link from "next/link"
import { MdPlusOne } from "react-icons/md"
import { MdAdd } from "react-icons/md"

type Student ={
  id:number,
  studentId: number,
  name: string,
  email?: string,
  photo: string,
  grade:number,
  
  class: string,
  phone: string,
  address: string
  
  
}

const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    {
      header: "Grade",
      accessor: "grade",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
];

const StudentListPage = () => {

  const renderRaw = (item: Student) =>(
    <tr className="border-b border-gray-200 even:bg-green-50 text-sm hover:bg-brydelPurpleLight" key={item.id}>
      <td className="flex items-center gap-4 p-4">
        <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover"/>
        <div className="flex flex-col">
          <h3 className="font-semibold"> {item.name}</h3>
          <p className="text-xs text-gray-500" >{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>

      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-brydelSky ">

            <Image src="/view.png" alt=" " height={14} width={14}/>
          </button>
          
          </Link>
         { role === "admin" && (
         <FormModal table="student" type="delete" id={item.id}/>
          
        )}

        </div>
      </td>

      
    </tr>
  );



  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* TOP */}

     <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Tout Les Etudiants</h1>
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
                <FormModal table="student" type="create" />
              )}

            </div>


        </div>
     </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRaw} data={studentsData}/>

     

      {/* PAGINATION */}
      <Pagination/>

      

    
    </div>
  )
}

export default StudentListPage;