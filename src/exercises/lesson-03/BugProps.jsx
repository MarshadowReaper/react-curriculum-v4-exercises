// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  let [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hello ' + name + '!');
  }

  return (
    <>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </>
  );
}

// Explanation:
// (I changed the let variable to take advantage of the useState to be able to change the state, next I set a setMessage to handle the change for the name.)
