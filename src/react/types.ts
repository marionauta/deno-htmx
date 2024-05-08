export type * from "../types.ts";
import { JSX } from "https://esm.sh/react@18.3.1";
import type {
  HtmxResponse as HtmxResponseBase,
  HtmxServeHandler as HtmxServeHandlerBase,
} from "../types.ts";

export type HtmxResponse = HtmxResponseBase<JSX.Element>;
export type HtmxServeHandler = HtmxServeHandlerBase<JSX.Element>;
