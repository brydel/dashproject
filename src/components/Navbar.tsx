import Image from "next/image"
import { MdCloud, MdSearch } from "react-icons/md"
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* Barre de recherche*/}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 justify-center">
        <MdSearch size={20} color="gray"/>
            <input type="text" placeholder="Recherche..." className="w-[200px] p-2 bg-transparent outline-none"/>

        </div>

    
        {/* icons et user*/}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" width={20} height={20}/>
            </div>
            <div className="bg-white rounded-full w-7 h-7 items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" width={20} height={20}/>
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">1</div>
            </div>
            <div className="bg-ciel rounded-full w-7 h-7 items-center justify-center cursor-pointer relative">
                <MdCloud size={25} color="white"/>
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-yellow-400 text-white rounded-full text-xs">33&deg;</div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Fosso brydel</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>

            </div>
            <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
    

        </div>

    </div>
  )
}

export default Navbar