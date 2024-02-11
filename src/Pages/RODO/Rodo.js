import React, {useState,useEffect} from 'react'
import './Rodo.scss'

import Regulations_txt from './Regulations.txt'
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
        {texts.t1}
        {texts.t2}
    </div>
  )
}
