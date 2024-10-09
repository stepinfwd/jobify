
import React from 'react'
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div>
            <h2>HomeLayout</h2>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default HomeLayout