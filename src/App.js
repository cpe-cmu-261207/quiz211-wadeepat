import { useState } from "react";
import { CardTable } from "./component/table";
function App() {
  const [num, setnum] = useState(620610806);

  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Wadeepat Lertwatanawanich 620610806",
      gender: "female",
      age: "19"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}

      {persons.map((i) => {
        return <CardTable name={i.name} gender={i.gender} age={i.age} />;
      })}

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>{num}</p>
      <button
        onClick={() => {
          setnum(num - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setnum(620610806);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
