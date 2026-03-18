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
        <div className="flex justify-between shadow-lg p-2">
            <div className="flex items-center">
                <div onClick={()=>handleToggleMenu()} className="cursor-pointer">
                    <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/250px-Hamburger_icon.svg.png"></img>
                </div>
                <div>
                    <img className="w-20 h-10 object-cover" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"></img>
                </div>
            </div>
            <div className="flex items-center">
                <div className="relative">
                    <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="border border-gray-200 px-5 py-1 rounded-2xl w-80" type="text"></input>
                    <div className="absolute my-1 p-2 w-80 rounded-2xl border border-gray-200 bg-white">
                        <ul>
                            <li className="hover:bg-gray-200 px-2 rounded cursor-default">🔍Iphone</li>
                            <li className="hover:bg-gray-200 px-2 rounded cursor-default">🔍Iphone pro</li>
                            <li className="hover:bg-gray-200 px-2 rounded cursor-default">🔍Iphone pro</li>
                            <li className="hover:bg-gray-200 px-2 rounded cursor-default">🔍Iphone Pro max</li>
                            <li className="hover:bg-gray-200 px-2 rounded cursor-default">🔍Iphone Pro max</li>
                    
                        </ul>
                    </div>
                </div>
                <button><img className="w-10" src="https://static.vecteezy.com/system/resources/thumbnails/020/120/837/small/search-icon-simple-style-web-searching-background-symbol-search-brand-logo-design-element-search-t-shirt-printing-for-sticker-free-vector.jpg"></img></button>
            </div>
            
            
            <div>
                <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"></img>
            </div>
        </div>
    )
}

export default Header