import React from 'react'
import dishes from '../data/dishes'
import DishCard from './DishCard'
import { motion } from 'framer-motion'

export default function Menu() {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center">
        <motion.h2 initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-3xl font-bold">Our Menu</motion.h2>
        <p className="mt-2 text-gray-600">Authentic Nigerian flavours. Homely, bold and unforgettable.</p>
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{once:true}} transition={{staggerChildren:0.12}} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map(d=>(
          <div key={d.id}>
            {/* Render DishCard but override price display via a wrapper prop isn't available; instead render custom card to change price formatting */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-44 md:h-56 overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" decoding="async" className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{d.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{d.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-nig-green font-bold">₦{d.price}0</div>
                    {/* Use the DishCard's add-to-cart behavior visually via button here */}
                    <button onClick={() => {
                      try{ const cart = JSON.parse(localStorage.getItem('swift_cart')||'[]'); cart.push({id:d.id, name:d.name, price:d.price, image:d.image}); localStorage.setItem('swift_cart', JSON.stringify(cart)); alert('Added to cart') }catch(e){ console.error(e) }
                    }} className="bg-nig-ochre text-white px-3 py-1 rounded-md shadow hover:opacity-90 transition">Add</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
