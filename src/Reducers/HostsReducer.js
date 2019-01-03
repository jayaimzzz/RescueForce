import { hosts } from "../dummyData";

const initState = hosts;

export const HostsReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
