import React from 'react'
import './TitleComponent.scss';

/**
 * Takes 3 children Elements,
 * Small Header, Big Header and description
 * @returns ReactElement
 */
export default function TitleComponent({children}) {
  return (
    <div className='TitleContainer'>
         {children}
    </div>
  )
}
