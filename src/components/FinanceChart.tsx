"use client";
import Image from "next/image";
import { MdMoney, MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinanceAdd = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Income Section */}
      <div className="flex gap-4 items-center bg-gray-100 border rounded-md p-4 shadow-sm w-full">
        <div className="flex items-center justify-center bg-yellow-100 rounded-full w-10 h-10">
          <MdMoney size={24} color="#FFD07B" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-800">24,500</span>
          <span className="text-sm text-gray-500">Revenu</span>
        </div>
      </div>

      {/* Expense Section */}
      <div className="flex gap-4 items-center bg-gray-100 border rounded-md p-4 shadow-sm w-full">
        <div className="flex items-center justify-center bg-red-100 rounded-full w-10 h-10">
          <MdOutlineArrowDownward size={24} color="#FF6B6B" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-800">15,300</span>
          <span className="text-sm text-gray-500">Dépenses</span>
        </div>
      </div>

      {/* Profit Section */}
      <div className="flex gap-4 items-center bg-gray-100 border rounded-md p-4 shadow-sm w-full">
        <div className="flex items-center justify-center bg-green-100 rounded-full w-10 h-10">
          <MdOutlineArrowUpward size={24} color="#4CAF50" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-800">9,200</span>
          <span className="text-sm text-gray-500">Profit</span>
        </div>
      </div>
    </div>
  );
};

const data = [
  { name: "jan", income: 1200, expense: 1100 },
  { name: "fev", income: 1500, expense: 1300 },
  { name: "mar", income: 1700, expense: 1400 },
  { name: "avr", income: 1800, expense: 1600 },
  { name: "mai", income: 2000, expense: 1800 },
  { name: "jun", income: 2200, expense: 2000 },
  { name: "jul", income: 1000, expense: 1200 },
  { name: "aou", income: 1300, expense: 1500 },
  { name: "sep", income: 2500, expense: 2200 },
  { name: "oct", income: 2400, expense: 2000 },
  { name: "nov", income: 2600, expense: 2300 },
  { name: "dec", income: 2800, expense: 2500 },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 flex flex-col gap-8">
      {/* TITRE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* FinanceAdd Section */}
        <div className="lg:w-1/3 w-full mt-24">
          <FinanceAdd />
        </div>

        {/* CHART Section */}
        <div className="lg:w-2/3 w-full">
          <div className="h-80 lg:h-96 md:block hidden">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tick={{ fill: "#d1d5db" }}
                  tickLine={true}
                  tickMargin={10}
                />
                <YAxis
                  axisLine={false}
                  tick={{ fill: "#d1d5db" }}
                  tickLine={false}
                  tickMargin={10}
                />
                <Tooltip />
                <Legend
                  align="left"
                  verticalAlign="top"
                  wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#FFD07B"
                 
                  strokeWidth={5}
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#A8D8B9"
                  
                  strokeWidth={5}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceChart;
