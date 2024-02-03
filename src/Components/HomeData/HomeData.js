import React from 'react'
import './HomeData.scss';

function Icon({title}){
    return(
        <li className='Up'>
            <span className='Up-Icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                </svg>
            </span>
            <span className='Up-Title'>{title}</span>
        </li>
    )
}

function Ticket({type,price, color, cons, children}){

    const renderCons = () =>{
        return cons.map((el,index) =>{
            return <Icon key={`${type}${index}`} title={el}/>;
        })
    }

    return (
    <div className='HomeData-Register-Fast-d'>
        <div className={`Band Band-${color}`}><p>{price}zl</p></div>
        <div className='Data'>
            <h2>{type}</h2>
            <h3>{children}</h3>
            <ul>
                {renderCons()}
            </ul>
            <button>Register</button>
        </div>
    </div>);
}

export default function HomeData() {
  return (
    <div className='HomeData'>
        <div className='HomeData-Register'>
            <h1>Join us as a speaker or attendent!</h1>
            <div className='HomeData-Register-Fast'>
                <Ticket type={'Speaker'} color='Green' cons={['Acces to all meetings','Speaker pass', 'Gadgets']} price={120}>
                    As a speaker you will lead the talk about topics ou are working with.
                </Ticket>
                <Ticket type={'Student'} color='Red' cons={['Acces to all meetings','Gadgets','Only for UJ students']} price={120}>
                    As a student you can acces all the talks ass the listener in lower price!
                </Ticket>
                <Ticket type={'Member'} color='Blue' cons={['Acces to all meetings', 'Gadgets',]} price={120}>
                    As a member you can acces all the talks and help to grow the science!
                </Ticket>
            </div>
        </div>
    </div>
  )
}
