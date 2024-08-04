import './Add.css';
import { useState } from 'react';
import axios from 'axios';

export default function AddItem() {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [storeId, setId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Create item object
        const newItem = {
            itemCode: code,
            itemName: name,
            price: parseFloat(price),
            qty: parseInt(qty, 10),
            storeId: storeId
        };

        // Make the POST request to add the item
        axios.post('http://localhost:5128/api/Items', newItem)
            .then(response => {
                alert("Item added successfully");
                // Clear the form fields
                setCode('');
                setName('');
                setPrice('');
                setQty('');
                setId('');
            })
            .catch(error => {
                console.error('Error adding item:', error);
                alert("Error adding item");
            });
    };

    return (
        <div className="item-form">
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="itemCode">Item Code:</label>
                    <input
                        type="text"
                        id="itemCode"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="itemName">Item Name:</label>
                    <input
                        type="text"
                        id="itemName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        min="0"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="store id">Store Id:</label>
                    <input
                        type="text"
                        id="store id"
                        value={storeId}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}
