import * as t from "io-ts";
import { ThingId } from "./thingId";
import { NonEmptyString } from "./nonEmptyString";

export const Thing = t.type({
  id: ThingId,
  name: NonEmptyString,
});

export type Thing = t.TypeOf<typeof Thing>;
