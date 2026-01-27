import React from 'react'
import './staticBanner.scss';

import photo from '../../Assets/logo_2026.png';

export default function staticBanner() {
  return (
    <div className='Static-Banner'>
        <div className='Static-Banner-Left'>
          <div className='Static-Banner-Left-Data'>
            <h2>We are thrilled to announce the</h2>
            <h1>10th edition of the Student Biotechnology&Genetics Conference “Genomica” </h1>
            <p><span className='delete_res'>Join us from May 15-17, 2026, at the Faculty of Biochemistry, Biophysics and Biotechnology, Jagiellonian University in Krakow. “Genomica” Conference is an excellent opportunity to broaden your horizons, network, and experience active participation in the science conference. We encourage you to follow our social media for more information. </span></p>
            <p>The "Genomica" Student Conference is an annual event gathering students, specialists, and outstanding scientists interested in biotechnology and genetics. It provides a unique opportunity to broaden your horizons, networking, and experience active participation in the science conference. From May 15th to 17th this year, during the 10th edition of the "Genomica” Student Conference of Biotechnolgy&Genetics, you will have the chance to share your passion, discuss fascinating research projects, and inspire each other. This event not only enhances knowledge but also creates a space for building a community of young scientists. We invite you to participate in this unique event where science meets passion, and inspiration arises from engaging dialogues. Reserve your time for the May days of the 10th edition of the "Genomica" Conference! </p>
            <p>See you there! 👋</p>
          </div>
        </div>
        <div className='Static-Banner-Right'>
          <div className='Static-Banner-Right-Container'>
            <img src={photo} alt='logo' />
            <h3>15 - 17 May <span>Cracow, Poland</span></h3>
          </div>
        </div>
    </div>
  )
}
