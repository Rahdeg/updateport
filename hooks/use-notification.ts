import { create } from "zustand";

interface AlertState {
  isAlert: boolean;
  message: string;
  status: string | null;
}

interface AlertStore {
  alert: AlertState;
  setAlert: (alert: Partial<AlertState>) => void;
}

export const useAlertStore = create<AlertStore>((set) => ({
  alert: {
    isAlert: false,
    message: "",
    status: null,
  },
  setAlert: (newAlert) =>
    set((state) => ({ alert: { ...state.alert, ...newAlert } })),
}));
