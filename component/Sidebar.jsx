import { useSelector } from "react-redux"
import { Link } from "react-router"

const Sidebar = () => {
    
    // Subscribing to the Redux Global Store
    // // to specific portion of the store
    const isOpenMenu = useSelector(store=>store.app.isOpenMenu)
    // early return
    if(!isOpenMenu) return null
    return (
        <div className="w-48 shadow-lg">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Music</li>
                <li>Live</li>
                <li>Explore</li>
            </ul>
        </div>
    )
}

export default Sidebar