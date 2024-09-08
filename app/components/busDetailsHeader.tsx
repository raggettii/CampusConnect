import { busDetailsType } from "../types/types";

export default function BusDetailHeader({
  busDetails,
}: {
  busDetails: Array<busDetailsType>;
}) {
  // data fetch karna hai
  const busNumber = busDetails[0].busNumber;
  const busRTOnumber = busDetails[0].busRtoNumber;
  const busConductorName = busDetails[0].conductorName;
  const busConductorPhoneNumber = busDetails[0].conductorPhoneNumber;
  return (
    <div>
      <div className="flex flex-col border-b-2 mt-4 text-lg text-slate-600 ml-2 font-bold">
        <p>
          Bus Number : {busNumber} ( {busRTOnumber} )
        </p>
        <p className="text-sm font-extrabold text-gray-900">
          Conductor Name :{busConductorName}
        </p>
        <p className="text-sm font-extrabold text-gray-900">
          Contact Number :{busConductorPhoneNumber}
        </p>
      </div>
    </div>
  );
}
