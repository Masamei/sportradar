import React from 'react'
import ErrorIcon from '../assets/error-icon.svg'
import './input.scss'

export default function InputPodium(
  {value, type, hasError, error = 'No numbers allowed!', placeholder, onChange, onKeyDown}: 
  {value: string, type: string, hasError: boolean, error?: string, placeholder?: string, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void }
  ) {
  return (
    <div className={`input-podium ${hasError ? ' error' : ''}`} >
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} onKeyDown={onKeyDown} />

      {hasError && <div className='input-error'>
        <img src={ErrorIcon} width={12.25} height={12.25}/>
        <span>{error}</span>
      </div>}
    </div>
  )
}
