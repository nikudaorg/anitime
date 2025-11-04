export type PropsOptions<
  Keys extends string[],
  Key extends Keys[number] = Keys[number]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = Key extends any
  ? {
      [K in Key]: true;
    } & {
      [K in Exclude<Keys[number], Key>]?: false;
    }
  : never;
