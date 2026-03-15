import { useSelector } from "react-redux"

const Sidebar = () => {
    
    // Subscribing to the Redux Global Store
    // // to specific portion of the store
    const isOpenMenu = useSelector(store=>store.app.isOpenMenu)
    return (
        <div className="w-48 shadow-lg">
            <ul>
                <li>Home</li>
                <li>Music</li>
                <li>Live</li>
                <li>Explore</li>
            </ul>
        </div>
    )
}

export default Sidebar