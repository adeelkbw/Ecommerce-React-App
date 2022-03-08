import React from 'react'
import UserNav from '../../components/nav/UserNav'
const UserHistory = () => {
    return (
        <>
            <div className="continer-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <UserNav />
                    </div>
                    <div>User history</div>
                </div>
            </div>
        </>
    )
}

export default UserHistory