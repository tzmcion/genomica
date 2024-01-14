import React,{useState,useEffect,useRef,useCallback} from 'react';
import './Banner.scss';
import BackgroundAnimation from '../../Utils/BackgroundAnimation';

import banner from '../../Assets/genomica.png';
import jag from '../../Assets/jag.png';

export default function Banner() {

  const canvas_ref = useRef(null);
  const banner_ref = useRef(null);
  const [animation,set_animation] = useState(null);
  const [dimensions,set_dimensions] = useState({width:window.innerWidth})

  useEffect(()=>{
    if(!animation){
      if(canvas_ref){
        set_animation(new BackgroundAnimation(canvas_ref.current.getContext('2d'),dimensions.width,500));
      }
    }
    if(animation){
      if(animation.animation === 0){
        animation.startAnimation();
      }
    }

    return () => {animation && animation.stopAnimation()}
  },[animation,canvas_ref,dimensions]);

  useEffect(()=>{
    //console.log(banner_ref.current.getBoundingClientRec().width);
  },[banner_ref])

  const create_animations = useCallback((e,pallete=null)=>{
    if(animation){
      const pos_y = e.clientY - 250;
       animation.create(e.clientX,pos_y,pallete);
    }
  },[animation]) 

  useEffect(()=>{
    const id = setInterval(()=>{
      const er = {
        clientX: Math.floor(Math.random()*dimensions.width),
        clientY:900
      }
      create_animations(er);
      create_animations(er);
    },500);

    return () => {clearInterval(id)}
  },[create_animations,dimensions])

  const handleClick = (e) =>{
    create_animations(e,['#99C2A2',"#FFD166","#93B1A7","#EF476F"]);
  }

  return (
    <div className='Banner' onClick={handleClick} ref={banner_ref}>
      <canvas ref={canvas_ref} width={dimensions.width} height={500}></canvas>
      <div className='Banner-Data'>
        <img src={banner} alt='bann' className='genomica'/>
        <img src={jag} alt='dad'  className='jag'/>
      </div>
    </div>
  )
}
