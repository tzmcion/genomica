import React from 'react'
import { RopeImage, RopeOptions } from '../BGCanvas'
import './Sponsor.scss'

export default function Sponsor({image,title, link}) {
    const options = {...RopeOptions};
    options.obj_width = 0.5;
    options.quantity = 13;
    options.gravity = 0.35;
    options.color = 'rgba(0,0,0,0.5)';

    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="Sponsor-Link">
        <div className='Sponsor'>
          <h2>{title}</h2>
          <div className='Rope_Sponsor'>
            <RopeImage width={300} height={200} src={image} options={options} />
          </div>
        </div>
      </a>
    );
}
