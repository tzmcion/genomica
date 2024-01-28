import React,{useState} from 'react'
import './ProgramElement.scss';

function Event({el}){

    const [open,setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(curr => !curr);
    }

    return (
        <div onClick={handleOpen} className={`ProgramElement-Event ${open === true ? 'Event-Open' : ''}`}>
                <div className='ProgramElement-Event-Title'>
                    <img src={el.icon} alt='icon'/>
                    <div className='ProgramElement-Event-Data'>
                        <div className='ProgramElement-Event-Data-Left'>
                            <h6>{el.time}</h6>
                            <h5>{el.speaker}</h5>
                        </div>
                        <h4>{el.title}</h4>
                    </div>
                </div>
                <div className='ProgramElement-Event-Description'>
                    <p>{el.description}</p>
                </div>
        </div>
    )
}

export default function ProgramElement({data,day}) {

    const renderElements = () =>{
        return data.map((el,index) =>{
            return <Event key={`Event${index}`} el={el}/>
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
