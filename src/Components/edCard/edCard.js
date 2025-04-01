import { useState, useEffect } from 'react';
import './edCard.scss';

export default function EdCard({img,title,big_title}) {

    const [src,setSrc] = useState(0);
    const [fade,setFade] = useState(false);


    useEffect(()=>{
        let interval = 0;
        setFade(true);
        setTimeout(()=>{
            setSrc(curr => curr+1 >= img.length? 0 : curr+1)
            setFade(false);
        },250);
        interval = setInterval(()=>{
            setFade(true);
            setTimeout(()=>{
                setSrc(curr => curr+1 >= img.length? 0 : curr+1)
                setFade(false);
            },250);
        },Math.round(Math.random() * 4000) + 3000)
        
        return () => {clearInterval(interval);}
    },[img.length])

  return (
    <div className={`edCard`}>
        <div className='edCard_Main'>
            <img src={img[src]} alt='card' className={`edCard_Image ${fade ? 'fade' : ''}`}/>
            <div className='edCard_Main_text'>
                <h2 className='jersey-15'>{big_title}</h2>
                <h3 className='jersey-10'>{title}</h3>
            </div>
        </div>
    </div>
  )
}
