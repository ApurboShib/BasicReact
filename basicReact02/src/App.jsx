import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import User from "./User";
import Photos from "./Photos";
import Friends from "./Friends";
import Friend from "./Friend";
import Posts from "./Posts";

function App() {
  // for button one (click me)
  function handleClick() {
    alert("Button clicked!");
  }

  // for button two (click 2)
  const handleClick2 = () => {
    alert("Button 2 clicked!");
  };

  // if we take a parameter on eventHandler.
  const handlePara = (num) => {
    alert(num + 10);
  };

  return (
    <>
      <h2>React Core Concepts 2</h2>
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>{" "} */}
      {/* Updated function name to match the corrected one */}
      {/* we can define the function at onClick() */}
      {/* <button
        onClick={() => {
          alert("button 3 is Clicked");
        }}
      >
        Click 3
      </button>
      {/*Wrapped `handlePara(3)` in an arrow function */}
      {/* <button onClick={() => handlePara(3)}>Button</button> */}
      {/* <Counter />  */}
      {/* <Team> </Team> */}
      {/* <User /> */}
      {/* <Photos /> */}
      {/* <Friends /> */}
      {/* <Photos /> */}
      {/* <Friends /> */}
     
      <Posts></Posts>

    </>
  );
}

export default App;
