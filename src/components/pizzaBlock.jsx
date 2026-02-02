import { useState } from 'react';
function PizzaBlock ({imageUrl, title, price,size,types,rating}) {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [pizzaSize, setPizzaSize] = useState(0);
  const typeNames = ['Thin', 'Traditional'];
  const ratingOPtions = [
    {id:1, star: '⭐'},
    {id:2, star: '⭐⭐'},
    {id:3, star: '⭐⭐⭐'},
    {id:4, star: '⭐⭐⭐⭐'},
    {id:5, star: '⭐⭐⭐⭐⭐'}
  ]
  return (
    <div className="w-70 text-center">
      
      <img
        src={imageUrl}
        alt={title}
        className="mx-auto w-70"
      />
      <h4 className="text-[20px] font-black tracking-wide ">
        {title}
      </h4>
      <div className='w-full py-2'>
        <div className='mx-auto '>
          {ratingOPtions[rating].star}
        </div>
      </div>

      {/* Selector */}
      <div className="flex flex-col rounded-[10px] bg-[#f3f3f3] p-2">
        
        {/* Dough type */}
        <ul className="flex mb-6 gap-1">
          {
            types.map((index) => (
              <li key={index} onClick={() => setActiveType(index)} className={`flex-1 cursor-pointer py-2 text-[14px]  font-semibold select-none ${activeType === index ? 'bg-white shadow' : ''}`}>
                { typeNames[index] }
              </li>
            ))
            }
        </ul>

        {/* Size */}
        <ul className="flex">
          {size.map((size,i) => (
            <li key={size} onClick={() => setPizzaSize(i)} className={`flex-1 cursor-pointer py-2 text-[14px] font-semibold select-none ${pizzaSize === i ? 'bg-white shadow' : ''}`}>
              {size} sm.
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex items-center justify-between">
        
        {/* Price */}
        <div className="text-[22px] font-bold leading-27 tracking-wide">
          from {price} $
        </div>

        {/* Button */}
        <button onClick={()=>{setPizzaCount(pizzaCount + 1);}} className="flex items-center gap-2 rounded-full border border-orange-500 px-4 py-2 font-bold text-orange-500 transition hover:bg-orange-500 hover:text-white">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="currentColor"
            />
          </svg>

          <span>Add</span>

          <i className="ml-1 rounded-full bg-orange-500 px-2 py-2 text-white text-[13px] w-5 h-5 flex items-center justify-center">
            {pizzaCount}
          </i>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
