"use client"

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Femmes',
    count: 50,
    fill: '#FFD07B',
  },
  {
    name: 'Hommes',
    count: 20,
    fill: '#A8D8B9',
  },
  {
    name: 'Autres',
    count: 8,
    fill: '#F6A5C0',
  },
  {
    name: 'Totals',
    count: 70,
    fill: 'white',
  },
];



const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITRE */}
        <div className='flex justify-between items-center '>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>

        </div>
        {/* CHART */}
        <div className=' relative w-full h-[75%]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={33} data={data}>
          <RadialBar
            
             
            background
           
            dataKey="count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '/>
        </div>
        {/*FOOTER */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-brydelSky rounded-full'>
                    <h1 className='font-bold mt-4'>20</h1>
                    <h2 className='text-xs text-gray-300'>Hommes (55%) </h2>

                </div>

            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-brydelYellow rounded-full'>
                    <h1 className='font-bold mt-4'>13</h1>
                    <h2 className='text-xs text-gray-300'>Femmes (33%) </h2>

                </div>

            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-brydelPurple rounded-full'>
                    <h1 className='font-bold mt-4'>03</h1>
                    <h2 className='text-xs text-gray-300'>Autres (15%) </h2>

                </div>

            </div>
        </div>
        

    </div>
  )
}

export default CountChart

