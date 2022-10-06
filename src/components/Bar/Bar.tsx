import React from 'react'
import './Bar.css'

export type BarProps = {
    color: string, // eventually replaced by pivot, high, low, ...
    allNumbers: number[],
    number: number,
    size?: number
}

export const Bar = (props: BarProps) => {

  const calcBarHeight = () => {
    const maxValue = Math.max(...props.allNumbers);
    const relBarHeight = (props.number / maxValue) * 100; // relative bar height in percent to max value
    return relBarHeight
  }


  return (  
    <div style={{    
        height: `${calcBarHeight()}px`,
        width: '30px' 
    }} className={`bar ${props.color}`}>{props.number}</div>
  )
}
