import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CART_KEY = 'swift_cart'

function addToCart(item){
  try{
    const cart = JSON.parse(localStorage.getItem(CART_KEY) || '[]')
    cart.push({ id:item.id, name: item.name, price: item.price, image: item.image })
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
    return true
  }catch(e){
    console.error('Cart save failed', e)
    return false
  }
}

export default function DishCard({dish}) {
  const [added, setAdded] = useState(false)

  function handleAdd(){
    const ok = addToCart(dish)
    if(ok){
      setAdded(true)
      setTimeout(()=>setAdded(false), 1600)
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-44 md:h-56 overflow-hidden">
        <img src={dish.image} alt={dish.name} loading="lazy" decoding="async" className="w-full h-full object-cover"/>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{dish.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{dish.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-nig-green font-bold">₦{dish.price}</div>
          <button onClick={handleAdd} aria-pressed={added} aria-label={`Add ${dish.name} to cart`} className={`px-3 py-1 rounded-md shadow transition ${added ? 'bg-green-500 text-white' : 'bg-nig-ochre text-white hover:opacity-90'}`}>
            {added ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
