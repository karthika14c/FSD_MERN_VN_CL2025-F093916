import React, { useState } from 'react'

const Question9 = () => {
  const students = [
    { name: "Arun", dept: "CSE" },
    { name: "Divya", dept: "ECE" },
    { name: "Karthi", dept: "IT" },
    { name: "Prakash", dept: "Mech" },
    { name: "Riya", dept: "CSE" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Student Search</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <li key={index}>
              {student.name} ({student.dept})
            </li>
          ))
        ) : (
          <li>No matching students found.</li>
        )}
      </ul>
    </div>
  );
};
export default Question9
