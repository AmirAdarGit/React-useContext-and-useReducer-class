import logo from './logo.svg';
import './App.css';
import { Counter } from "./components/Counter";
import { UseReducerExample } from "./components/UseReducerExample";
import { UseContextExample } from "./components/UseContextExample";

function App() {
  return (
    <div className="App">
      <UseReducerExample /> {/* useReducer */}
      {/*<UseContextExample /> /!* useContext *!/*/}
    </div>
  );
}

export default App;
