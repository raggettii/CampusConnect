import BusDetailHeader from "@/app/components/busDetailsHeader";
import ModalComponent from "@/app/components/modalComponent";
import TableDataComponent from "@/app/components/tableDataComponent";
import { busDetailsType, shuttleTimetableType } from "@/app/types/types";

export default function StudentBookTicket() {
  // here we have to render time table from BE for the
  // user in which college he is enrolled in
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
  const busDetails: Array<busDetailsType> = [
    {
      id: "kfjbgkbg",
      busNumber: 1,
      busRtoNumber: "MP-33skff",
      conductorName: "wkbfwi",
      conductorPhoneNumber: "9999999",
    },
  ];
  return (
    <>
      <div className="max-h-full min-h-[678px]">
        <BusDetailHeader busDetails={busDetails} />
        <ModalComponent
          formSubmitType="book-ticket"
          heading="Book Ticket"
          buttonHeadingForModal="Book Ticket"
          formType="book-ticket"
        />
        <TableDataComponent
          shuttleTimetable={shuttleTimetable}
          busDetails={busDetails}
        />
      </div>
    </>
  );
}
