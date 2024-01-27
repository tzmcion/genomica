import React from 'react'
import './Program.scss';

import Element from './ProgramElement/ProgramElement';
import TitleComponent from '../TitleComponent/TitleComponent';
import {ProgramData} from '../../Utils/Data';

export default function Program() {
    const renderElements = () =>{
        return ProgramData.map(day=>{
            return <Element key={day.day} data={day.events} day={day.day} />
        })
    }

  return (
    <div className='Program'>
        <TitleComponent>
            <p>Our Program</p>
            <p>What will it look like?</p>
            <p>Having planned all event is very important isn't it?</p>
        </TitleComponent>
        <div className='Program-List'>
            {renderElements()}
        </div>
    </div>
  )
}
