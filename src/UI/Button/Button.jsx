import './Button.scss'

export const Button = ({ handleClick, text }) => {
    return (
        <button 
            onClick={()=>handleClick(text)} 
            className='button' >
            {text}
        </button>
    )
}