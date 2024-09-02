export type studentJourneyType = {
  id: string;
  time: string;
  day: string;
  date: string;
  from: string;
  to: string;
};
export type timeTableType = {
  id: string;
  time: string;
  day: string;
  from: string;
  to: string;
};
export type busDetailsType = {
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
