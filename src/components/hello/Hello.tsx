import React, { useEffect } from "react";
import { PropsFromRedux } from "./HelloContainer";

type HelloProps = PropsFromRedux;

function HelloComponent({ sayHello, serverResponse }: HelloProps): JSX.Element {
  useEffect(() => {
    sayHello();
  }, [sayHello]);

  const msg = serverResponse ? serverResponse : "Pinging server...";

  return <div>{msg}</div>;
}

export default HelloComponent;
