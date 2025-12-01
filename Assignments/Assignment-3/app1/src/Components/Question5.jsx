import React, { useState } from 'react'

const Question5 = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [submittedData, setSubmittedData] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittedData({
            name: name,
            email: email,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br /><br />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>


            {submittedData && (
                <div>
                    <h3>Name: {submittedData.name}</h3>
                    <h3>Email: {submittedData.email}</h3>
                </div>
            )}
        </div>
    );
};
export default Question5
