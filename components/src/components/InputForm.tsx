import React from 'react'
import './InputForm.scss'
import ButtonPodium from './Button'
import InputPodium from './Input'
import { useEffect, useState } from 'react'

export default function InputForm() {
  const [hasError, setHasError] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    validate(value)
    setIsSuccess(false)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    validate(value)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  function validate(value: string): boolean {
    if (/\d/.test(value)) {
      setHasError(true)
      return false
    } else {
      setHasError(false)
      return true
    }
  }

  const handleClick = () => validate(value) ? setIsSuccess(true) : setIsSuccess(false)
  
  return (
    <div className='input-form-container'>
      <div className='input-form'>
          <InputPodium value={value} type='text' hasError={hasError} onChange={handleChange} onKeyDown={onKeyDown}/>
          <ButtonPodium onClick={handleClick} />    
      </div>
      {value.length > 0 && isSuccess && <div className='form-success'>
        {value}
      </div>}
    </div>
  )
}