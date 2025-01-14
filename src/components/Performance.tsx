"use client";
import Image from "next/image";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 65, fill: "#A8D8B9" },
  { name: "Group B", value: 7, fill: "#FFD07B" },
];

const data02 = [
  { name: "Group A", value: 90, fill: "#D7E8F9" },
  { name: "Group B", value: 9, fill: "#FBE4C6" },
];

const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 flex flex-col relative">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="" height={16} width={16} />
      </div>
      <div className="flex flex-1 items-center justify-center ">
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            {/* First Pie */}
            <Pie
              dataKey="value"
              
              data={data01}
              cx="30%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              fill="#8884d8"
              
            />
            {/* Second Pie */}
            <Pie
              dataKey="value"
              data={data02}
              cx="70%"
              cy="50%"
              innerRadius={40}
              
              
              fill="#82ca9d"
              
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-3xl font-semibold">8.8</h1>
            <p className="text-xs text-gray-400">Excellent</p>

        </div>
        <h3 className="absolute font-medium bottom-0 left-0 right-0 m-auto text-center ">Les dernier 1eme - 2eme trimistre</h3>
      </div>
    </div>
  );
};

export default Performance;
