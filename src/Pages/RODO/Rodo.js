import React, {useState,useEffect} from 'react'
import './Rodo.scss'

import Regulations_txt from './Regulations_new.txt'
import Rodo_txt from './Rodo.txt'

export default function Rodo() {

    const [texts,setTexts] = useState({t1:'',t2:''});

    const readTxt = async (path,name) =>{
        let to_r = <></>
        await fetch(path).then(res =>res.text()).then(text =>{
            const to_render = text.replaceAll('\n',"<br />");
            to_r = <p dangerouslySetInnerHTML={{__html:to_render}}></p>
        })
        setTexts(curr => {
            const obj = {...curr};
            obj[name] = to_r;
            return obj;
        });
    }

    useEffect(()=>{
        readTxt(Rodo_txt,'t2');
        readTxt(Regulations_txt,'t1');
    },[])

  return (
    <div className='Rodo'>
        <ul>
            <li><a href="/Regulations_9.pdf" download >Regulations 9th edition</a></li>
            <li><a href="/Regulations_8.txt" download >Regulations 8th edition</a></li>
            <li><a href="/Rodo.txt" download >RODO</a></li>
        </ul>
        <hr />
        <hr />
        {texts.t1}
        <hr/>
        <hr/>
        {texts.t2}
    </div>
  )
}
