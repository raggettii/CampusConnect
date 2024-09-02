import { studentJourneyType } from "../types/types";

export default function JourneyBox({
  id,
  date,
  day,
  time,
  from,
  to,
}: studentJourneyType) {
  return (
    <div className="border-2 border-slate-700 p-2 rounded-md shadow-sm m-2">
      <div className="flex flex-col gap-1 ">
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <h1 className="text-lg text-neutral-950 font-semibold">{day}</h1>
            <p className="mt-2 text-neutral-950 text-xs font-medium">{date}</p>
          </div>
          <div className="text-neutral-950 font-medium">{time}</div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2  text-blue-950 font-medium">
            <h2>{from}</h2>
            <span className="text-slate-900">to</span>
            <h2>{to}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
