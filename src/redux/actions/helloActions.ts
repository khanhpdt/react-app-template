import { Action } from "redux";

export const SAY_HELLO = "hello/SayHello";

export interface SayHello extends Action {
  type: typeof SAY_HELLO;
}

export function sayHello(): SayHello {
  return {
    type: SAY_HELLO,
  };
}

export const SAY_HELLO_SUCCESS = "hello/SayHelloSuccess";

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

export const SAY_HELLO_FAILED = "hello/SayHelloFailed";

export interface SayHelloFailed extends Action {
  type: typeof SAY_HELLO_FAILED;
}

export function sayHelloFailed(): SayHelloFailed {
  return {
    type: SAY_HELLO_FAILED,
  };
}

export type HelloActions = SayHello | SayHelloSuccess | SayHelloFailed;
