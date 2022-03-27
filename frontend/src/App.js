import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import Data from './components/Data';

import axios from "axios";
import SearchBox from './components/SearchBox';
import FormatResults from './components/FormatResults';
import React, { useState, useCallback } from 'react';

function App() { 
  const [articles, setArticles] = useState([]);
  const [articleDict, setArticleDict] = useState({});
  // var articleDict = {};


  // let areicles = {
  //   8: [ "Khan Academy", "MathIsFun", "McGraw Hill" ],
  //   12: [ "Paul's calculus notes" ],
  //   7: ["Ligma"],
  //   14:["nice"],
  //   9:["m"]
  // }

  function handle_organic_results(o_r){
    // response.data.organic_results [  {position, title, link, domain, snippet, } ]
    setArticles(o_r);
    // console.log(articles);
  }

  const add_to_dic = useCallback((key1, val1) => {
    console.log("Adding key");
    console.log(key1);
    console.log("Adding value");
    console.log(val1);
    if (key1 in articleDict){
      setArticleDict(prevDict => ({...prevDict, [key1]: [...prevDict[key1], val1]}));
    }
    else {
      setArticleDict(prevDict => ({...prevDict, [key1]: [val1,]}));
    }
    console.log(JSON.stringify(articleDict));
    console.log(articleDict[key1]);
  }, [setArticleDict]);


  // const add_to_dic = (key1, val1) => {
  //   // console.log("Adding key");
  //   // console.log(key1);
  //   // console.log("Adding value");
  //   // console.log(val1);
  //   if (key1 in articleDict){
  //     articleDict[key1].push(val1);
  //   }
  //   else {
  //     articleDict[key1] = [val1];
  //   }
  //   // console.log(JSON.stringify(articleDict));
  //   // console.log(articleDict[key1]);
  // };


  // function add_to_dic (key1, val1){
  //   if (key1 in articleDict){
  //     setArticleDict(prevDict => ({...prevDict, key1: [...prevDict[key1], val1]}))
  //   }
  //   else {
  //     setArticleDict(prevDict => ({...prevDict, key1: [val1,]}))
  //   }
  // }

  const colorDecider = (n) =>{
        if(n <= 6){
            return("Easy")
        }
        else if(n<= 10){
            return("Mid")
        }
        else{
            return("Hard")
        }
  }
  
  return (
    <div>
      <SearchBox return_data={handle_organic_results}/>
      { articles.map((article_i) => 
        <Page article={article_i} key={article_i.position}>
          <Data addToDic={add_to_dic} />
        </Page>
      )}
      {/* <FormatResults dictionary={articleDict} />
       */}
       <div className="resultsContainer">
        {Object.entries(articleDict).map(([keyx, valx]) => {
            console.log(valx);
            return ( 
                <div key={keyx}>
                    <div  className={colorDecider(keyx)}> Grade : {keyx} </div>
                    <ul>
                        {valx.map((element) => {
                            return (<div href={element.link} target="_blank" rel="noopener noreferrer" key={element.position}><li> 
                                <h2>{element.title}</h2>
                                <h2>{element.fk}</h2>
                                <h3>{element.domain}</h3>
                            </li></div>);
                        })}
                    </ul> 
                </div>
            );
        }
        )}
        </div>
    </div>
  );
}

export default App;
