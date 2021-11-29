import './Search.css'

export const Search = ({ search, getSearch }) => {
    
    const handleChange = (e) => {
        getSearch(e.target.value)
    }

    return ( 
        <input 
            type='search' 
            value={search} 
            onChange={handleChange} 
            placeholder='Search by Name or House' 
            className='search'>
        </input>
    );
}