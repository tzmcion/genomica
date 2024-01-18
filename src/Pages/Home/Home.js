import React from 'react'
import Banner from '../..//Components/Static_Banner/staticBanner';
import './Home.scss'
import HomeData from '../../Components/HomeData/HomeData';
import Speakers from '../../Components/Speakers/Speakers';

export default function Home() {
  return (
    <div className='Home'>
      <div className='container-top'>
        <Banner />
      </div>
      <div className='container-mid'>
        <HomeData />
        <Speakers />
      </div>

    </div>
  )
}
