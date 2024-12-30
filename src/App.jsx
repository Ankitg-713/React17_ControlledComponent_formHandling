import React, { useState } from 'react'

function App() {

  const [val, setVal] = useState({name: '', email: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <form className='w-60 h-52 items-center p-4 border border-zinc-400' action="" onSubmit={handleSubmit}>
        <input onChange={event=>setVal({...val, name: event.target.value})} className='m-2 border border-zinc-400' type="text" placeholder='Name' />
        <input onChange={event=>setVal({...val, email: event.target.value})} className='m-2 border border-zinc-400' type="email" placeholder='email' />
        <div>
          <input type="submit" className='m-2 px-3 py-2 rounded-md text-sm bg-zinc-400'/>
        </div>
      </form>
    </div>
    
  )
}

export default App