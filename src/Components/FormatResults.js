import React, {useState, useEffect, useRef} from 'react'

const FormatResults = (props) => {

    let dictionary = props.dictionary;

    Object.keys(dictionary).reverse()

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

    return(
        <div className="resultsContainer">
        {Object.keys(dictionary).map(keyx => (
            // < >
            <div key={keyx}>
                <div  className={colorDecider(keyx)}> Grade : {keyx} </div>
                <h2>{dictionary[keyx]}</h2>
                <ul>
                    {dictionary[keyx].map((element) => {
                        <li key={element}> {element} </li>
                    })}
                </ul> 
            </div>
            // </>
        ))}
        </div>
    )

}

export default FormatResults
