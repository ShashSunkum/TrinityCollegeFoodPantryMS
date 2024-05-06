// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditEmployee = () => {
    // eslint-disable-next-line no-unused-vars
    const {id} = useParams()
    const [item, setItem] = useState({
        name:'',
        quantity:'',
        cost:'',
        shelfLife:'',
        purchasedFrom:'',
        category_id:0
    })
    // eslint-disable-next-line no-unused-vars
    const [itemQuantity, setItemQuantity] = useState(0);
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
        // eslint-disable-next-line no-unused-vars
        axios.get('http://localhost:3000/auth/item/'+id).then(result =>{
            setItem({
                ...item,
                name: result.data.Result[0].name,
                quantity: result.data.Result[0].quantity,
                cost: result.data.Result[0].cost,
                shelfLife: result.data.Result[0].shelfLife,
                purchasedFrom: result.data.Result[0].purchasedFrom,
                category_id: result.data.Result[0].category_id,
            })
            console.log(result.data)

        }).catch(error => console.log(error))
    }, []);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3000/auth/editItem/" +id, item).then(result => {
            if(result.data.status){
                navigate('/dashboard/item')
            }
            else {
                alert(result.data.Error);
            }
        }).catch(error => console.log(error))
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="p-3 rounded w-50 border" style={{marginTop: '20px'}}>
                <h2>Edit Item</h2>
                <form onSubmit={handleSubmit}>
                    {/* Item Name */}
                    <div className="mb-3">
                        <label htmlFor="itemName" className="form-label"><strong>Item Name:</strong></label>
                        <input type="text"
                               value={item.name}
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
                                   value={item.quantity}
                                   onChange={(e) => setItem({...item, quantity: e.target.value})}
                                   className="form-control text-center"/>
                        </div>
                    </div>

                    {/* Item Cost */}
                    <div className="mb-3">
                        <label htmlFor="itemCost" className="form-label"><strong>Item Cost ($):</strong></label>
                        <input type="text"
                               value={item.cost}
                               onChange={(e) => setItem({...item, cost: e.target.value})}
                               className="form-control"
                               placeholder="Enter Item Cost" min="0" step="0.01"/>
                    </div>

                    {/* Item Shelf Life */}
                    <div className="mb-3">
                        <label htmlFor="itemShelfLife" className="form-label"><strong>Item Shelf
                            Life:</strong></label>
                        <input type="text"
                               value={item.shelfLife}
                               onChange={(e) => setItem({...item, shelfLife: e.target.value})}
                               className="form-control"
                               placeholder="Enter Shelf Life"/>
                    </div>

                    {/* Item Purchased From */}
                    <div className="mb-3">
                        <label htmlFor="itemPurchasedFrom" className="form-label"><strong>Item Purchased
                            From:</strong></label>
                        <input type="text"
                               value={item.purchasedFrom}
                               onChange={(e) => setItem({...item, purchasedFrom: e.target.value})}
                               className="form-control"
                               placeholder="Enter Supplier Name"/>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-success w-100 rounded-0">Edit Item</button>
                </form>
            </div>
        </div>
    )
}

export default EditEmployee