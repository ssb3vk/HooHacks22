import logo from './logo.svg';
import './App.css';

function App() { 

  async function fetchText() {
    let response = await fetch('https://www.mathsisfun.com/algebra/index.html');
    let data = await response.text();
    console.log(data);
  }
  fetchText()

  return (

    <div className="App">

    </div>
  );
}

export default App;
