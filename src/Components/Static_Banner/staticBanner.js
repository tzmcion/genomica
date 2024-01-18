import React from 'react'
import './staticBanner.scss';

import photo from '../../Assets/logo-removed.png';

export default function staticBanner() {
  return (
    <div className='Static-Banner'>
        <div className='Static-Banner-Left'>
          <div className='Static-Banner-Left-Data'>
            <h2>Genomica is back in 2024!</h2>
            <h1>Welcome to the 4th annual biochemical conference </h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <br />
            <p>Register now and become a speaker!</p>
          </div>
        </div>
        <div className='Static-Banner-Right'>
          <div className='Static-Banner-Right-Container'>
            <img src={photo} alt='logo' />
            <h3>17 - 25 May <span>Krakow, Poland</span></h3>
          </div>
        </div>
    </div>
  )
}
