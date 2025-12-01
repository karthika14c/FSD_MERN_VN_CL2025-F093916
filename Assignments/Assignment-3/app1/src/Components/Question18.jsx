import React, { useEffect, useState } from "react"
import axios from "axios"

const Question18 = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const usersPerPage = 5

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?limit=20")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err))
  }, [])

  const startIndex = (page - 1) * usersPerPage
  const selectedUsers = users.slice(startIndex, startIndex + usersPerPage)

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>User List</h2>

      {selectedUsers.map((user) => (
        <div
          key={user.id}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            borderRadius: "5px"
          }}
        >
          <p><strong>{user.firstName} {user.lastName}</strong></p>
          <p>Email: {user.email}</p>
        </div>
      ))}

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          style={{
            padding: "8px 16px",
            cursor: page === 1 ? "not-allowed" : "pointer"
          }}
        >
          Prev
        </button>

        <button
          disabled={page === Math.ceil(users.length / usersPerPage)}
          onClick={() => setPage(page + 1)}
          style={{
            padding: "8px 16px",
            cursor:
              page === Math.ceil(users.length / usersPerPage)
                ? "not-allowed"
                : "pointer"
          }}
        >
          Next
        </button>
      </div>

      <p style={{ marginTop: "10px" }}>
        Page {page} of {Math.ceil(users.length / usersPerPage)}
      </p>
    </div>
  );
};

export default Question18;
