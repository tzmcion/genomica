import React from 'react'
import './staticBanner.scss';

import photo from '../../Assets/logo-removed.png';

export default function staticBanner() {
  return (
    <div className='Static-Banner'>
        <div className='Static-Banner-Left'>
          <div className='Static-Banner-Left-Data'>
            <h2>As the New Year unfolds, we announce the</h2>
            <h1>9th edition of the Genetics Conference "Genomica"</h1>
            <p><span className='delete_res'>The whole team is actively working on preparing the event, and we can now confirm its dates. Join us from May 23-25, 2025, at the Institute of Zoology, Jagiellonian University in Krakow.
              Genomica Conference is an excellent opportunity to broaden your horizons, networking, and experience active participation in the science conference.
              We encourage you to follow our social media for more information.</span></p>
            <p>The "Genomica" Student Conference of Genetics is an annual event gathering students, specialists, and outstanding scientists interested in genetics. It provides a unique opportunity to broaden your horizons, networking, and experience active participation in the science conference.
              From May 23th to 25th this year, during the 9th edition of the "Genomica” Student Conference of Genetics, you will have the chance to share your passion, discuss fascinating research projects, and inspire each other. This event not only enhances knowledge but also creates a space for building a community of young scientists.
              We invite you to participate in this unique event where science meets passion, and inspiration arises from engaging dialogues. Reserve your time for the May days of the 9th edition of the "Genomica" Conference!</p>
              <p>See you there! 👋</p>
          </div>
        </div>
        <div className='Static-Banner-Right'>
          <div className='Static-Banner-Right-Container'>
            <img src={photo} alt='logo' />
            <h3>23 - 25 May <span>Krakow, Poland</span></h3>
          </div>
        </div>
    </div>
  )
}
