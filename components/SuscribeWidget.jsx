import React, { useState } from 'react'

const SuscribeWidget = () => {
  const [email, setEmail] = useState('')

  const handleSuscribe = () => {
    console.log(email)
  }

  return (
    <form
      className="mx-auto mb-4 flex w-full flex-row"
      onSubmit={handleSuscribe}
    >
      <input
        type="text"
        className="mr-0.5 w-full rounded-l-sm border-0 bg-[#24272b] px-4 py-3 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-[#ffc843]"
        placeholder="Suscribe to our newsletter"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="rounded-r-sm bg-[#24272b] px-6 py-3 font-semibold uppercase text-white hover:bg-[#ffc843]">
        Suscribe
      </button>
    </form>
  )
}

export default SuscribeWidget
