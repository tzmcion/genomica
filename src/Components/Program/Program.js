import React from 'react'
import './Program.scss';
import { RopeImage, RopeOptions } from '../../Components/BGCanvas'
import may17 from '../../Assets/program/may17.png';
import may18 from '../../Assets/program/may18.png';
import may19 from '../../Assets/program/may19.png';
import Element from './ProgramElement/ProgramElement';
import TitleComponent from '../TitleComponent/TitleComponent';
import {ProgramData} from '../../Utils/Data';

export default function Program() {
    const renderElements = () =>{
        const options = {...RopeOptions};
        options.gravity = 0.4;
        options.air_friction = 0.99;
        options.quantity = 14;
        options.obj_width = 2;
        // return ProgramData.map(day=>{
        //     return <Element key={day.day} data={day.events} day={day.day} />
        // })
        return <div className='Banners'>
                    <RopeImage width={240} height={200} src={may17} options={options} />
                    <RopeImage width={240} height={200} src={may18} options={options} />
                    <RopeImage width={240} height={200} src={may19} options={options} />
            </div>
    }

  return (
    <div className='Program'>
        <TitleComponent>
            <p>Our Program</p>
            <p>What will it look like?</p>
            <p>Our program is not yet frozen, it can change, and we do not want you to make plans and then be forced to change them accordingly <br />
                Therefore, please give us some little time and we will share what will be happening this year!
            </p>
        </TitleComponent>
        <div className='Program-List'>
            {renderElements()}
        </div>
    </div>
  )
}
