import { LoadThing } from "./loadThing";

export type API = {
  loadThing: LoadThing,
};

export type HasApi = { api: API };
