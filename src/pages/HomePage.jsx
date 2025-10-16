import React from 'react'
import Hero from '../components/Hero'
import FeaturedFood from '../components/FeaturedFood'
import Reviews from '../components/Reviews'

export default function HomePage(){
  return (
    <main>
      <Hero />
      <FeaturedFood />
      <Reviews />
    </main>
  )
}
