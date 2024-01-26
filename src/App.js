import logo from './logo.svg';
import './App.css';
import Emo from'./Emo.jsx';
function App() {
  return (
    <div className="App">
      
      {
        <span style={{fontSize:"50px"}}><b>THIS IS A SCOREKEEPER OF 10 PLAYERS</b></span>
      }
      <Emo n={10} targ={10}/>
    </div>
  );
}

export default App;
