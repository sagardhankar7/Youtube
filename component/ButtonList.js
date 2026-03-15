import Button from "./Button"

const ButtonList = () => {
    const buttonCategory = ["All", "Gaming", "Songs", "Cricket", "Live", "LiveCricket"]
    return (
        <div className="flex mt-2.5">
            {
                buttonCategory.map((category)=>(
                    <Button key={category} name= {category} />
                ))
            }
            <Button name={"All"}/>
            <Button name={"Gaming"}/>
            <Button name={"Songs"}/>
            <Button name={"Cricket"}/>
            <Button name={"Live"}/>

        </div>
    )
}

export default ButtonList