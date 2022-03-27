

const FormatResults = (props) => {
    let dictionary = props.dictionary;

    // console.log(dictionary);
    // console.log(JSON.stringify(dictionary));

    Object.keys(dictionary).reverse() /////////////////////

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

    // {
    //     title: "",
    //     position: 0,
    //     link: "",
    //     fk: 0,
    //     body: "",
    //     domain: "",
    //     snippet: "",
    // }

    return(
        <div className="resultsContainer">
        {Object.keys(dictionary).map(keyx => {
            console.log(dictionary[keyx]);
            return ( ///////////////////////////

            // < >
                <div key={keyx}>
                    <div  className={colorDecider(keyx)}> Grade : {keyx} </div>
                    <ul>
                        {dictionary[keyx].map((element) => {
                            return (<li key={element.position} href={element.link} target="_blank" rel="noopener noreferrer"> 
                                <h2>{element.title}</h2>
                                <h2>{element.fk}</h2>
                                <h3>{element.domain}</h3>
                            </li>);
                        })}
                    </ul> 
                </div>
            // </>
            );
        }
        )}
        </div>
    )

}

export default FormatResults
