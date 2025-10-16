import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-white/90 border-t border-b py-14">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h3 initial={{ x:-20, opacity:0 }} animate={{ x:0, opacity:1 }} className="text-2xl font-bold">About Swift Restaurant</motion.h3>
          <p className="mt-4 text-gray-700">Swift Restaurant celebrates Nigerian culinary heritage. From the party-ready jollof to soulful soups like egusi, we craft dishes using time-honored recipes and fresh local ingredients. Our staff bring Lagos warmth and hospitality. Every plate is a story.</p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>Fresh local ingredients</li>
            <li>Authentic recipes & home-cooked taste</li>
            <li>Comfortable dining & fast delivery</li>
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="https://res.cloudinary.com/dobmwndqm/image/upload/v1760629169/set-sj-LRF82Ejt530-unsplash_hmccok.jpg" alt="restaurant interior"/>
        </div>
      </div>
    </section>
  )
}
