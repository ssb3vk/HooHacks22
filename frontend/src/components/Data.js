import React, { useContext, useEffect, useRef } from "react";
import { ScrapeContext } from "./ScrapeContext";
import * as FleschKincaid from '../../node_modules/flesch-kincaid/flesch-kincaid'

// var pronouncing = require('pronouncing');

//   function sylabbleCounter(words) {
//     let sylcount = 0;
//     for (i = 0; i < words.length; i++) {
//         let parsed_word = words[i].replace(".", "");
//         sylcount += num_syls(parsed_word.toLowerCase());
//         // console.log(sylcount);
//     }
//     return sylcount;
//   }

// function num_syls(word) {
//     return pronouncing.syllableCount(pronouncing.phonesForWord(word)[0]);
// }

// // Returns grade level estimate of Flesh-Kincaid test
// function flesch_kinkaid_calc(article) {
//     let words = article.split(' ');
//     let sentenceNumber = article.split('.').length;
//     let syllableCount = sylabbleCounter(words);
//     return 0.39 * (words.length / (sentenceNumber-1)) + 11.8 * (syllableCount / words.length) - 15.59;
//   }

// console.log(flesch_kinkaid_calc("The Australian platypus is seemingly a hybrid of a mammal and reptilian creature."));

export default function Data({ addToDic }){
    const article_info = useContext(ScrapeContext);
    let result = 0;
    if ((typeof(article_info) != "undefined")&&(typeof(article_info.body) != "undefined")){
        result = FleschKincaid.grade(article_info.body);
        // result = flesch_kinkaid_calc(article_info.body);
    }
    else {
        result = -1;
    }
    // let result = 69;
    const childRef = useRef();
    const a2d = addToDic;
    let firsttime = true;

    useEffect(() => {
        // article_info = { position, title, link, domain, snippet, body} 
        if(firsttime){
            // console.log(article_info.body);
            a2d(Math.floor(result), {...article_info, fk: result });
            // console.log("Trying to add " + article_info.title);
            // console.log(Math.floor(result));
        }
        firsttime = false;
    }, [a2d,])


    // organic_results.forEach(function (item, index){
    //     // item.link
    //     // display item.title, item.domain, item.snippet
    // });

    // Object.keys(dictionary).reverse() /////////////////////

    // const colorDecider = (n) =>{
    //     if(n <= 6){
    //         return("Easy")
    //     }
    //     else if(n<= 10){
    //         return("Mid")
    //     }
    //     else{
    //         return("Hard")
    //     }
    // }

    return(
        // <div>{article_info.body}</div>
        <div />
    )

}