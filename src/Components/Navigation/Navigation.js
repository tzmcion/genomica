import React from 'react'
import SocialLink from './Link/SocialLink';
import './Navigation.scss'

import facebook from '../../Assets/facebook.png';
import instagram from '../../Assets/instagram.png';
import linkedin from '../../Assets/linkedin.png';
import RouteLink from './Link/RouteLink';
import Banner from '../Banner/Banner';

const social_links = [
    {
        img:facebook,
        path:"https://www.facebook.com/genomica.uj?locale=pl_PL"
    },
    {
        img:instagram,
        path:"https://www.instagram.com/genomica_uj/?fbclid=IwAR2bTU44KCHK4jfggbvNol3QI9HEWHhQXCTZKq55ZG2NKNNZcZ8qkcVR7m4"
    },
    {
        img:linkedin,
        path:"https://www.linkedin.com/in/genomica-student-conference-of-genetics-1500372a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
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
    <>
        <Banner />
        <nav className='Navigation'>
        <div className='Navigation-Content'>
            <div className='Navigation-Content-Top'>
                <div className='Navigation-Content-Bottom'>
                        {renderLinks()}
                </div>
                <div className='Navigation-Content-SocialMedia'>
                    {render()}
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
