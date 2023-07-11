import { RootStore } from "../stores/RootStore";

export interface IAppStore {
  stores: RootStore;
}

export type TRootStore = IAppStore["stores"];
