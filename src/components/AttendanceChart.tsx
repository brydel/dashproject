"use client";

import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const data = [
  { name: "LUN", present: 19, absent: 40 },
  { name: "MAR", present: 189, absent: 48 },
  { name: "MER", present: 184, absent: 40 },
  { name: "JEU", present: 18, absent: 480 },
  { name: "VEN", present: 10, absent: 488 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="More Options" width={20} height={20} />
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="110%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 10,
            }}
          >
            <XAxis dataKey="name" />
            
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
            />
            <Area
              type="monotone"
              dataKey="present"
              stackId="1"
              stroke="#FFD07B"
              fill="#FFD07B"
            />
            <Area
              type="monotone"
              dataKey="absent"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
