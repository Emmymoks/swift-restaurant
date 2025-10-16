import React from 'react'
import dishes from '../data/dishes'
import DishCard from './DishCard'
import { motion } from 'framer-motion'

export default function Menu() {
  // group dishes by category
  const groups = dishes.reduce((acc, d) => {
    const key = d.category || 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(d)
    return acc
  }, {})

  const sortedCategories = Object.keys(groups).sort((a,b) => a.localeCompare(b))

  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center">
        <motion.h2 initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-3xl font-bold">Our Menu</motion.h2>
        <p className="mt-2 text-gray-600">Authentic flavours. Homely, bold and unforgettable.</p>
      </div>

      <div className="mt-10 space-y-12">
        {sortedCategories.map(category => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} transition={{staggerChildren:0.08}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups[category].map(d => (
                <div key={d.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-44 md:h-56 overflow-hidden bg-gray-50">
                    <img src={d.image} alt={d.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">{d.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{d.description}</p>
                    <div className="mt-4">
                      <div className="text-nig-green font-bold">₦{d.price}0</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
