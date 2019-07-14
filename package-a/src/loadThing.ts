import * as t from "io-ts";
import { Thing } from "./thing";
import { ThingId } from "./thingId";
import { OtherThingId } from "./otherThingId";

const OtherThing = t.type({
  id: OtherThingId,
});

export type LoadThing = (_: {
  id: ThingId;
}) => Promise<Thing>;
