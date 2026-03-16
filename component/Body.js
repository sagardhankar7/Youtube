import { Outlet } from "react-router";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Body = () => {
    return (
        <div className="flex">
            <Sidebar />
            {/* Component Switch based on Route */}
            <Outlet />
        </div>
    )
}

export default Body;