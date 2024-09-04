import { busDetailsType } from "../types/types";

export default function BusDetailHeader({
  busDetails,
}: {
  busDetails: Array<busDetailsType>;
}) {
  // data fetch karna hai
  const busNumber = busDetails[0].busNumber;
  const busRTOnumber = busDetails[0].busRtoNumber;
  return (
    <div>
      <h1 className=" border-b-2 mt-4 text-lg text-slate-600 ml-2 font-bold">
        Bus Number : {busNumber} ( {busRTOnumber} )
      </h1>
    </div>
  );
}
