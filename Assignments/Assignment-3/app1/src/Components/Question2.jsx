import React, { useState } from 'react'

const Question2 = () => {
    const isLoggedIn = true

  return (
    <div>
      {isLoggedIn ? <h2>Welcomes back!</h2> : <h2>Please log in</h2>}
    </div>
  )
}

export default Question2
