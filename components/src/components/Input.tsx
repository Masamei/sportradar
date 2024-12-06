import React from 'react'
import './input.scss'

export default function InputPodium(
  {value, type, hasError, placeholder, onChange, onKeyDown}: 
  {value: string, type: string, hasError: boolean, placeholder?: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void }
  ) {
  return (
    <div className={`input-podium ${hasError ? ' error' : ''}`} >
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} onKeyDown={onKeyDown} />
    </div>
  )
}
