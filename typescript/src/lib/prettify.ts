/* eslint-disable @typescript-eslint/ban-types */

export type Prettify<T> = {
  readonly [K in keyof T]: T[K];
} & {};
