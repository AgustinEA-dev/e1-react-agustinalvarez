import { createContext } from "react";

export const displayContext = {
  display: {
    display: "flex",
  },
  noDisplay: {
    display: "none",
  },
};

const DisplayContext = createContext(displayContext.noDisplay);

export default DisplayContext;
