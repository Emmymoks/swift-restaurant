import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h4 className="text-2xl font-bold">Get in touch</h4>
          <p className="mt-2 text-gray-600">For reservations, catering or general enquiries; we’d love to hear from you.</p>

          <div className="mt-6 space-y-3">
            <div><strong>Address:</strong> 12 Victoria Island, Lagos, Nigeria</div>
            <div><strong>Phone:</strong> +234 800 000 0000</div>
            <div><strong>Email:</strong> hello@swiftrestaurant.ng</div>
          </div>
        </div>
        <div>
          <form className="bg-white p-6 rounded-xl shadow">
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input className="mt-1 block w-full border rounded p-2" placeholder="Your name"/>
            </label>
            <label className="block mt-3">
              <span className="text-gray-700">Email</span>
              <input className="mt-1 block w-full border rounded p-2" placeholder="you@domain.com"/>
            </label>
            <label className="block mt-3">
              <span className="text-gray-700">Message</span>
              <textarea className="mt-1 block w-full border rounded p-2" rows="4" placeholder="Tell us about your event or reservation..."></textarea>
            </label>
            <div className="mt-4">
              <button type="button" className="bg-nig-ochre text-white px-4 py-2 rounded">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
