import './App.css';
import Tasklist from "./Component/Tasklist"
import Addtodo from "./Component/Addtodo";

function App() {
  return (
    <div className="App">
    <Addtodo/>
    <Tasklist/> 
    </div>
  );
}

export default App;
