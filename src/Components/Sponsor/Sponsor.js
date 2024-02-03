import React from 'react'
import { RopeImage, RopeOptions } from '../BGCanvas'
import './Sponsor.scss'

export default function Sponsor({image,title}) {
    const options = RopeOptions;
    options.obj_width = 2;
    options.quantity = 10;
    options.gravity = 0.35;

  return (
    <div className='Sponsor'>
        <h2>{title}</h2>
        <RopeImage width={250} height={150} src={image} options={options}/>
    </div>
  )
}
