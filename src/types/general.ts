export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;
