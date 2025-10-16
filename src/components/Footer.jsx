import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between">
        <div>
          <h5 className="font-bold">Swift Restaurant</h5>
          <p className="text-sm">The true taste of Nigeria, on your plate</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          <div>© {new Date().getFullYear()} Swift Restaurant. All rights reserved.</div>
          <div className="mt-2">Follow us: Instagram · Facebook · X</div>
        </div>
      </div>
    </footer>
  )
}
