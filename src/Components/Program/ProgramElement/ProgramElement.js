import React from 'react'
import './ProgramElement.scss';

export default function ProgramElement({data,day}) {

    const renderElements = () =>{
        return data.map((el,index) =>{
            return <div key={`Event${index}`} className='ProgramElement-Event'>
                <img src={el.icon} alt='icon'/>
                <div className='ProgramElement-Event-Data'>
                    <h5>{el.speaker}</h5>
                    <h4>{el.title}</h4>
                </div>
            </div>
        })
    }

  return (
    <div className='ProgramElement'>
        <h3>{day}</h3>
        <div className='ProgramElement-Events'>
            {renderElements()}
        </div>
    </div>
  )
}
