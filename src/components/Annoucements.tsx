

const Annoucements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className=" flex items-center justify-between">
        <h1 className=" text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 ">Voir Tout </span>
      </div>
      <div className="flex flex-col gap-4 mt-4 ">
        <div className="bg-brydelSkyLight rounded-md p-4 ">
            <div className="flex items-center justify-between ">
                <h2 className="font-medium">Nouvelle offre de location</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1">Le 25/03/2023</span>
            </div>
            <p className="text-sm text-gray-400 mt-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloribus rem blanditiis</p>

        </div>
        <div className="bg-brydelPurpleLight rounded-md p-4 ">
            <div className="flex items-center justify-between ">
                <h2 className="font-medium">Nouvelle offre de location</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1">Le 25/03/2023</span>
            </div>
            <p className="text-sm text-gray-400 mt-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloribus rem blanditiis</p>


        </div>
        <div className="bg-brydelYellowLight rounded-md p-4 ">
            <div className="flex items-center justify-between ">
                <h2 className="font-medium">Nouvelle offre de location</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1">Le 25/03/2023</span>
            </div>
            <p className="text-sm text-gray-400 mt-1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus doloribus rem blanditiis</p>
            

        </div>



        
       </div>   
     
    </div>
  )
}

export default Annoucements