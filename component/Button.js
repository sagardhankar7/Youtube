const Button = ({name}) => {
    return (
        <div>
            <button className="bg-gray-200 px-3 py-1.5 rounded-lg mr-3 cursor-pointer">
                {name}</button>
        </div>
    )
}

export default Button