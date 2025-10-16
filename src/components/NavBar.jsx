import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y:0, opacity:1 }} className="header-pattern sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-nig-ochre flex items-center justify-center text-white font-bold">SR</div>
          <div>
            <h1 className="text-lg font-semibold">Swift Restaurant</h1>
            <p className="text-xs -mt-1">The true taste of Nigeria, on your plate</p>
          </div>
        </Link>

        <div className="space-x-6 hidden md:flex items-center">
          <NavLink to="/menu" className={({isActive})=>`hover:text-nig-ochre transition focus:outline-none focus-visible:ring-2 focus-visible:ring-nig-ochre/50 px-2 ${isActive? 'text-nig-ochre font-semibold':''}`}>Menu</NavLink>
          <NavLink to="/about" className={({isActive})=>`hover:text-nig-ochre transition focus:outline-none focus-visible:ring-2 focus-visible:ring-nig-ochre/50 px-2 ${isActive? 'text-nig-ochre font-semibold':''}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>`hover:text-nig-ochre transition focus:outline-none focus-visible:ring-2 focus-visible:ring-nig-ochre/50 px-2 ${isActive? 'text-nig-ochre font-semibold':''}`}>Contact</NavLink>
          <NavLink to="/reserve" className="bg-nig-ochre text-white px-4 py-2 rounded-md shadow hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white">Reserve</NavLink>
        </div>

        <div className="md:hidden">
          <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)} className="p-2 text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-nig-ochre">{open ? '✕' : '☰'}</button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-md md:hidden">
            <div className="px-6 py-4 flex flex-col space-y-3">
              <NavLink onClick={() => setOpen(false)} to="/" className="py-2">Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/menu" className="py-2">Menu</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className="py-2">About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className="py-2">Contact</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/reserve" className="py-2 bg-nig-ochre text-white px-4 py-2 rounded-md inline-block">Reserve</NavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
