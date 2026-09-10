// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';
export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0); // ← incorrect implementation

  function handleClick() {
    setClickCount((prev) => +1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}
// useRef wouldn't be used here, it lets you reference a value it doesn't stop the re-render from triggering. useState would allow you to update the state value without triggering a re-render.
