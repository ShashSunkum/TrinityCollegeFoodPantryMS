// eslint-disable-next-line no-unused-vars
// import React from 'react';
//
// const AddItem = () => {
//     return(
//
//         // <div className="d-flex justify-content-center align-items-center h-75">
//         //     <div className="p-3 rounded w-25 border loginForm">
//         //         <h2>Add Item</h2>
//         //         <form>
//         //             <div className="mb-3">
//         //                 <label htmlFor="category"><strong>Category:</strong></label>
//         //                 <input type="text" name="category" autoComplete="off" placeholder="Enter Category"
//         //                        className="form-control rounded-0"/>
//         //             </div>
//         //             <button className="btn btn-success w-100 rounded-0 mb-2">Add Item</button>
//         //
//         //         </form>
//         //     </div>
//         // </div>
//     )
// }
//
// export default AddItem;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddItem = () => {

    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/addItem', item).then(result =>{
            if(result.data.status){
                navigate('/dashboard/item')
            }
            else {
                alert(result.data.Error)
            }
        }).catch(error => console.log(error));
    };

    // Increment and decrement handlers for itemQuantity
    const [item, setItem] = useState({
        name:'',
        quantity:'',
        cost:'',
        shelfLife:'',
        purchasedFrom:'',
        category_id:0
    })

    const [category, setCategory] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:3000/auth/category').then(result => {
            if(result.data.status){
                setCategory(result.data.Result);
            }
            else {
                alert(result.data.Error);
            }
        }).catch(err => console.log(err));
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="p-3 rounded w-50 border" style={{ marginTop: '20px' }} >
                <h2>Add Item</h2>
                <form onSubmit={handleSubmit}>
                    {/* Item Name */}
                    <div className="mb-3">
                        <label htmlFor="itemName" className="form-label"><strong>Item Name:</strong></label>
                        <input type="text"
                               onChange={e => setItem({...item, name: e.target.value})}
                               className="form-control" placeholder="Enter Item Name" required/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="category" className="form-label"><strong>Category:</strong></label>
                        <select name="category" id="category"
                                className="form-select"
                                onChange={(e) => setItem({...item, category_id: parseInt(e.target.value, 10)})}
                        >
                            {category.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>


                    {/* Item Quantity with Increment/Decrement */}
                        <div className="mb-3">
                            <label htmlFor="itemQuantity" className="form-label"><strong>Item Quantity:</strong></label>
                            <div className="input-group">
                                <input type="number"
                                       onChange={(e) => setItem({...item, quantity: e.target.value})}
                                       className="form-control text-center"/>
                            </div>
                        </div>

                        {/* Item Cost */}
                        <div className="mb-3">
                            <label htmlFor="itemCost" className="form-label"><strong>Item Cost ($):</strong></label>
                            <input type="text"
                                   onChange={(e) => setItem({...item, cost: e.target.value})}
                                   className="form-control"
                                   placeholder="Enter Item Cost" min="0" step="0.01"/>
                        </div>

                        {/* Item Shelf Life */}
                        <div className="mb-3">
                            <label htmlFor="itemShelfLife" className="form-label"><strong>Item Shelf
                                Life:</strong></label>
                            <input type="text"
                                   onChange={(e) => setItem({...item, shelfLife: e.target.value})}
                                   className="form-control"
                                   placeholder="Enter Shelf Life"/>
                        </div>

                        {/* Item Purchased From */}
                        <div className="mb-3">
                            <label htmlFor="itemPurchasedFrom" className="form-label"><strong>Item Purchased
                                From:</strong></label>
                            <input type="text"
                                   onChange={(e) => setItem({...item, purchasedFrom: e.target.value})}
                                   className="form-control"
                                   placeholder="Enter Supplier Name"/>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-success w-100 rounded-0">Add Item</button>
                </form>
            </div>
        </div>
    );
}

export default AddItem;
