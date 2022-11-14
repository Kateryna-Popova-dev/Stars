import './App.scss';
import Stars from "./Components/Stars";
import ClassStars from "./Components/ClassStars";

function App() {
  return (
    <div className="App">
      <h2>I`m a functional component</h2>
      <Stars points={0}></Stars>
      <h2>I`m a class component</h2>
      <ClassStars points={0}></ClassStars>
    </div>
  );
}

export default App;
