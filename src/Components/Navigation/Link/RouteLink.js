import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SocialLink.scss';
import Home from '../../../Assets/home.png';

export default function RouteLink({to,name}) {
    const location = useLocation();
    
  return (
    <Link className={`Route_Link ${location.pathname === to ? "Active" : ''}`} to={to}>
        {name === '/' ? <img src={Home} alt='Home'/> : <>{name}</>}
    </Link>
  )
}
