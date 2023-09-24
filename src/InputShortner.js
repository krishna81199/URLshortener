import React, { useContext } from 'react'
import { userContext } from './context/userContext'
import axios from 'axios';


function InputShortner() {
  const {value, setValue, setShortLink} = useContext(userContext);
  const handleSubmit = async () =>{
    try {
      const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${value}`);
      setShortLink(res.data.result.short_link);
    } catch (error) {
      
    }
  }
  return (
    <div>
        <h1>URL <span>Shortner</span></h1>
        <div className='input-container'>
            <input type='text' placeholder='Past a link to shorten it...'
              value={value}
              onChange={(e)=> setValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Shorten</button>
        </div>
    </div>
  )
}

export default InputShortner