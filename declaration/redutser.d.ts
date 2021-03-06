import * as H from "../type-helpers";
export declare type Reducer<State, Payload = any> = (s: State, p: Payload) => State;
export declare type ReducerDict<State> = {
    [name: string]: (s: State, p: any) => State;
};
export declare type ActionCreatorsFromReducerDict<Inp extends ReducerDict<any>> = {
    [K in keyof Inp]: (payload: H.SecondArg<Inp[K]>) => {
        type: K;
        payload: H.SecondArg<Inp[K]>;
    };
};
export declare type ActionTypesFromReducerDict<Inp extends ReducerDict<any>> = H.FnReturn<H.Values<ActionCreatorsFromReducerDict<Inp>>>;
export declare const createRedutser2: <State>(initialState: State) => <Dict extends ReducerDict<State>>(reducerDict: Dict) => Redutser<State, Dict>;
export declare const createRedutser: <State, Dict extends ReducerDict<State>>(initialState: State, reducerDict: Dict) => Redutser<State, Dict>;
export interface Redutser<State, Dict extends ReducerDict<State>> {
    creators: ActionCreatorsFromReducerDict<Dict>;
    reducer: (state: State | undefined, action: H.FnReturn<ActionCreatorsFromReducerDict<Dict>[keyof Dict]>) => State;
    initialState: State;
    actionTypes: ActionTypesFromReducerDict<Dict>;
    __redutser__: boolean;
    _reducerDict: Dict;
}
