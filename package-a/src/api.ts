import { ThingId } from "./thingId";
import { Thing } from "./thing";

export type LoadThing = (_: {
  id: ThingId;
}) => Promise<Thing>;

export type API = {
  loadThing: LoadThing,
};

export type HasApi = { api: API };
