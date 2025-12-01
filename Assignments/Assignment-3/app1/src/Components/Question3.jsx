import React from 'react'


const Question3 = ({ name, role, image }) => {

  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name} style={{width: "100%", height: "250px",objectFit: "cover",     
          borderRadius: "8px",
          padding: "10px"
        }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{role}</p>
      </div>
    </div>
  );
};

export default Question3

