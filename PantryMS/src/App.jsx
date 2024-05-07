import './App.css'
import 'bootstrap/dist/css/bootstrap.rtl.css'
import Login from "./Components/Login.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import Item from "./Components/Item.jsx";
import Category from "./Components/Category.jsx";
import Profile from "./Components/Profile.jsx";
import AddCategory from "./Components/AddCategory.jsx";
import AddItem from "./Components/AddItem.jsx";
import EditItem from "./Components/EditItem.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/adminlogin" element={<Login />}></Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path='' element={<Home />}></Route>
                    <Route path='/dashboard/item' element={<Item />}></Route>
                    <Route path='/dashboard/category' element={<Category />}></Route>
                    <Route path='/dashboard/profile' element={<Profile />}></Route>
                    <Route path='/dashboard/addCategory' element={<AddCategory />}></Route>
                    <Route path='/dashboard/addItem' element={<AddItem />}></Route>
                    <Route path='/dashboard/editItem/:id' element={<EditItem />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App