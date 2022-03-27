import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';

const SearchBox = () => {

    const [input, setInput] = useState('');

    const focusTarget = useRef(null)

    useEffect(() => {
        focusTarget.current.focus()
    })
    
    const handleSubmit = e => {
        
        const axios = require('axios');

        // set up the request parameters
        const params = {
        api_key: "2D98492BC888427BB1BE8EDFF27D4BC5",
        q: input,
        num: "20",
        output: "csv",
        csv_fields: "organic_results.title,organic_results.link"
        }

        // make the http GET request to SerpWow
        axios.get('https://api.serpwow.com/search', { params })
        .then(response => {

            // print the CSV response from SerpWow
            console.log(response.data);

        }).catch(error => {
            // catch and print the error
            console.log(error);
        })
    
        
                e.preventDefault();
                setInput('')
            }

            

    const handleChange = e => {
        setInput(e.target.value);
    }

    return (
        <form className = "Searchform" onSubmit = {handleSubmit}>
    
        <input
        type = "text"
        placeholder = "What do you want to learn?"
        value = {input}
        name = "text"
        className = "Searchbar"
        onChange = {handleChange}
        ref = {focusTarget}
        />

        <button className = "Submitbutton">
        submit
        </button>

        </form>
    )
}

export default SearchBox;
