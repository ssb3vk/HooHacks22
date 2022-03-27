import React from 'react'
import * as FleschKincaid from'flesch-kincaid'

const RateDifficulty = (props) => {
    
let text = props.text;

let result = Math.floor(FleschKincaid.grade(text))

  return (result)

}

export default RateDifficulty