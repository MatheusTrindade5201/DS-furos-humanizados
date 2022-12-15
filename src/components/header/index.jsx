import { useState } from "react"
import Burguer from "./burguer"
import { HeaderWrapper, Logo } from "./style"

const Header = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <HeaderWrapper>
            <Logo />
            <Burguer open={open} openFunction={() => setOpen(open === false ? true : false)}/>
        </HeaderWrapper>
    )
}

export default Header