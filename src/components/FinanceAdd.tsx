import { MdMoney, MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md";

const FinanceAdd = () => {
  return (
    <div className="w-full xl:w-1/3 flex flex-col gap-4 items-center xl:items-start justify-start">
      {/* Income Section */}
      <div className="w-full flex gap-4 items-center bg-gray-100 border rounded-md p-4 shadow-sm">
        <div className="flex items-center justify-center bg-yellow-100 rounded-full w-10 h-10">
          <MdMoney size={24} color="#FFD07B" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-800">24,500</span>
          <span className="text-sm text-gray-500">Revenu</span>
        </div>
      </div>

      {/* Expense Section */}
      <div className="w-full flex gap-4 items-center bg-gray-100 border rounded-md p-4 shadow-sm">
        <div className="flex items-center justify-center bg-red-100 rounded-full w-10 h-10">
          <MdOutlineArrowDownward size={24} color="#FF6B6B" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-800">15,300</span>
          <span className="text-sm text-gray-500">Dépenses</span>
        </div>
      </div>

      {/* Profit Section */}
      <div className="w-full flex gap-4 items-center bg-gray-100 border rounded-md p-4 shadow-sm">
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

export default FinanceAdd;
