import { useState } from "react";

export default function Team() {
  const [team, setCount] = useState(11);
  const teamSheet = {
    border: "2px solid blue",
    padding: "10px",
    margin: "10px",
    color: "black",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "0.3s",
  };
  const handleAdd = () => {
    const newPlayer = team + 1;
    setCount(newPlayer);
  };
  const handleRemove = () => {
    setCount(team - 1);
  };

  return (
    <div style={teamSheet}>
      <h3 style={{ color: "blue", fontSize: "24px", fontWeight: "700" }}>
        Team Sheet
      </h3>
      <h3>Player : {team} </h3>
      <button  onClick={handleAdd}>ADD</button>
      <button onClick={handleRemove}>SUB</button>
    </div>
  );
}
