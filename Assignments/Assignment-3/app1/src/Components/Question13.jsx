import React, { useState } from 'react'


const Question13 = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"])
  const [newFruit, setNewFruit] = useState("")

  const handleAddFruit = (e) => {
    e.preventDefault()
    if (newFruit.trim() === "") return
    setFruits([...fruits, newFruit.trim()])
    setNewFruit("")
  }
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Fruit List</h2>

      <form onSubmit={handleAddFruit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter fruit name"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          style={{ padding: "8px", marginRight: "10px", borderRadius: "4px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
          }}
        >
          Add Fruit
        </button>
      </form>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default Question13
