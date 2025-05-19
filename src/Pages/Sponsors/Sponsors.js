import React from 'react'
import './Sponsors.scss'

import TitleComponent from '../../Components/TitleComponent/TitleComponent'
import Sponsor from '../../Components/Sponsor/Sponsor'

import aa_bio from '../../Assets/program/sponsor_aa_biotechnology_2.png';
import ependorf from '../../Assets/program/ependorf.png';
import inSilico from '../../Assets/program/InSilico.png';
import labjot from '../../Assets/program/LabJOT.jpg'
import genxone from '../../Assets/program/genxone.png'
import corpus from '../../Assets/program/corpus.jpg'
import promega from '../../Assets/program/promega.png'


export default function Sponsors() {
  return (
    <div className='Sponsors'>
      <TitleComponent>
        <h1>Our Partners</h1>
        <h2>Who is supporting us</h2>
        <h3>It is hard to create anything special without contribution of many people.
            Here are our main sponsors in this years edition of genomica.
        </h3>
      </TitleComponent>
      <div className='Sponsors-List'>
        <Sponsor title={'A&A Biotechnology'} image={aa_bio}/>
        <Sponsor title={'Eppendorf'} image={ependorf}/>
        <Sponsor title='KNSB InSilico' image={inSilico} />
      </div>
      <div className='Sponsors-List'>
        <Sponsor title='Lab-JOT' image = {labjot} />
        <Sponsor title='Corpus Mind' image = {corpus} />
        <Sponsor title='Promega' image = {promega} />

      </div>

      
    </div>
  )
}
