import React from 'react'
import './Sponsors.scss'

import TitleComponent from '../../Components/TitleComponent/TitleComponent'
import Sponsor from '../../Components/Sponsor/Sponsor'
import aa_bio from '../../Assets/program/sponsor_aa_biotechnology_2.png'
import lab_jot from "../../Assets/program/LabJOT.jpg"
import biocelt from "../../Assets/program/bioceltix.jpg"
import linegal from "../../Assets/program/linegal.png"
import genomed from "../../Assets/program/genomed.jpg"
import fullbright from "../../Assets/program/fullbright.png"
import forum from "../../Assets/program/forum.png"
import polonium from "../../Assets/program/polonium.webp"
import ptg from "../../Assets/program/ptg.png"
import kls from "../../Assets/program/KlasterLogo_blue.webp"
import ptbi from "../../Assets/program/PTBI.jpg"
import krd from "../../Assets/program/KRD.png"
import kwf from "../../Assets/program/kwf.jpg"
import mk from "../../Assets/program/mlody_krakow.jpg"
import ws from "../../Assets/program/work_science.jpg"
import kn from "../../Assets/program/kobiety_nauki.png"
import ptb from "../../Assets/program/ptb.jpg"
import biotechn from "../../Assets/program/biotechnologia_pl.jpg"
import biocom from "../../Assets/program/bioinfopl1.png"

export default function Sponsors() {
  return (
    <div className='Sponsors'>
      <TitleComponent>
        <h1>Our Partners</h1>
        <h2>Who is supporting us</h2>
        <h3>It is hard to create anything special without contribution of many people.
            Here are our main sponsors and partners in this years edition of Genomica.
        </h3>
      </TitleComponent>
      <div className='Sponsors-Listt'>
        <Sponsor title={'Genomed'} image={genomed} link="https://www.genomed.pl/" />
        <Sponsor title={'Bioceltix'} image={biocelt} link="https://bioceltix.com/" />
        <Sponsor title={'A&A Biotechnology'} image={aa_bio} link="https://aabiot.com" />
        <Sponsor title={'Linegal Chemicals'} image={linegal} link="https://linegal.pl/" />
        <Sponsor title={'Lab-JOT'} image={lab_jot} link="https://www.labjot.com/" />
        <Sponsor title={'FULBRIGHT'} image={fullbright} link="https://fulbright.edu.pl/home/" />
        <Sponsor title={'Forum Akademickie'} image={forum} link="https://forumakademickie.pl/" />
        <Sponsor title={'Polonium Foundation'} image={polonium} link="https://poloniumfoundation.org/" />
        <Sponsor title={'PTG'} image={ptg} link="https://ptgen.pl/" />
        <Sponsor title={'Klaster LifeScience'} image={kls} link="https://lifescience.pl/" />
        <Sponsor title={'PTBI'} image={ptbi} link="https://www.ptbi.org.pl/website/home/" />
        <Sponsor title={'KRD'} image={krd} link="https://krd.edu.pl/" />
        <Sponsor title={'Kariera w farmacji'} image={kwf} link="https://karierawfarmacji.pl/" />
        <Sponsor title={'Młody Kraków'} image={mk} link="https://mlodziez.krakow.pl/" />
        <Sponsor title={'Work & Science'} image={ws} link="https://workscience.pl/" />
        <Sponsor title={'Kobiety Nauki'} image={kn} link="https://kobietynauki.org/" />
        <Sponsor title={'PTB'} image={ptb} link="https://www.ptbioch.edu.pl/" />
        <Sponsor title={'Biotechnologia.PL'} image={biotechn} link="https://biotechnologia.pl/" />
        <Sponsor title={'BIO INFO PL'} image={biocom} link="https://www.instagram.com/bioinformatics.community.pl/" />
      </div>
      {/* <div className='Sponsors-Listt'>
        <Sponsor title='Lab-JOT' image={labjot} link="https://www.labjot.com" />
        <Sponsor title='Corpus Mind' image={corpus} link="https://www.corpusmind.pl" />
        <Sponsor title='Promega' image={promega} link="https://pl.promega.com/" />
      </div> */}
      
    </div>
  )
}
