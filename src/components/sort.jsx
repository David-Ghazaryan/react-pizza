import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { setSortType } from "../redux/slices/filterSlice";
function Sort() {
const sortOptions = [
  { type: 'rating', label: 'Rating (ASC)' },
  { type: '-rating', label: 'Rating (DESC)' },
  { type: 'price', label: 'Price (ASC)' },
  { type: '-price', label: 'Price (DESC)' },
  { type: 'title', label: 'Title (ASC)' },
  { type: '-title', label: 'Title (DESC)' },
];
const [isOpen, setIsOpen] = useState(false);

const dispatch = useDispatch();

const onClickSort = (type) => {
  dispatch(setSortType(type))
  setIsOpen(false);
}

  const sortType = useSelector(state => state.filter.sortOptions[0].type)

    return (
      <div className="relative">
        <div className="flex items-center gap-2 cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>
          <img src="src/assets/arrow.svg" alt="arrow" className={isOpen ? "rotate-180" : ''}/>
          <b>Sort by:</b>
          <span className="text-orange-500 border-b border-dashed border-orange-500">
            {sortOptions.find((obj) => obj.type === sortType)?.label}
          </span>
        </div>
        {isOpen && (
        <div className="absolute right-0 mt-3 w-40 rounded-xl bg-white shadow-xl">
          <ul>
            {sortOptions.map((obj) => (
              <li
                key={obj.type}
                onClick={() => {
                  onClickSort(obj.type);
                }}
                className={`px-4 py-3 cursor-pointer hover:bg-gray-100 
                  ${ sortType === obj.type
                    ? "bg-gray-100 font-bold text-orange-500"
                    : undefined
                    }`}
              >
                {obj.label}
              </li>
            ))}
          </ul>
        </div>)}
      </div>
    )
}   
export default Sort;