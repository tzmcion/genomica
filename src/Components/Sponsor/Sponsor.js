import React from 'react'
import { RopeImage, RopeOptions } from '../BGCanvas'
import './Sponsor.scss'

export default function Sponsor({image,title, link}) {
    const options = {...RopeOptions};
    options.obj_width = 2;
    options.quantity = 10;
    options.gravity = 0.35;
    options.color = 'rgba(0,0,0,0)';

    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="Sponsor-Link">
        <div className='Sponsor'>
          <h2>{title}</h2>
          <RopeImage width={250} height={150} src={image} options={options} />
        </div>
      </a>
    );
}
