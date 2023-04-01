import React from "react";

export const CheckBoxContext = React.createContext({
  check: false,
  setCheck: (a: boolean) => {},
});

export const LocationContext = React.createContext({
  location: "",
  setLocation: (a: any) => a,
});

export const DataContext = React.createContext({
  data: [{}],
  setData: (a: any) => a,
});
