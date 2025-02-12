import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';
export default function ItemcodeSearch () {
  const [searchTerm, setSearchTerm] = useState(''); // Holds the search term
  const [items, setItems] = useState([]); // Holds the search results
  const [searchPerformed, setSearchPerformed] = useState(false); // Indicates if a search has been performed

  // Function to handle the search button click
  const handleSearch = () => {
    // if (searchTerm.trim() === '') {
    //   // Don't perform the search if the search term is empty
    //   return;
    // }

    axios.get(`http://localhost:5128/api/items/Code/${searchTerm}`)
      .then(response => {
        setItems(response.data);
        setSearchPerformed(true);
      })
      .catch(error => {
        
        setItems([]);
        setSearchPerformed(true);
      });
  };

  return (
    <div>
     

      {/* Search input */}
      <div>
        <input
          type="text"
          placeholder="Enter item code"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
};


