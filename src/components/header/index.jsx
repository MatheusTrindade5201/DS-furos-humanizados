import { useState } from "react"
import Burguer from "./burguer"
import { HeaderWrapper, Logo, MobileNav } from "./style"

const Header = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <HeaderWrapper>
            <Logo />
            <MobileNav open={open}>
                <ul>
                    <li>O que é?</li>
                    <li>Tipos de piercings</li>
                    <li>Bibliografia</li>
                </ul>
            </MobileNav>
            <Burguer open={open} openFunction={() => setOpen(open === false ? true : false)}/>
        </HeaderWrapper>
    )
}

export default Header