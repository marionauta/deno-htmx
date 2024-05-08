# Deno HTMX

A collection of types and helpers that I frequently use when working with HTMX
and Deno. I thought some of you might find them useful too.

## Organization

I personally use [preact][preact] for my server side rendering, so I import
`src/preact/mod.ts` into my code. It is designed to use preact's `JSX.Element`
as the `Body` type.

If you use any other library, you can import `src/mod.ts` and work with the
generic functions. You just need to define a custom `Body` type and a
"stringify" function that takes a `Body` and returns a `string`.

[preact]: https://preactjs.com/
