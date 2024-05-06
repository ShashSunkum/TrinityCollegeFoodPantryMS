// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Item = () => {
    // eslint-disable-next-line no-unused-vars
    const [item, setItem] = React.useState([])
    React.useEffect(() => {
        axios.get('http://localhost:3000/auth/item').then(result => {
            if(result.data.status){
                setItem(result.data.Result);
            }
            else {
                alert(result.data.Error);
            }
        }).catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/auth/deleteItem/'+id).then(result =>{
            if(result.data.status){
                window.location.reload()
            }
            else {
                alert(result.data.Error);
            }
        })
    }

    return(
        <div className="px-5 mt-3">
            <div className="d-flex justify-content-center align-items-center">
                <h3>Item List</h3>
            </div>
            <Link to="/dashboard/addItem" className="btn btn-success">Add Item</Link>
            <div className="mt-3">
                <table className="table table-striped">
                    <thead className="thead-light">
                    <tr>
                        <th>Item Name</th>
                        <th>Item Quantity</th>
                        <th>Item Cost ($)</th>
                        <th>Item Shelf-life</th>
                        <th>Item Vendor</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        item.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.cost}</td>
                                <td>{item.shelfLife}</td>
                                <td>{item.purchasedFrom}</td>
                                <td>
                                    <Link to ={`/dashboard/editItem/`+item.id} className='btn btn-warning btn-group-sm me-2'>Edit</Link>
                                    <button className='btn btn-danger btn-group-sm'
                                            onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Item;