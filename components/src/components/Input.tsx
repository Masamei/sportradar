import ErrorIcon from '../assets/error-icon.svg'
import './input.scss'

/**
 * Renders an input element with an optional error message.
 * 
 * @param {string} value - The value of the input element.
 * @param {string} type - The type of the input element. deafult = text
 * @param {boolean} hasError - A boolean indicating whether the input has an error.
 * @param {string} error - The error message to display. deafult = 'No numbers allowed!'
 * @param {string} placeholder - The placeholder text for the input element.
 * @param {function} onChange - A function that is called when the input value changes.
 * @param {function} onKeyDown - A function that is called when a key is pressed in the input element, to listen to Enter key.
 */
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
