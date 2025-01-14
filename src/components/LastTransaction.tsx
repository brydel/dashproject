import FormModal from "@/src/components/FormModal"
import Pagination from "@/src/components/Pagination"
import Table from "@/src/components/Table"
import TableSearch from "@/src/components/TableSearch"
import { classesData, lessonsData, parentsData, role, studentsData, subjectsData, teachersData, transactionData } from "@/src/lib/data"
import Image from "next/image"
import Link from "next/link"
import { MdPlusOne } from "react-icons/md"
import { MdAdd } from "react-icons/md"

type Transaction = {
    id: number;
    name: string;
    date: string; // ISO 8601 format ("YYYY-MM-DD") ou une autre convention
    amount: number;
    status: "Complété" | "En attente" | "Annulé";
  };
  

  const columns = [
    {
      header: "Nom",
      accessor: "name",
      className: "text-left px-4", // Aligné à gauche pour le nom
    },
    {
      header: "Date",
      accessor: "date",
      className: "text-center px-4", // Centré pour la date
    },
    {
      header: "Montant",
      accessor: "amount",
      className: "text-right px-4 hidden md:table-cell", // Aligné à droite pour le montant
    },
    {
      header: "Statut",
      accessor: "status",
      className: "text-center px-4 hidden md:table-cell", // Centré pour le statut
    },
  ];

  const statusColors:{[Key in Transaction["status"]]: string} ={
    "Complété": "text-green-500 ",
    "En attente": "text-yellow-500 ",
    "Annulé": "text-red-500 ",
        
  }
  


const LastTransaction = () => {

  const renderRaw = (item: Transaction) => (
    <tr
      className="border-b border-gray-200 even:bg-green-50 text-sm hover:bg-brydelPurpleLight"
      key={item.id}
    >
      {/* Colonne Nom */}
      <td className="text-left p-4">
        {item.name}
      </td>
  
      {/* Colonne Date */}
      <td className="text-center p-4">
        {item.date}
      </td>
  
      {/* Colonne Montant */}
      <td className="text-right hidden md:table-cell p-4">
        {item.amount.toLocaleString("fr-CA", { style: "currency", currency: "CAD" })}
      </td>
  
      {/* Colonne Statut */}
      <td  className={`text-center hidden md:table-cell p-4 rounded-md font-medium ${
          statusColors[item.status]
        }`}>
        {item.status}
      </td>
    </tr>
      
  );
  
  



  return (
    <div className='bg-white  rounded-xl w-full h-full p-4 gap-4'>
        {/* TOP */}

     <div className="flex items-center justify-between p-4">
        <h1 className="hidden md:block text-lg font-semibold">Derniere transaction</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ">
            <TableSearch/>
        </div>
     </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRaw} data={transactionData} />

     

      {/* PAGINATION */}
      <Pagination/>

      

    
    </div>
  )
}

export default LastTransaction