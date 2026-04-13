//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here

export default function StudentWork() {
  const favoriteSnack = [
    { rank: 4, snack: 'Apple' },
    { rank: 3, snack: 'Cheez-It' },
    { rank: 2, snack: 'Moose Munch' },
    { rank: 1, snack: 'Iced Honey Bun' },
  ];

  return (
    <div>
      <h1>Snacks</h1>
      {/* add JSX here */}
      <p> This is my list of favorite snacks from least to greatest. </p>

      <ul>
        {favoriteSnack
          .toSorted((a, b) => a.rank - b.rank)
          .map((favoriteSnack) => (
            <li key={favoriteSnack.rank}>{favoriteSnack.snack}</li>
          ))}
      </ul>
    </div>
  );
}
 //Programmer note had help with figuring out how to apply toSorted 