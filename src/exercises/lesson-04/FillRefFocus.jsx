// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.

import { useRef } from 'react';
export default function FillRefFocus() {
  const text = useRef(null);

  function focusInput() {
    text.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={text} placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
//I used text to initialize the useRef and I use .current and .focus to focus the keyboard to a specific DOM element.
