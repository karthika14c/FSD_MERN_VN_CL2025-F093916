import React from 'react'
import Question7child from './Question7child'

const Question7 = () => {
  const showAlert = () => {
    alert("Button clicked from Child!")
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <Question7child callAlert={showAlert} />
    </div>
  )
}


export default Question7
