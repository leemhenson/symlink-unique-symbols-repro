import { HasApi } from "./api";
import * as t from "io-ts";
import { ThingId } from "./thingId";
import { NonEmptyString } from "./nonEmptyString";

export const Result = t.type({
  id: ThingId,
  name: NonEmptyString,
});

export interface Result extends t.TypeOf<typeof Result> {};

export const loader = (hasApi: HasApi): Promise<Result> => Promise.reject();
