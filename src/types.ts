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
  body: Body | null;
  options?: HtmxResponseOptions;
  init?: ResponseInit;
};

export type HtmxServeHandler<Body> = (
  request: Request,
  info: Deno.ServeHandlerInfo,
) => HtmxResponse<Body> | Promise<HtmxResponse<Body>>;
