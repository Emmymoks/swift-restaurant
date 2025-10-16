import React from 'react'
import dishes from '../data/dishes'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function pickByKeyword(keyword, count=2){
  return dishes.filter(d => d.category && d.category.toLowerCase().includes(keyword)).slice(0,count)
}

export default function FeaturedFood(){
  const nigerian = pickByKeyword('nigerian', 2)
  const inter = pickByKeyword('intercontinental', 2)
  const drinks = pickByKeyword('drink', 2)

  const featured = [...nigerian, ...inter, ...drinks].slice(0,6)

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center">
        <motion.h2 initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} className="text-3xl font-bold">Featured Food</motion.h2>
        <p className="mt-2 text-gray-600">Our chef's picks! Delicious and curated for you.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map(d => (
          <motion.div key={d.id} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="h-44 overflow-hidden bg-gray-50">
              <img src={d.image} alt={d.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg">{d.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{d.description}</p>
              </div>
              <div className="mt-4">
                <Link to="/menu" className="inline-flex items-center justify-center w-full sm:w-auto bg-nig-ochre text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition font-semibold">View</Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
