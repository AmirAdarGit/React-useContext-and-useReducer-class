import './App.css';
import { UseReducerExample } from "./components/UseReducerExample";
import { UseContextExample } from "./components/UseContextExample";

function App() {
  return (
    <div className="App">
      {/*<UseReducerExample /> /!* useReducer *!/*/}
      <UseContextExample /> {/* useContext */}
    </div>
  );
}

export default App;
