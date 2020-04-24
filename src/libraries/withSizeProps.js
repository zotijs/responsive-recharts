import React, { useState, useRef } from "react";
import { fromEvent } from "rxjs";
import { exhaustMap, delay } from "rxjs/operators";

const withSizeProps = (Component) => (...props) => {
  const ref = useRef();

  const initialState = { height: window.innerHeight, width: window.innerWidth };
  const [size, setSize] = useState(initialState);

  const resize$ = fromEvent(window, "resize");
  //needs improvement
  resize$
    .pipe(
      delay(1000),
      exhaustMap((e) => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        return resize$;
      })
    )
    .subscribe();

  return (
    <div ref={ref}>
      <Component {...props} size={size} />
    </div>
  );
};

export default withSizeProps;
