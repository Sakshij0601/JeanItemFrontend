import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

export default function ItemPriceSearch() {
  const [minPrice, setMinPrice] = useState(''); // Holds the minimum price
  const [maxPrice, setMaxPrice] = useState(''); // Holds the maximum price
  const [items, setItems] = useState([]); // Holds the search results
  const [searchPerformed, setSearchPerformed] = useState(false); // Indicates if a search has been performed

  // Function to handle the search button click
  const handleSearch = () => {
   

    axios.get(`http://localhost:5128/api/Items/priceRange?minPrice=${minPrice}&maxPrice=${maxPrice}`)
      .then(response => {
        setItems(response.data);
        setSearchPerformed(true);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        setItems([]);
        setSearchPerformed(true);
      });
  };

  return (
    <div>
      

      {/* Search inputs for price range */}
      <div>
        <label>
          Min Price:
          <input
            type="number"
            placeholder="Enter min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            placeholder="Enter max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display search results */}
      <div>
        
        {items.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Item Code</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Store Id</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.itemCode}>
                  <td>{item.itemCode}</td>
                  <td>{item.itemName}</td>
                  <td>${item.price}</td>
                  <td>{item.storeId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          searchPerformed && <p>No items found.</p>
        )}
      </div>
    </div>
  );
}
