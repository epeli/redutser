export type SecondArg<T> = T extends (x: any, y: infer V) => any ? V : never
export type Values<K> = K[keyof K]
export type FnReturn<T> = T extends (...x: any[]) => infer V ? V : never

export type ThunkFunction<Actions, StateT> = (
  dispatcher: ThunkDispatcher<Actions, StateT>,
  getState: () => StateT
) => void | Promise<void>

export interface ThunkDispatcher<Actions, State> {
  (i: Actions): void
  (fn: ThunkFunction<Actions, State>): void
}
