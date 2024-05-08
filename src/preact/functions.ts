import { render } from "https://esm.sh/preact-render-to-string@6.4.2";
import { htmxResponseToStandard as htmxResponseToStandardBase } from "../functions.ts";

export const htmxResponseToStandard = htmxResponseToStandardBase(render);
