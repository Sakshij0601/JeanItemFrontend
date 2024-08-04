import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Update.css';

export default function UpdateItem({ itemId, onCancel }) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        itemCode: '',
        itemName: '',
        price: '',
        qty: ''
    });

    useEffect(() => {
        // Fetch the item details when the component mounts
        axios.get(`http://localhost:5128/api/items/${itemId}`)
            .then(response => {
                const data = response.data;
                setItem(data);
                setFormData({
                    itemCode: data.itemCode,
                    itemName: data.itemName,
                    price: data.price,
                    qty: data.qty
                });
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [itemId]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.put(`http://localhost:5128/api/items/${itemId}`, formData)
            .then(() => {
                alert('Item updated successfully');
                setLoading(false);
                onCancel();
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <section className="update-form-container">
            <h2>Update Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="itemCode">Item Code:</label>
                    <input
                        type="text"
                        id="itemCode"
                        value={formData.itemCode}
                        onChange={handleChange}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="itemName">Item Name:</label>
                    <input
                        type="text"
                        id="itemName"
                        value={formData.itemName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="qty">Quantity:</label>
                    <input
                        type="number"
                        id="qty"
                        value={formData.qty}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Item</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </section>
    );
}
