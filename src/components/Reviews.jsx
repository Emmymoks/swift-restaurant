import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  { id:1, name:'Adaeze', text: 'The jollof brought tears of joy. perfectly seasoned and smoky.' },
  { id:2, name:'Chinedu', text: 'Suya was spicy and tender. Best I have had outside Lagos.' },
  { id:3, name:'Fatima', text: 'Friendly staff and quick service. The beans & dodo was comforting.' },
  { id:4, name:'Emeka', text: 'Authentic flavors and great ambience. highly recommend the egusi.' },
  { id:5, name:'Ngozi', text: 'Fantastic value and portion sizes. Loved the plantain sides.' },
  { id:6, name:'Tunde', text: 'Amazing cocktails and a cozy atmosphere. Will come back.' },
  { id:7, name:'Aisha', text: 'Staff were so welcoming. food arrived piping hot and delicious.' },
  { id:8, name:'Ibrahim', text: 'Perfect for family dinners. The ofada rice was a highlight.' },
  { id:9, name:'Kemi', text: 'Desserts were delightful. Puff Puff is a must-try.' },
  { id:10, name:'Olu', text: 'Fast delivery and the taste held up. Very impressed.' },
  { id:11, name:'Zainab', text: 'Flavors were bold and memorable. Best in the city.' },
  { id:12, name:'Michael', text: 'Great presentation, attentive staff and delicious mains.' }
]

export default function Reviews(){
  const [page, setPage] = useState(0)
  const perPage = 3
  const totalPages = Math.ceil(reviews.length / perPage)

  useEffect(() => {
    const id = setInterval(() => setPage(p => (p + 1) % totalPages), 4500)
    return () => clearInterval(id)
  }, [totalPages])

  const start = page * perPage
  const visible = reviews.slice(start, start + perPage)

  return (
    <section className="bg-white/90 border-t py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-center">Customer Reviews</h3>
        <p className="text-center text-gray-600 mt-2">Real feedback from happy customers.</p>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div key={page} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:0.6 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map(r => (
                <div key={r.id} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-yellow-400">★★★★★</div>
                  </div>
                  <p className="mt-2 text-gray-700">{r.text}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
