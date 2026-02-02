import CloseIcon from '../assets/close.png'

import {useDispatch} from 'react-redux'
import {clearSearchValue, setSearchValue} from "../redux/slices/searchSlice";
import {  useMemo, useRef, useState } from 'react';

import debounce from 'lodash.debounce'

const Search = () => {
    const dispatch = useDispatch()
    const inputRef = useRef()
    const [val,setVal]=useState('')
    const onClickClear =() => {
        dispatch(clearSearchValue(''))
        setVal('')
        inputRef.current.focus()
    }
    const updateValue = useMemo(()=>{
        return debounce((str)=>{
            dispatch(setSearchValue(str));
            console.log(str)
        },300);
    }, [dispatch])

    const onChangeInput = e =>{
        setVal(e.target.value)
        updateValue(e.target.value)
    }
    return (
        <div className='flex items-center gap-2 w-1/2 mx-auto'>
            <input 
                type="text" 
                ref={inputRef}
                value={val}
                onChange={onChangeInput}
                placeholder="Search..." 
                className="border border-gray-300 rounded-lg px-4 py-2 w-7/8 focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
            {val &&
                <img 
                    src={CloseIcon} 
                    alt="Close Icon" 
                    onClick={()=>onClickClear()} 
                    className='w-4 h-4 opacity-35 -translate-x-10 hover:opacity-100 cursor-pointer' 
                /> 
            }
        </div>
    )
}

export default Search