import './Button.css'

export const Button = ({clickFunction, text}) => {
    return (
        <button 
            onClick={clickFunction} 
            className='button' >
            {text}
        </button>
    )
}