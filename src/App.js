import './App.scss';
import FunctionStars from "./Components/FunctionStars";
import ClassStars from "./Components/ClassStars";

function App() {
  return (
    <div className="App">
      <h2>I`m a functional component</h2>
      <FunctionStars points={2}></FunctionStars>
      <h2>I`m a class component</h2>
      <ClassStars points={3}></ClassStars>
    </div>
  );
}

export default App;
