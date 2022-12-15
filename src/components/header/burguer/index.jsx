import BurguerWrapper from "./style"

const Burguer = (props) => {

    return (
        <BurguerWrapper open={props.open} onClick={props.openFunction}>
            <div />
            <div />
            <div />
        </BurguerWrapper>
    )
}

export default Burguer