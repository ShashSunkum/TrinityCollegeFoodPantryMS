// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Category = () => {
    // eslint-disable-next-line no-unused-vars
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
    return(
        <div className="px-5 mt-3">
            <div className="d-flex justify-content-center align-items-center">
                <h3>Category List</h3>
            </div>
            <Link to="/dashboard/addCategory" className="btn btn-success">Add Category</Link>
            <div className="mt-3">
                <table className="table table-striped">
                    <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            category.map(category => (
                                <tr key={category.id}>
                                    <td>{category.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Category;