// eslint-disable-next-line no-unused-vars
import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddCategory = () => {
    // eslint-disable-next-line no-unused-vars
    const [category, setCategory] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/addCategory', {category}).then(result =>{
            if(result.data.status){
                navigate('/dashboard/category')
            }
            else {
                alert(result.data.Error)
            }
        } ).catch(err => console.log({err}))
    }
    return (
        <div className="d-flex justify-content-center align-items-center h-75">
            <div className="p-3 rounded w-25 border loginForm">
                <h2>Add Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="category"><strong>Category:</strong></label>
                        <input type="text"  name="category" autoComplete="off" placeholder="Enter Category"
                               onChange={(e) => setCategory(e.target.value)}
                               className="form-control rounded-0"/>
                    </div>
                    <button className="btn btn-success w-100 rounded-0 mb-2">Add Category</button>

                </form>
            </div>
        </div>
    )
}

export default AddCategory;