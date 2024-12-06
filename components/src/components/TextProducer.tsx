import './TextProducer.scss'
import InputForm from './InputForm'


export default function TextProducer() {
  return (
    <div className='text-producer'>
        <div className='text-producer-label'>Text Producer</div>
        <div className='input-form-container'>
            <InputForm /> 
        </div>        
    </div>
  )
}