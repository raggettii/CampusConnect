const colHeader_1 = "From";
const colHeader_2 = "To";
const colHeader_3 = "Out Time";
const colHeader_4 = "Operating Days";
export default function TableHeader() {
  return (
    <div className="flex  bg-red-400 lg:mx-[150px] font-semibold text-slate-800 shadow-lg justify-between m-2 border-y-2 border-slate-400">
      <div className="flex flex-col bg-blue-400 m-2">{colHeader_1}</div>
      <div className="flex flex-col bg-blue-400 m-2">{colHeader_2}</div>
      <div className="flex flex-col bg-blue-400 m-2">{colHeader_3}</div>
      <div className="flex flex-col bg-blue-400 m-2">{colHeader_4}</div>
    </div>
  );
}
