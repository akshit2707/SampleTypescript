import React, { useState } from "react";

import List from "./components/List";
import "./App.css";
import AddToList from "./components/AddToList";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    comment?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Aryan Khan",
      age: 25,
      url: "https://images.news18.com/ibnlive/uploads/2021/10/aryan-khan-1-2.jpg",
      comment: "NCB laal salaam",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
