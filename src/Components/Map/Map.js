import React from 'react'
import './Map.scss';
import TitleComponent from '../TitleComponent/TitleComponent';

import mappng from '../../Assets/destination.png';
import genetics from '../../Assets/genetics.png';

export default function Map() {
  return (
    <div className='Map'>
        <TitleComponent>
          <h5>We are just around the corner</h5>
          <h2>How to get there?</h2>
          <h4>It is easy when you can show it on the map, but if you'd like we can always point you directions from the main train station (15* turn tight, 12* turn left)</h4>
        </TitleComponent>
        <div className='Map-Container'>
            <div className='Map-Data'>
                <h3><span>Address: </span>Faculty of Biochemistry, Biophysics and Biotechnology </h3>
                <h4><span></span>of the Jagiellonian University</h4>
                <p><span></span>st. Gronostajowa 7</p>
                <p><span></span>30-387 Cracow</p>
                <p className='Map-margin'><span>E-mail: </span>genomica@uj.edu.pl</p>
                <p className='Map-margin'><span>Institute: </span><a href="https://wbbib.uj.edu.pl/en_US/wydzial/o-wydziale " target='_blank' rel='noreferrer'>WBBIB website</a></p>
            </div>
            <div className='Map-Map'>
              <div className='Map-Image'>
                <h4>It is your time to join us!</h4>
                <h5>We are waiting for you</h5>
                <h6>Genomica Team</h6>
                <img src={genetics} alt='genetics' className='Map-IMG'/>
                <a href="https://maps.app.goo.gl/AEUkjz4tceFT6z5d8"
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
