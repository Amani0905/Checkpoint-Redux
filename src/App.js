import './App.css';
import Tasklist from "./Component/Tasklist"
import Addtodo from "./Component/Addtodo";

function App() {
  return (
    <div className="App">
        <h1>TASK LIST</h1>
    <header className="App-header">
    <Addtodo/>
    <Tasklist/> 
    </header>
    </div>
  );
}

export default App;
