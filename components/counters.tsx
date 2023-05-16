// Example from https://beta.reactjs.org/learn

import { useState } from "react";
import styles from "./counters.module.css";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
      <p className="text-3xl text-black hover:hidden">
        Open the browser DevTools to inspect the button element.
      </p>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
