import Icon from 'react-icons-kit'
import {arrow_left} from 'react-icons-kit/ikons/arrow_left'

const BlueLinkWithLeftArrow = ({text, functionBtn}) => {
  return (
    <span 
      onClick={functionBtn} 
      className='text-cyan-400 text-xs cursor-pointer'>
        {text}
        <Icon icon={arrow_left}/>
    </span>
  )
}

export default BlueLinkWithLeftArrow