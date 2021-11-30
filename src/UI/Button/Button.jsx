import './Button.scss'

export const Button = ({handleCLick, text}) => {
    return (
        <button 
            onClick={()=>handleCLick(text)} 
            className='button' >
            {text}
        </button>
    )
}