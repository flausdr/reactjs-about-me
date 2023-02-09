import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Search = ({ show }) => {
    const numbers = useSelector(state => state.counter),
        [isSearch, setIsSearch] = useState(false),
        [inputText, setInputText] = useState('');

    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const list = numbers.map(contact => {
        return <span className="form-control w-100" 
            key={contact.id}
            onClick={() => {
                const inputSearch = document.querySelector('.first-input');
                setIsSearch(false)
                inputSearch.value = contact.phone
            }}>{contact.phone}</span>
    })

    useEffect(() => {
        if (!show) {
            setIsSearch(false)
        }
    }, [show])
    
    return (
        <div className="d-flex w-75 search-block">
            <input type="text" placeholder='Enter phone..' className='form-control w-100 first-input' 
            onClick={() => setIsSearch(true)}
            onKeyDown={(e) => {
                if (e.code === 'Escape') {
                    setIsSearch(false)
                }
            }} 
            onChange={(e) => inputHandler(e)} />
            <span style={{ display: isSearch ? 'flex' : 'none' }} className="flex-column w-100 list-numbers">
                {
                    list.filter(el => {
                        if (inputText === '') {
                            return el;
                        } else {
                            return el.props.children.includes(inputText)
                        }
                    })
                }
            </span>
        </div>
    )
};

export default Search;