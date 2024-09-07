import { busDetailsType, shuttleTimetableType } from "../types/types";
import NoData from "./noData";

export default function TableDataComponent({
  shuttleTimetable,
  busDetails,
}: {
  shuttleTimetable: Array<shuttleTimetableType>;
  busDetails: Array<busDetailsType>;
}) {
  // Data ki array ko laao aur bas uss array ko .map
  // laga k render kar do
  const busNumber = busDetails[0].busNumber;
  const busRTOnumber = busDetails[0].busRtoNumber;
  return (
    <div>
      {shuttleTimetable.length > 0 ? (
        <table className=" w-full table-auto border-collapse">
          <thead>
            <tr className=" bg-slate-400 text-gray-700">
              <th className="p-2 border border-gray-300 w-1/4">From</th>
              <th className="p-2 border border-gray-300 w-1/4">To</th>
              <th className="p-2 border border-gray-300 w-1/6">Out Time</th>
              <th className="p-2 border border-gray-300 w-1/4">
                Operating Days
              </th>
            </tr>
          </thead>
          <tbody>
            {shuttleTimetable.map(({ id, from, to, outTime, days }) => (
              <tr
                key={id}
                className="bg-slate-300 hover:bg-slate-400 text-slate-600"
              >
                <td className="p-2 border border-gray-300 w-1/4 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  {from}
                </td>
                <td className="p-2 border border-gray-300 w-1/4 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  {to}
                </td>
                <td className="p-2 border border-gray-300 w-1/6 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  {outTime}
                </td>
                <td className="p-2 border border-gray-300 w-1/4 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  {days}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center mt-5 text-gray-800 font-semibold">
          No timetable available for the Bus: {busNumber} ({busRTOnumber})
        </div>
      )}
    </div>
  );
}
