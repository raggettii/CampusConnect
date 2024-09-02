import { busDetailsType, timeTableType } from "@/app/types/types";

export default function AdminDashboard() {
  // busdetails ko time table se connected hona chahia
  // kyuki bus k basis pr hi to time table decide
  // hoga and also ki ye week day waali bus hai weekend
  // waali hai
  const busDetails: Array<busDetailsType> = [
    {
      busNumber: 1,
      busRtoNumber: "MP-33skff",
      conductorName: "wkbfwi",
      conductorPhoneNumber: "",
    },
  ];
  const timeTable: Array<timeTableType> = [
    {
      id: "sds",
      from: "Institute",
      to: "Sadar",
      time: "03:30",
      day: "Weekday",
    },
    {
      id: "sds",
      from: "Institute",
      to: "Sadar",
      time: "03:30",
      day: "Weekday",
    },
    {
      id: "sds",
      from: "Institute",
      to: "Sadar",
      time: "03:30",
      day: "Weekend",
    },
    {
      id: "sds",
      from: "Institute",
      to: "Sadar",
      time: "03:30",
      day: "Weekend",
    },
  ];
  return (
    <>
      <div className="max-h-full min-h-[678px]">
        <h1 className="text-slate-800 font-bold text-2xl mt-4 ml-2">
          Current Timetable Overview
        </h1>
      </div>
    </>
  );
}
