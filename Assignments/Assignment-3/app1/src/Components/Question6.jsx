import React from 'react'

const Question6 = () => {
    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mouse", price: 800 },
        { id: 3, name: "Keyboard", price: 1500 }
    ]

    return (
        <div>
            <table class="table table-dark table-striped-columns" >
                <thead >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead >
                <tbody>
                    {products.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Question6
