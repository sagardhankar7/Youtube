import { useDispatch } from "react-redux"
import { actionToggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    console.log(searchQuery)
    // dispatch an action
    const dispatch = useDispatch();
    
    const handleToggleMenu = () => {
        dispatch(actionToggleMenu())
    }
    useEffect(()=>{
        // We will make api call
        const timer = setTimeout(() => {
            getSearchSuggests()
        }, 3000);

        return()=>{
            // It is called when new useEffect called
            clearTimeout(timer)
        }
    },[searchQuery])
    const getSearchSuggests = async()=>{
        // working with CORS extenstion enable
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json = await data.json()
        console.log(json[1])
    }


    return (
        <div className="flex justify-between shadow-lg">
            <div className="flex items-center">
                <div onClick={()=>handleToggleMenu()} className="cursor-pointer">
                    <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/250px-Hamburger_icon.svg.png"></img>
                </div>
                <div>
                    <img className="w-20 h-10 object-cover" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"></img>
                </div>
            </div>
            <div className="flex items-center">
                <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="border" type="text"></input>
                <button><img className="w-10" src="https://static.vecteezy.com/system/resources/thumbnails/020/120/837/small/search-icon-simple-style-web-searching-background-symbol-search-brand-logo-design-element-search-t-shirt-printing-for-sticker-free-vector.jpg"></img></button>
            </div>
            <div>
                <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"></img>
            </div>
        </div>
    )
}

export default Header