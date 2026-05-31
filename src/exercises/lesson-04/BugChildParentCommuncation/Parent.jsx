import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child increment={increment} />
    </div>
  );
}
// had to add a Child custom component to update with the Child.jsx so that it can update as you press the button.
