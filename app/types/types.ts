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

export type imageComponentType = {
  className: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type buttonComponentType = {
  className?: string;
  onClickHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  imageComponent?: imageComponentType;
  text?: string;
  physicalButton: boolean;
  textOnPhysicalButton?: string;
  disabled?: boolean;
};

export type inputBoxType = {
  headerText: string;
  placeHolder: string;
  type?: string;
  required: boolean;
  value: string | number | undefined;
  onChange: React.ChangeEventHandler;
};

export type modelComponentType = {
  heading: string;
  buttonHeadingForModal: string;
  formType: string;
  formSubmitType: string;
};

export type editTimeTableOptionsType = {
  text: string;
  id?: string;
};

export type dropdownDataType = {
  value: string;
  label: string;
};

// export type dropdownComponentType = {
//   className?: string;
//   physicalButton: boolean;
//   textOnPhysicalButton?: string;
//   buttonImageData?: imageComponentType;
//   dataToDisplayOnDropdown: Array<string>;
//   handleOptionClick: () => void;
// };
