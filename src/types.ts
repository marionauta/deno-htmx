export type ReswapOption =
  | "innerHTML"
  | "outerHTML"
  | "beforebegin"
  | "afterbegin"
  | "beforeend"
  | "afterend"
  | "delete"
  | "none";

export type HtmxResponseOptions = {
  reswap?: ReswapOption;
};

export type HtmxResponse<Body> = {
  body: Body;
  options?: HtmxResponseOptions;
};

export type HtmxServeHandler<Body> = (
  request: Request,
  info: Deno.ServeHandlerInfo,
) => HtmxResponse<Body> | Promise<HtmxResponse<Body>>;
