// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [adminTotal,setAdminTotal] = useState(0)
    const [itemTotal,setItemTotal] = useState(0)
    const [costTotal,setCostTotal] = useState(0)
    const [admins, setAdmins] = useState([])

    useEffect(() => {
        adminCount();
        itemCount();
        costCount();
        adminRecords();
    }, [])

    const adminCount = () =>{
        axios.get('http://localhost:3000/auth/adminCount').then(result => {
            console.log(result)
            if(result.data.status){
                setAdminTotal(result.data.Result[0].admin)
            }
        })
    }
    const costCount = () =>{
        axios.get('http://localhost:3000/auth/costCount').then(result => {
            console.log(result)
            if(result.data.status){
                setCostTotal(result.data.Result[0].costOfItem)
            }
        })
    }
    const itemCount = () =>{
        axios.get('http://localhost:3000/auth/itemCount').then(result => {
            console.log(result)
            if(result.data.status){
                setItemTotal(result.data.Result[0].item)
            }
        })
    }

    const adminRecords = () =>{
        axios.get('http://localhost:3000/auth/adminRecords').then(result => {
            console.log(result)
            if(result.data.status){
                setAdmins(result.data.Result)
            }
            else {
                alert(result.data.Error)
            }
        })
    }
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-around mt-3">
                <div className="card px-3 pt-4 pb-4 border shadow-sm w-25"
                     style={{borderRadius: '20px', backgroundColor: '#f9f9f9'}}>
                    <div className="text-center pb-2">
                        <h4 style={{fontWeight: '600'}}>Admin</h4>
                    </div>
                    <hr/>
                    <div className="text-lg-center">
                        <h5>Total: {adminTotal}</h5>
                    </div>
                </div>

                <div className="card px-3 pt-4 pb-4 border shadow-sm w-25"
                     style={{borderRadius: '20px', backgroundColor: '#f9f9f9'}}>
                    <div className="text-center pb-2">
                        <h4 style={{fontWeight: '600'}}>Distinct Items</h4>
                    </div>
                    <hr/>
                    <div className="text-lg-center">
                        <h5>Total: {itemTotal} items</h5>
                    </div>
                </div>

                <div className="card px-3 pt-4 pb-4 border shadow-sm w-25"
                     style={{borderRadius: '20px', backgroundColor: '#f9f9f9'}}>
                    <div className="text-center pb-2">
                        <h4 style={{fontWeight: '600'}}>Total Cost of All Items</h4>
                    </div>
                    <hr/>
                    <div className="text-lg-center">
                        <h5>Total: ${costTotal}</h5>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-8">
                    <h3>List of Admins</h3>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name & Position</th>
                        </tr>
                        </thead>
                        <tbody>
                        {admins.map((admin, index) => (
                            <tr key={admin.id || index}> {/* Use admin.id if available, otherwise fall back to index */}
                                <td>{admin.email}</td>
                                <td>
                                    {/*<button className='btn btn-warning btn-sm me-2'>Edit</button>*/}
                                    {/*<button className='btn btn-danger btn-sm'>Delete</button>*/}
                                    Hayley Berliner - Food'N Stuff Pantry Manager
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;