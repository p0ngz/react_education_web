import { createSlice } from "@reduxjs/toolkit";

const initialMenuState = {
  menuData: {
    intro: [
      "What is React",
      "Component",
      "Virtual DOM",
      "JSX, TSX",
      "State, Props",
    ],
    Hook: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer",
      "useMemo",
      "useCallback",
      "useRef",
      "Custom Hook",
    ],
    stateManagement: ["Context API", "Redux", "Zustand"],
    compoundComponent: ["Overview", "Example"],
    API: ["Fetch API", "Axios"],
  },
};
const menuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {
    // add reducers if needed in future
    getMenuData: (state) => {
      return;
    },
  },
});

export const { getMenuData } = menuSlice.actions;
export default menuSlice.reducer;
