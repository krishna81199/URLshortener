import ParticleBackground from './ParticleBackground';
import InputShortner from './InputShortner';
import LinkResult from './component/LinkResult';
import { userContext } from './context/userContext';
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [shortLink, setShortLink] = useState('');
 

  return (
    <userContext.Provider value={{value, setValue, shortLink, setShortLink}}>
      <div className="App">
        <ParticleBackground/>        
        <div className='App-container'>
          <div className='container'>
            <InputShortner/>
            <LinkResult/>
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
