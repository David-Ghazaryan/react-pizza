import React from 'react'

 const CartItem = ({imageUrl, name, type, size, count, price}) => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className='flex items-center gap-2.5 h-full max-w-40'>
        <img src={imageUrl} alt={name} className="h-24 w-24 rounded-lg object-cover" />
        <div>
          <h2 className="font-bold">{name}</h2>
          <div className='flex'>
            <h5 className="text-gray-500 ">{type},</h5>
            <h5 className="text-gray-500 ">{size}</h5>
          </div>
        </div>
      </div>
        <div className='flex items-center justify-center gap-4'>
          <button className='w-6 h-6 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-400 font-bold cursor-pointer'>-</button>
             <span className="font-bold">{count}</span>
          <button className='w-6 h-6 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-400 font-bold cursor-pointer'>+</button>
        </div>
        <span className="font-bold text-xl">{price} $</span>
        <button className='w-8 h-8 rounded-full border-3  border-gray-300 flex items-center justify-center text-gray-300 font-bold cursor-pointer'>X</button>
    </div>
  )
}

export default CartItem
