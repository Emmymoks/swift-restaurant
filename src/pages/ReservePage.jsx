import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'swift_reservations'

function saveReservation(res) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    existing.push(res)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
  } catch (e) {
    console.error('Failed to save reservation', e)
  }
}

export default function ReservePage(){
  const [form, setForm] = useState({ name:'', phone:'', email:'', date:'', time:'', size:2, notes:'' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)
  const [recent, setRecent] = useState([])

  useEffect(()=>{
    try{ const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); setRecent(existing.slice(-5).reverse()) }catch(e){}
  }, [])

  function validate(){
    const err = {}
    if(!form.name.trim()) err.name = 'Name is required'
    if(!form.phone.trim()) err.phone = 'Phone is required'
    if(!form.date) err.date = 'Date is required'
    if(!form.time) err.time = 'Time is required'
    if(!form.size || form.size < 1) err.size = 'Guest size must be at least 1'
    // simple email check
    if(form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = 'Invalid email'
    // simple phone check (digits)
    if(form.phone && !/^\+?[0-9\s-]{7,15}$/.test(form.phone)) err.phone = 'Invalid phone'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  function handleChange(e){
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: name === 'size' ? parseInt(value || '0', 10) : value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!validate()) return
    const reservation = { ...form, id: Date.now(), created: new Date().toISOString() }
    saveReservation(reservation)
    setSubmitted(reservation)
    setRecent(r => [reservation, ...r].slice(0,5))
    setForm({ name:'', phone:'', email:'', date:'', time:'', size:2, notes:'' })
    setErrors({})
  }

  return (
    <section id="reserve" className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Reserve a Table</h2>
      <p className="mt-2 text-gray-600">Book a table today.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
            {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
            {errors.phone && <div className="text-red-600 text-sm mt-1">{errors.phone}</div>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
            {errors.date && <div className="text-red-600 text-sm mt-1">{errors.date}</div>}
          </div>
          <div>
            <label className="block text-sm font-medium">Time</label>
            <input type="time" name="time" value={form.time} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
            {errors.time && <div className="text-red-600 text-sm mt-1">{errors.time}</div>}
          </div>
          <div>
            <label className="block text-sm font-medium">Guest Size</label>
            <input type="number" min={1} name="size" value={form.size} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
            {errors.size && <div className="text-red-600 text-sm mt-1">{errors.size}</div>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Email (optional)</label>
          <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" />
          {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
        </div>

        <div>
          <label className="block text-sm font-medium">Notes (optional)</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} className="mt-1 block w-full border rounded px-3 py-2" rows={3} />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-nig-ochre text-white px-6 py-2 rounded-md font-semibold">Reserve</button>
          <button type="button" onClick={() => setForm({ name:'', phone:'', email:'', date:'', time:'', size:2, notes:'' })} className="border px-4 py-2 rounded-md">Reset</button>
        </div>
      </form>

      {submitted && (
        <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded">
          <div className="font-semibold">Reservation confirmed!</div>
          <div className="text-sm mt-1">{submitted.name} — {submitted.size} people on {submitted.date} at {submitted.time}</div>
        </div>
      )}

      <div className="mt-8">
        <h4 className="font-semibold">Recent reservations</h4>
        <ul className="mt-2 space-y-2">
          {recent.length === 0 && <li className="text-sm text-gray-600">No recent reservations</li>}
          {recent.map(r => (
            <li key={r.id} className="text-sm border rounded p-2 bg-white">{r.name} — {r.size} • {r.date} {r.time}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
