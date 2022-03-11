import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
    return (
        <>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to='/admin/dashboard' className='nav-link'>Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to='/admin/produts' className='nav-link'>Products</Link>
                </li>
                <li className="nav-item">
                    <Link to='/admin/proddut' className='nav-link'>Product</Link>
                </li>

                <li className="nav-item">
                    <Link to='/admin/category' className='nav-link'>Category</Link>
                </li>

                <li className="nav-item">
                    <Link to='/admin/coupon' className='nav-link'>Coupon</Link>
                </li>
                <li className="nav-item">
                    <Link to='/admin/sub' className='nav-link'>Sub Category</Link>
                </li>
                <li className="nav-item">
                    <Link to='/user/password' className='nav-link'>Password Reset</Link>
                </li>
            </ul>

        </>
    )
}

export default AdminNav