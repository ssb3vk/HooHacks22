import logo from './logo.svg';
import './App.css';
import axios from "axios";
import SearchBox from './Components/SearchBox';
import FormatResults from './Components/FormatResults';

function App() { 


  /*  async function fetchText() {
    let response = await fetch('https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/Main_Page' , 
    {headers: {"Access-Control-Allow-Origin":"*" , mode : "cors"}});
    let data = await response.text();
    console.log(data);
  }*/

  let areicles = {
    8: [ "Khan Academy", "MathIsFun", "McGraw Hill" ],
    12: [ "Paul's calculus notes" ],
    7: ["Ligma"],
    6:["balls"],
    14:["nice"],
    9:["m"]
  }

  
  return (

    <div className="App">
      <SearchBox/>
      <FormatResults dictionary={areicles}/>
    </div>
  );
}

export default App;
