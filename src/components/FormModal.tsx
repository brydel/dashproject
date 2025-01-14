"use client";
import Image from "next/image";
import { useState } from "react";
import { MdClose } from "react-icons/md";
// import TeacherForm from "./forms/TeacherForm";
import dynamic from "next/dynamic";
// import StudentForm from "./forms/StudentForm";

const StudentForm = dynamic(() =>import("./forms/StudentForm"),{
    loading: () => <h1>Loading...</h1>

});
const TeacherForm = dynamic(() =>import("./forms/TeacherForm"),{
    loading: () => <h1>Loading...</h1>

});



const forms:{[key:string]:(type:"create" | "update", data?:any) => JSX.Element;

} = {
    teacher: (type, data) => (
      <TeacherForm type={type} data={data} />
    ),
    student: (type, data) => (
      <StudentForm type={type} data={data} />
    ),

}
const FormModal = (
  { table, type, data, id }: 
  {
    table:
      | "teacher"
      | "student"
      | "parent"
      | "subject"
      | "class"
      | "lesson"
      | "exam"
      | "assignment"
      | "result"
      | "attendance"
      | "event"
      | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
  }
) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-brydelYellow"
      : type === "update"
      ? "bg-brydelSky"
      : type === "delete"
      ? "bg-brydelPurple"
      : "";

      const [open, setOpen] = useState(false)

      const Form = () => {
        return type === "delete" && id ? (
          <form action="" className="p-4 flex flex-col gap-4">
            <span className="text-center font-medium">Tout Les Donne Seront Perdu. Etes vous sure de vouloir le Supprimer ?{table}  </span>
            <button className="mt-2 w-max bg-brydelPurple hover:bg-brydelPurple text-white text-sm font-semibold py-2 px-4 rounded-full border-none self-center">Supprimer</button>
          </form>
        ) : type ==="create" || type === "update" ?(
          forms[table](type, data)
        ) :("Formulaire indisponible");
      };
      
  return (
    <>
      <button className={ `${size} flex items-center justify-center rounded-full ${bgColor}`}
       onClick={() => setOpen(true)}
      
      >
        <Image src={`/${type}.png`} alt=" " height={16} width={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center  ">
        <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div className="absolute top-2 right-4 cursor-pointer " onClick={() =>setOpen(false)}>
                <MdClose size={14}/>
            </div>

        </div>
       
      </div>
      )}
    </>
  );
};

export default FormModal;
