import React from 'react'
import './Speakers.scss'
import SpeakerCard from './SpeakerCard/SpeakerCard'
import TitleComponent from '../TitleComponent/TitleComponent'

import magdaB from '../../Assets/speakers/magda-bienko.png'
import chyllinski from '../../Assets/speakers/Chylinski.png';
import szczepinska from '../../Assets/speakers/szczepinska.jpg';
import pekowska from '../../Assets/speakers/pekowska.png';

export default function Speakers() {
  return (
    <div className='Speakers'>
      <div className='Speakers-Top'>
        <TitleComponent>
          <h5>Our Speakers</h5>
          <h2>Who will be there?</h2>
          <h4>It is important to know who is inspiring you and who you work with. This is the list of people which confirmed will participate as speakers in our conference</h4>
        </TitleComponent>
      </div>
      <div className='Speakers-Container'>
        {/* <SpeakerCard title='Magdalena Bienko' img={magdaB}>Research Group Leader <br /> Bienko Group</SpeakerCard> */}
        <SpeakerCard title='Krzysztof Chyliński' img={chyllinski}>Molecular Biology<br /> CRISPR/Cas-9</SpeakerCard>
        <SpeakerCard title='Teresa Szczepińska' img={szczepinska}>Bioinformatics and Genome Structure Laboratory,<br /> CEZMAT</SpeakerCard>
        <SpeakerCard title='Aleksandra Pękowska' img={pekowska}>Head of Dioscuri Centre for Chromatin Biology and Epigenomics</SpeakerCard>
      </div>
    </div>
  )
}
