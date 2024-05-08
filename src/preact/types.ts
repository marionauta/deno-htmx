export type * from "../types.ts";
import type { JSX } from "https://esm.sh/preact@10.21.0";
import type {
  HtmxResponse as HtmxResponseBase,
  HtmxServeHandler as HtmxServeHandlerBase,
} from "../types.ts";

export type HtmxResponse = HtmxResponseBase<JSX.Element>;
export type HtmxServeHandler = HtmxServeHandlerBase<JSX.Element>;
