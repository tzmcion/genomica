import React,{useState,useEffect,useRef,useCallback} from 'react';
import './Banner.scss';
import BackgroundAnimation from '../../Utils/BackgroundAnimation';

import banner from '../../Assets/genomica.png';
import jag from '../../Assets/jag.png';
import bg from '../../Assets/bggrad.png';

export default function Banner() {

  const canvas_ref = useRef(null);
  const banner_ref = useRef(null);
  const [animation,set_animation] = useState(null);
  const [banner_hight,set_banner_height] = useState(300);
  const [dimensions,set_dimensions] = useState({width:window.innerWidth})


  useEffect(()=>{
    if(!animation){
      if(canvas_ref){
        const which_one = Math.random() > 0.5 ? true : false
        set_animation(new BackgroundAnimation(canvas_ref.current.getContext('2d'),dimensions.width,500,which_one));
      }
    }
    if(animation){
      if(animation.getWidth() !== dimensions.width){
        animation.setWidth(dimensions.width);
      }
      if(!animation.isAnimation_on()){
        animation.startAnimation();
      }
    }
  },[animation,canvas_ref,dimensions]);

  useEffect(()=>{
    const windowResize = ()=>{
      set_dimensions({width:window.innerWidth});
    }
    window.addEventListener('resize',windowResize);
    return () => {
      animation && animation.stopAnimation()
      window.removeEventListener('resize',windowResize);
    }
  },[animation])

  const create_animations = useCallback((e,pallete=null)=>{
    if(animation){
      const pos_y = e.clientY;
      const scaling_speed = (Math.random() > 0.5 ? (Math.random()+0.01) * -1 : (Math.random()+0.01))/250; 
       animation.create(e.clientX,pos_y,scaling_speed,pallete);
    }
  },[animation]) 

  useEffect(()=>{
    const id = setInterval(()=>{
      const er = {
        clientX: Math.floor(Math.random()*dimensions.width),
        clientY:Math.random() * 100 + banner_hight + 50
      }
      create_animations(er);
      create_animations(er);
    },400);

    return () => {clearInterval(id)}
  },[create_animations,dimensions,banner_hight])

  const handleClick = (e) =>{
    create_animations(e,['#99C2A2',"#FFD166","#93B1A7","#EF476F"]);
  }

  const handleMouseMove = (e) =>{
    if(e.clientY > 350){
      document.body.style.overflowY = 'auto';
      document.body.style.height = 'auto';
      if(animation){
        set_banner_height(300);
        animation.setHeight(500);
      }
    }
  }

  const handleMouseDown = () =>{
    if(dimensions.width > 1000){
      document.body.style.overflowY = 'hidden';
      document.body.style.height = '100vh';
      set_banner_height(window.innerHeight);
      if(animation)
      animation.setHeight(window.innerHeight + 200);
    }
  }

  return (
    <div className={`Banner ${banner_hight > 300 ? 'Big' : ''}`} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} style={{backgroundImage:`url(${bg})`,height:`${banner_hight}px`}} onClick={handleClick} ref={banner_ref}>
      <canvas ref={canvas_ref} width={dimensions.width} height={banner_hight+200}></canvas>
      <div className='Banner-Data'>
        <img src={banner} alt='bann' className='genomica'/>
        <img src={jag} alt='dad'  className='jag'/>
      </div>
    </div>
  )
}
