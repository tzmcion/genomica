import React from 'react'
import Error_dr from '../../Assets/Error.gif'
import './Error.scss'

export default function Error() {
  return (
    <div className='Error'>
      <h3>Something messed Up... Or you messed up... Wrong subpage</h3>
      <img src={Error_dr} alt='Error droids' />
    </div>
  )
}
