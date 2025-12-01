import React from 'react'

const Question1 = () => {
  const student = [
    { name: "Arthi", dept: "CSE", year: 3 },
    { name: "Karan", dept: "ECE", year: 2 },
    { name: "Karthi", dept: "IT", year: 1 },
    { name: "Pooja", dept: "Mech", year: 4 }
  ];

  return (
    <>
      {student.map((s, i) => (
        <div key={i}>
          <div className="card" style={{ width: "18rem", border:'5px'}}>
            <div className="card-header">Student</div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">{s.name}</li>
              <li className="list-group-item">{s.dept}</li>
              <li className="list-group-item">{s.year}</li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Question1;
