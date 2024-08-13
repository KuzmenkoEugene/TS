type Foo1<T> = T extends (params: any) => infer U ? U : never;

type Foo2<T> = T extends (param: infer U) => infer V ? [U, V] : never
