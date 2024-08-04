
//import React, { useState, useEffect } from 'react';
// import './Views.css';

// export default function ViewItem ()  {
//     const [items, setItems] = useState([]);
    

//     useEffect(() => {
        
//         fetch('http://localhost:5128/api/items')
//             .then(response => response.json())
//             .then(data => {
//                 setItems(data);
//                 //setLoading(false);
//             })
//             .catch(err => {
                
//             });
//     }, []);


//     return (
//         <section className="table-container">
//             {items.length > 0 ? (
//                 <table className="full-width-table">
//                     <thead>
//                         <tr>
//                             <th>Item Code</th>
//                             <th>Item Name</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {items.map((item, index) => (
//                             <tr key={index}>
//                                 <td>{item.itemCode}</td>
//                                 <td>{item.itemName}</td>
//                                 <td>{item.price}</td>
//                                 <td>{item.qty}</td>
//                                 <td><button>Update</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <p>No items to display</p>
//             )}
//         </section>
//     );
// };

import React, { useState, useEffect } from 'react';
import './Views.css';
import UpdateItem from '../UpdateItem/UpdateItem';

export default function ViewItem() {
    const [items, setItems] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5128/api/items')
            .then(response => response.json())
            .then(data => {
                setItems(data);
            })
            .catch(err => {
                console.error('Error fetching items:', err);
            });
    }, []);

    const handleUpdateClick = (itemId) => {
        setSelectedItemId(itemId);
    };

    const handleCancelUpdate = () => {
        setSelectedItemId(null);
    };

    return (
        <section className="table-container">
            {selectedItemId ? (
                <UpdateItem itemId={selectedItemId} onCancel={handleCancelUpdate} />
            ) : (
                items.length > 0 ? (
                    <table className="full-width-table">
                        <thead>
                            <tr>
                                <th>Item Code</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.itemCode}</td>
                                    <td>{item.itemName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        <button onClick={() => handleUpdateClick(item.itemCode)}>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No items to display</p>
                )
            )}
        </section>
    );
}
