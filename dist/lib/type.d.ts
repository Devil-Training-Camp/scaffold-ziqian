export type Target = object | any[];
export interface ReactiveHandler {
    get?: (target: Target, p: PropertyKey, receiver: any) => any;
    set?: (target: Target, p: PropertyKey, value: any, receiver: any) => boolean;
}
