// import React from "react";
// import Bird from "./Components/Bird";
// import BirdList from "./Components/BirdList";

// const App = () => {

//     return(
//         <div>
//             <BirdList/>
//         </div>
//     )
// }
// export default App;
import BirdList from "./BirdList";

export default function App() {
  return (
    <div className="App">
      <h1>Bird List</h1>
      <p>Add Bird</p>
      <BirdList />
    </div>
  );
}