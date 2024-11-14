import { years } from "@/constants";
import { create } from "zustand";

type Year = (typeof years)[number];

type State = {
  year: Year;
  month: number;
};

const initialState: State = {
  year: new Date().getFullYear() as Year,
  month: new Date().getMonth(),
};

type Actions = {
  setYear: (year: Year) => void;
  setMonth: (month: number) => void;
};

export const useGlobalStore = create<State & Actions>((set) => ({
  ...initialState,
  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
}));
