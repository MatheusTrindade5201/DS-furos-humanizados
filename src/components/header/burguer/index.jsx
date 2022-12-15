import { useState } from "react"
import BurguerWrapper from "./style"

const Burguer = () => {

    const [open, setOpen] = useState(false)

    return (
        <BurguerWrapper open={open} onClick={() => setOpen(open === false ? true : false)}>
            <div />
            <div />
            <div />
        </BurguerWrapper>
    )
}

export default Burguer