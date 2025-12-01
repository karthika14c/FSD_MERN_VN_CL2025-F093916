import React, { useState } from 'react'

const Question4 = () => {
    const [name, setName] = useState(" ")

  return (
    <div>
      <input type="text" placeholder="Enter Username"value={name}  onChange={(e) => setName(e.target.value)} />
      <h3>{name}</h3>
    </div>
    
  )
}

export default Question4
