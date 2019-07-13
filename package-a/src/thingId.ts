import * as t from "io-ts";
import { NonEmptyString } from "./nonEmptyString";

export interface ThingIdBrand {
  readonly ThingId: unique symbol;
}

export const ThingId = t.brand(
  NonEmptyString,
  (s): s is t.Branded<NonEmptyString, ThingIdBrand> => true,
  "ThingId"
);

export type ThingId = t.TypeOf<typeof ThingId>;
