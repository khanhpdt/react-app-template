import { Action } from "redux";

export const SAY_HELLO = "home/SayHello";

export interface SayHello extends Action {
  type: typeof SAY_HELLO;
}

export function sayHello(): SayHello {
  return {
    type: SAY_HELLO,
  };
}

export const SAY_HELLO_SUCCESS = "home/SayHelloSuccess";

export interface SayHelloSuccess extends Action {
  type: typeof SAY_HELLO_SUCCESS;
  serverResponse: string;
}

export function sayHelloSuccess(response: string): SayHelloSuccess {
  return {
    type: SAY_HELLO_SUCCESS,
    serverResponse: response,
  };
}

export const SAY_HELLO_FAILED = "home/SayHelloFailed";

export interface SayHelloFailed extends Action {
  type: typeof SAY_HELLO_FAILED;
}

export function sayHelloFailed(): SayHelloFailed {
  return {
    type: SAY_HELLO_FAILED,
  };
}

export type HomeActions = SayHello | SayHelloSuccess | SayHelloFailed;
