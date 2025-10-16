import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Prefer images from dishes data (if available) otherwise fall back to Cloudinary/Unsplash
// Use the specific Cloudinary images for the main background as requested
const IMAGES = [
  'https://res.cloudinary.com/dobmwndqm/image/upload/v1760629169/set-sj-LRF82Ejt530-unsplash_hmccok.jpg',
  'https://res.cloudinary.com/dobmwndqm/image/upload/v1760629169/quang-nguyen-vinh-yoawcG8b4Lc-unsplash_sd3m37.jpg',
  'https://res.cloudinary.com/dobmwndqm/image/upload/v1760629166/quang-nguyen-vinh-NIAC7fsCpIc-unsplash_t5027l.jpg'
]


export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const id = setInterval(() => setIndex(i => (i + 1) % IMAGES.length), 5000)
    return () => clearInterval(id)
  }, [])

  

  return (
    <section className="relative h-auto text-white">
      {/* Background slideshow layers */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {IMAGES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
        {/* subtle dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-6xl mx-auto py-28 px-6 flex lg:items-center lg:gap-10 relative">
        <div className="w-full lg:w-1/2">
          <motion.h2 initial={{ x:-50, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{delay:0.1}} className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Swift Restaurant
          </motion.h2>
          <motion.p initial={{ x:-50, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{delay:0.25}} className="mt-4 text-lg font-semibold drop-shadow">
            The true taste of Nigeria, on your plate.
            vibrant, spicy, and soulful.
          </motion.p>
          <motion.div initial={{ scale:0.95 }} animate={{ scale:1 }} transition={{delay:0.4}} className="mt-6 flex gap-4">
            <Link to="/menu" className="bg-nig-ochre text-white px-6 py-3 rounded-md shadow-xl hover:opacity-90 transition font-semibold">Explore Menu</Link>
            <Link to="/reserve" className="border border-white px-6 py-3 rounded-md hover:bg-white/10 transition font-semibold">Reserve a Table</Link>
          </motion.div>
        </div>

        {/* right column intentionally removed - hero background covers visual */}
      </div>
    </section>
  )
}
