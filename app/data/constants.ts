import { dropdownDataType, editTimeTableOptionsType } from "../types/types";

export const studentNavBarData = [
  { name: "Dashboard", path: "/student/dashboard", key: "s1" },
  { name: "View/Book Ticket", path: "/student/book-ticket", key: "s2" },
  { name: "LogOut", path: "/student/profile", key: "s3" },
];

export const adminNavBarData = [
  { name: "Dashboard", path: "/admin/dashboard", key: "a1" },
  { name: "LogOut", path: "/admin/manage-users", key: "a2" },
];

export const conductorNavBarData = [
  { name: "Routes", path: "/conductor/routes", key: "c1" },
  { name: "Tickets", path: "/conductor/tickets", key: "c2" },
  { name: "Profile", path: "/conductor/profile", key: "c3" },
];
export const notLoggedInData = [
  { name: "SignIn", path: "/conductor/routes", key: "n1" },
  { name: "SignUp", path: "/conductor/tickets", key: "n2" },
  { name: "Profile", path: "/conductor/profile", key: "n3" },
];

export const editTimeTableOptions: Array<editTimeTableOptionsType> = [
  { text: "Add Journey" },
  { text: "Update Journey" },
  { text: "Delete Journey" },
];

export const daysForBookingTicket: Array<dropdownDataType> = [
  { value: "days", label: "Monday" },
  { value: "days", label: "Tuesday" },
  { value: "days", label: "Wednesday" },
  { value: "days", label: "Thursday" },
  { value: "days", label: "Friday" },
  { value: "days", label: "Saturday" },
  { value: "days", label: "Sunday" },
  { value: "days", label: "Monday_to_Friday" },
  { value: "days", label: "Saturday_and_Sunday" },
];
export const fromForBookingTicket: Array<dropdownDataType> = [
  { value: "from", label: "New York" },
  { value: "from", label: "Los Angeles" },
  { value: "from", label: "Chicago" },
  { value: "from", label: "Houston" },
  { value: "from", label: "Phoenix" },
  { value: "from", label: "Philadelphia" },
  { value: "from", label: "San Antonio" },
  { value: "from", label: "San Diego" },
  { value: "from", label: "Dallas" },
];

export const toForBookingTicket: Array<dropdownDataType> = [
  { value: "to", label: "Miami" },
  { value: "to", label: "Atlanta" },
  { value: "to", label: "Orlando" },
  { value: "to", label: "Seattle" },
  { value: "to", label: "Boston" },
  { value: "to", label: "Las Vegas" },
  { value: "to", label: "Denver" },
  { value: "to", label: "San Francisco" },
  { value: "to", label: "Washington D.C." },
];

export const timeForBookingTicket: Array<dropdownDataType> = [
  { value: "time", label: "Morning (6 AM - 12 PM)" },
  { value: "time", label: "Afternoon (12 PM - 4 PM)" },
  { value: "time", label: "Evening (4 PM - 8 PM)" },
  { value: "time", label: "Night (8 PM - 12 AM)" },
  { value: "time", label: "Late Night (12 AM - 6 AM)" },
];
