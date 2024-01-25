import React from 'react'
import './Map.scss';

import mappng from '../../Assets/destination.png';
import genetics from '../../Assets/genetics.png';

export default function Map() {
  return (
    <div className='Map'>
        <div className='Map-Top'>
          <h5>We are just around the corner</h5>
          <h2>How to get there?</h2>
          <h4>It is easy when you can show it on the map, but if you'd like we can always point you directions from the main train station (15* turn tight, 12* turn left)</h4>
        </div>
        <div className='Map-Container'>
            <div className='Map-Data'>
                <h3><span>Address: </span>Institute of Zoology</h3>
                <h4><span></span>of the Jagiellonian University</h4>
                <p><span></span>st. Gronostajowa 9</p>
                <p><span></span>30-387 Cracow</p>
                <p className='Map-margin'><span>E-mail: </span>genomica.uj@gmail.com</p>
                <p className='Map-margin'><span>Institute: </span><a href="https://izibb.binoz.uj.edu.pl/en_GB/" target='_blank' rel='noreferrer'>IZIBB website</a></p>
            </div>
            <div className='Map-Map'>
              <div className='Map-Image'>
                <h4>It is your time to join us!</h4>
                <h5>We are waiting for you</h5>
                <h6>Genomica Team</h6>
                <img src={genetics} alt='genetics' className='Map-IMG'/>
                <a href="https://www.google.com/maps/place/Instytut+Zoologii+i+Bada%C5%84+Biomedycznych+Uniwersytetu+Jagiello%C5%84skiego/@50.0274692,19.8993134,17z/data=!4m10!1m2!2m1!1szoology+institute+jagiellonian+university!3m6!1s0x47165c89a8712ba7:0x378a3a58732149f1!8m2!3d50.0274623!4d19.9007249!15sCil6b29sb2d5IGluc3RpdHV0ZSBqYWdpZWxsb25pYW4gdW5pdmVyc2l0eZIBCnVuaXZlcnNpdHngAQA!16s%2Fg%2F12hlz5sgh?hl=pt-PT&entry=ttu"
                  target='_blank'
                  rel='noreferrer'>
                    <img src={mappng} alt='map' />
                    Find us on Map
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}
