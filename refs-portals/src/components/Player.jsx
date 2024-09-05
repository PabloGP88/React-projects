import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();

  const [enterName, setEnteredName] = useState(null);

  function handleClick()
  {
    setEnteredName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enterName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
