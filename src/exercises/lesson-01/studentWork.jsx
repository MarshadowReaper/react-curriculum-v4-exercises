//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Tajee';
  const age = 27;
  const hobbies = ['Gaming', 'Collecting'];

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Hello my name is {name}, I'm currently {age} years old pleased to meet
        you. I'm new to react and am after another goal, I'm hoping to bring
        more energy that I brought last time to achieve it just like last time.
      </p>
      <ul>
        {hobbies.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
    </div>
  );
}
