import Button from "./Button"

const ButtonList = () => {
    return (
        <div className="flex mt-2.5">
            <Button name={"All"}/>
            <Button name={"Gaming"}/>
            <Button name={"Songs"}/>
            <Button name={"Cricket"}/>
            <Button name={"Live"}/>

        </div>
    )
}

export default ButtonList