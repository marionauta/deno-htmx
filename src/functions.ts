import { HtmxResponse } from "./types.ts";

export function htmxResponseToStandard<Body>(
  stringifyBody: (body: Body) => string,
): (response: HtmxResponse<Body>) => Response {
  return function(response) {
    const body = stringifyBody(response.body);
    const headers = new Headers({
      "content-type": "text/html; charset=utf-8",
    });
    if (response.options?.reswap) {
      headers.append("hx-reswap", response.options.reswap);
    }
    return new Response(body, { headers });
  };
}