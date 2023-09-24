import {React, useEffect, useState, useContext } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { userContext } from '../context/userContext';

function LinkResult() {

    const { shortLink } = useContext(userContext);
    const[copied, setCopied] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCopied(false);
        }, 3000);
        console.log(timer)
        return ()=> clearTimeout(timer)
    },[copied]);

  return (
    <div>
        {
            shortLink.length === 0 ? '' :
            <div className='result'>
                <p>{shortLink}</p>
            <CopyToClipboard text={shortLink} onCopy={()=>setCopied(true)}>
                <button className={copied ? 'copied' : ''}>copy to clipboard</button>
            </CopyToClipboard>
            </div>
        }
    </div>
  )
}

export default LinkResult