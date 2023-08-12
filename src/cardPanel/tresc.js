import React, { useState } from "react";
import Card from "./card";

function Tresc() {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setInputText(value);
    var jar = document.getElementsByClassName('card1')
    jar.innerHTML = '123'
    console.log(jar);
  }

  
  return (
    <div>
      <label htmlFor="">Treść</label> <br />
      <textarea name="tresc" value={inputText} onChange={handleChange} 
        className='formInput content' cols="20" rows="10">
      </textarea>

      <input type="submit" value='Zatwierdź' className='submitButton' />
      <div className="card1">a</div>
    </div>
  )
}

export default Tresc;