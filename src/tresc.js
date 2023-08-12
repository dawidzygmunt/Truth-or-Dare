import { useState } from "react";


function Card () {
  const [dare, setDare] = useState('');
  
  const avc = () => {
    const dare = document.getElementsByClassName('formInput')[1].value
    console.log(dare);
    setDare(dare);
  }

  
  
  return(
    <div className="card">
      <h2>{question}</h2>
      <h2>{dare}</h2>
      <button onClick={handleNewString}>Testuj!</button>
      <button onClick={avc}>Testuj2</button>

    </div>
  )
}


