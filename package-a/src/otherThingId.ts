import * as t from "io-ts";
import { NonEmptyString } from "./nonEmptyString";

export interface OtherThingIdBrand {
  readonly OtherThingId: unique symbol;
}

export const OtherThingId = t.brand(
  NonEmptyString,
  (s): s is t.Branded<NonEmptyString, OtherThingIdBrand> => true,
  "OtherThingId"
);

export type OtherThingId = t.TypeOf<typeof OtherThingId>;
