import './button.scss'
import PaperAeroplaneIcon from '../assets/icon.svg'


/**
 * Renders a button with trailing image (optional)
 * 
 * @param {string} label - The label of the button.
 * @param {function} onClick - A function that is called when the button is clicked.
 * @param {boolean} useIcon - A boolean indicating whether to use the trailing image.
 * @param {string} icon - The source of the trailing image. deafult = PaperAeroplaneIcon
 */
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
