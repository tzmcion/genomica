import React from 'react'
import SocialLink from './Link/SocialLink';
import './Navigation.scss'

import logo from '../../Assets/placeholder_logo.jpg'
import facebook from '../../Assets/facebook.png';
import instagram from '../../Assets/instagram.png';
import twitter from '../../Assets/twitter.png';
import youtube from '../../Assets/social.png';
import RouteLink from './Link/RouteLink';

const social_links = [
    {
        img:facebook,
        path:"https://facebook.com"
    },
    {
        img:instagram,
        path:"https://instagram.com"
    },
    {
        img:twitter,
        path:"https://twitter.com"
    },
    {
        img:youtube,
        path:"https://youtube.com"
    }
]

export default function Navigation({links}) {

    const render = () =>{
        return social_links.map((link,index) =>{
            return <SocialLink to={link.path} img={link.img} key={index}/>
        })
    }

    const renderLinks = () =>{
        return links.map((link,index) =>{
            return <RouteLink to={link.path} name={link.name} key={`dd${index}`} />
        })
    }

  return (
    <nav className='Navigation'>
        <div className='Navigation-Content'>
            <div className='Navigation-Content-Top'>
                <div className='Navigation-Content-Logo'>
                    <div className='Navigation-Content-Logo-Up'>
                        <img src={logo} alt='logo' />
                        <h3>Biochemistry Annual <br />Conference Metting </h3>
                    </div>
                    <div className='Navigation-Content-Logo-Bottom'>
                        <h4>March 10-14 &#x2022; Spare May 10-14 <br />Jagiellonian University Krakow</h4>
                        <h5>2010-2022 Genomica Annual Conference</h5>
                    </div>
                </div>
                <div className='Navigation-Content-SocialMedia'>
                    {render()}
                </div>
            </div>
            <div className='Navigation-Content-Bottom'>
                    {renderLinks()}
            </div>
        </div>
    </nav>
  )
}
