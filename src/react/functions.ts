import { renderToString as render } from "https://esm.sh/react-dom@18.3.1/server";
import {
  htmxResponseToStandard as htmxResponseToStandardBase,
  htmxServe as htmxServeBase,
} from "../functions.ts";

export const htmxResponseToStandard = htmxResponseToStandardBase(render);
export const htmxServe = htmxServeBase(render);
