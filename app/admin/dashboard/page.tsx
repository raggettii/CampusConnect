import "server-only";

import BusDetailHeader from "@/app/components/busDetailsHeader";
import TableDataComponent from "@/app/components/tableDataComponent";
import { busDetailsType, shuttleTimetableType } from "@/app/types/types";

export default function AdminDashboard() {
  // busdetails ko time table se connected hona chahia
  // kyuki bus k basis pr hi to time table decide
  // hoga and also ki ye week day waali bus hai weekend
  // waali hai

  // bus details mein bahut saari busses aa gai
  // phir uss bus ki id k basis par uska schedule
  // search karo
  // aisa karna hai ki jo buses ka data aaiga usme
  // unka connection bhi aaiga bus se to
  // buses ko map karo aur uske bus waala connection
  // k basis par search karo bus time table mein aur
  // phir load karte jao
  // mtlb ki map k andar .find laga k phir load karo
  // and this all need to be server component
  const busDetails: Array<busDetailsType> = [
    {
      id: "kfjbgkbg",
      busNumber: 1,
      busRtoNumber: "MP-33skff",
      conductorName: "wkbfwi",
      conductorPhoneNumber: "9999999",
    },
  ];
  const shuttleTimetable: Array<shuttleTimetableType> = [
    {
      id: "1",
      from: "Campus",
      to: "Library",
      outTime: "08:00",
      days: "Monday_to_Friday",
    },
    {
      id: "2",
      from: "Hostel",
      to: "Cafeteria",
      outTime: "09:00",
      days: "Saturday_and_Sunday",
    },
    {
      id: "3",
      from: "Campus",
      to: "Hostel",
      outTime: "18:00",
      days: "Monday",
    },
    {
      id: "4",
      from: "Library",
      to: "Campus",
      outTime: "19:00",
      days: "Saturday",
    },
    {
      id: "5",
      from: "Hostel",
      to: "Cafeteria",
      outTime: "07:30",
      days: "Tuesday",
    },
    {
      id: "6",
      from: "Cafeteria",
      to: "Library",
      outTime: "10:00",
      days: "Friday",
    },
    {
      id: "7",
      from: "Library",
      to: "Campus",
      outTime: "17:00",
      days: "Sunday",
    },
  ];
  console.log("Its a server component is admin dashboard ");
  return (
    <>
      <div className="max-h-full min-h-[678px]">
        <h1 className="text-slate-800 font-bold text-2xl mt-4 ml-2">
          Current Timetable Overview
        </h1>
        <BusDetailHeader busDetails={busDetails} />
        {/* <ButtonComponent /> */}
        <TableDataComponent
          busDetails={busDetails}
          shuttleTimetable={shuttleTimetable}
        />
      </div>
    </>
  );
}
