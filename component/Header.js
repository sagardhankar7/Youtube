const Header = () => {
    return (
        <div className="flex justify-between shadow-lg">
            <div className="flex items-center">
                <div>
                    <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/250px-Hamburger_icon.svg.png"></img>
                </div>
                <div>
                    <img className="w-20 h-10 object-cover" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"></img>
                </div>
            </div>
            <div className="flex items-center">
                <input className="border" type="text"></input>
                <button><img className="w-10" src="https://static.vecteezy.com/system/resources/thumbnails/020/120/837/small/search-icon-simple-style-web-searching-background-symbol-search-brand-logo-design-element-search-t-shirt-printing-for-sticker-free-vector.jpg"></img></button>
            </div>
            <div>
                <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"></img>
            </div>
        </div>
    )
}

export default Header