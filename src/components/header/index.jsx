import Burguer from "./burguer"
import { HeaderWrapper, Logo } from "./style"

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Burguer open={props.open}/>
        </HeaderWrapper>
    )
}

export default Header