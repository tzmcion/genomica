import React from 'react'
import { Link } from 'react-router-dom'
import './SocialLink.scss'

export default function SocialLink({to,img}) {
  return (
    <Link 
     className='SocialLink'
     to={to}
     target='_blank'
    >
        <img src={img} alt={to}/>
    </Link>
  )
}
