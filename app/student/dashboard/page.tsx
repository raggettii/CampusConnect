import JourneyBox from "@/app/components/journeyBox";
import NoData from "@/app/components/noData";
import { studentJourneyType } from "@/app/types/types";
const NoDataText = "No Journeys Available";

export default function StudentDashboard() {
  const studentJourneys: Array<studentJourneyType> = [
    // {
    //   id: "1",
    //   day: "Monday",
    //   date: "24/12/24",
    //   from: "Institute",
    //   to: "Sadar",
    //   time: "03:30",
    // },
    // {
    //   id: "2",
    //   day: "Tuesday",
    //   date: "24/12/24",
    //   from: "Kakaltala",
    //   to: "Russell chauk",
    //   time: "03:30",
    // },
    // {
    //   id: "3",
    //   day: "Saturday",
    //   date: "28/02/24",
    //   from: "ajmer",
    //   to: "panti naka",
    //   time: "03:30",
    // },
    // {
    //   id: "4",
    //   day: "Mondfhay",
    //   date: "24/12/24",
    //   from: "dadddddduuuu",
    //   to: "Sadafjfr",
    //   time: "03:30",
    // },
    // {
    //   id: "5",
    //   day: "Monday",
    //   date: "24/12/24",
    //   from: "ram",
    //   to: "Sadar",
    //   time: "03:30",
    // },
  ];
  return (
    <>
      <div className="max-h-full min-h-[678px]">
        <h1 className="text-slate-800 font-bold text-2xl mt-4 ml-2">
          Upcoming Journeys
        </h1>
        {studentJourneys.length != 0 ? (
          studentJourneys.map(({ id, time, day, date, from, to }) => (
            <JourneyBox
              id={id}
              time={time}
              key={id}
              day={day}
              date={date}
              from={from}
              to={to}
            />
          ))
        ) : (
          <NoData text={NoDataText} />
        )}
      </div>
    </>
  );
}
