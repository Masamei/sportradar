import React from 'react'
import './button.scss'
import PaperAeroplaneIcon from '../assets/icon.svg'

export default function ButtonPodium(
  {label = 'Submit', onClick, useIcon, icon = PaperAeroplaneIcon}: 
  {label?: string, onClick?: () => void, useIcon?: boolean, icon?: string }
) {
  return (
    <button className="button-podium" onClick={onClick}>
      <span>{label}</span>
      {useIcon && <img src={icon} height={16} width={16} />}
    </button>
  )
}
