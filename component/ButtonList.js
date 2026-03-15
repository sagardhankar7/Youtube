import Button from "./Button"

const ButtonList = () => {
    const buttonCategory = ["All", "Gaming", "Songs", "Cricket", "Live", "LiveCricket"]
    return (
        <div className="flex mt-2.5">
            {buttonCategory.map((category)=>(
                    <Button key={category} name= {category} />
                ))
            }

        </div>
    )
}

export default ButtonList