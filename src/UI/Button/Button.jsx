import './Button.scss'

export const Button = ({clickFunction, text}) => {
    return (
        <button 
            onClick={clickFunction} 
            className='button' >
            {text}
        </button>
    )
}