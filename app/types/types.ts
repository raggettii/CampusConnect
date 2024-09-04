export type studentJourneyType = {
  id: string;
  time: string;
  day: string;
  date: string;
  from: string;
  to: string;
};
// export type timeTableType = {
//   id: string;
//   time: string;
//   day: string;
//   from: string;
//   to: string;
// };
export type busDetailsType = {
  id: string;
  busNumber: number;
  busRtoNumber: string;
  conductorName: string;
  conductorPhoneNumber: string;
};

export type navDataType = {
  name: string;
  path: string;
  key: string;
};

export type shuttleTimetableType = {
  id: string;
  from: string;
  to: string;
  outTime: string;
  days: string;
};
