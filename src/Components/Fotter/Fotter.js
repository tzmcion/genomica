import React from 'react'
import './Fotter.scss'
import {Link} from 'react-router-dom';

import Logo from '../../Assets/logo-removed.png';
import DNA from '../../Assets/geen.png';

const social_links = [
  {
      name:'Facebook',
      path:"https://www.facebook.com/genomica.uj?locale=pl_PL"
  },
  {
      name:'Instagram',
      path:"https://www.instagram.com/genomica_uj/?fbclid=IwAR2bTU44KCHK4jfggbvNol3QI9HEWHhQXCTZKq55ZG2NKNNZcZ8qkcVR7m4"
  },
  {
      name:'Linkedin',
      path:"https://www.linkedin.com/in/genomica-student-conference-of-genetics-1500372a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
]

export default function Fotter({links}) {

  const renderLinks = () =>{
    return links.map((link,index) =>{
        return <Link to={link.path} key={index}>{link.name === '/' ? 'Home' : link.name}</Link>
    })
  }

  const renderSpeakers = () =>{
    return social_links.map((link,index) =>{
      return <Link to={link.path} key={`${index}social`}>{link.name === '/' ? 'Home' : link.name}</Link>
  })
  }

  return (
    <div className='Fotter'>
        <div className='Footer-Container'>
          <img src={DNA} alt='DNA' className='BG-IMG' />
          <div className='Footer-Content'>
            <div className='Footer-Links'>
              <h2>Genomica</h2>
              {renderLinks()}
            </div>
            <div className='Footer-Links'>
              <h2>Speakers</h2>
              {renderSpeakers()}
            </div>
            <div className='Footer-Links'>
              <h2>UJ</h2>
              {renderSpeakers()}
            </div>
            <div className='Footer-Links'>
              <h2>WEB</h2>
              {renderSpeakers()}
            </div>
            <div className='Footer-Links Footer-Copyright'>
              <img src={Logo} alt='logo' />
              <p>&copy; 2024 genomica.pl</p>
              <p>Authors: <a>Kamil</a> && <a href='https://www.linkedin.com/in/tymoteusz-apriasz-2ba8501a6/'>Tymoteusz</a></p>
            </div>
          </div>
        </div>
    </div>
  )
}
