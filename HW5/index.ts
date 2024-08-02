type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object
    ? DeepRequireReadonly<T[K]>
    : T[K];
};

type CapitalizeGetter<K extends string> = Uppercase<K>;

type UpperCaseKeys<T> = {
  [K in keyof T & string as CapitalizeGetter<K>]: T[K];
};

type IDescriptor<T> = {
    value: T;
    writable: boolean;
    enumerable: boolean;
    configurable: boolean;
};

type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: IDescriptor<T[K]>
}
