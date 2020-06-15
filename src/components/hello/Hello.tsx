import React, { useEffect } from "react";
import { PropsFromRedux } from "./HelloContainer";

type HelloProps = PropsFromRedux;

function HelloComponent({ sayHello, serverResponse }: HelloProps): JSX.Element {
  useEffect(() => {
    sayHello();
  }, [sayHello]);

  const msg = serverResponse ? serverResponse : "Pinging server...";

  return (
    <article className="message">
      <div className="message-header">Hello World</div>
      <div className="message-body">{msg}</div>
    </article>
  );
}

export default HelloComponent;
