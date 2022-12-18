import { WhatsappIcon } from "./style"
import whatsappIcon from '../../assets/icons/whatsapp.svg'

const Whatsapp = () => {
    return (
        <WhatsappIcon href="https://wa.me/5511969284999" target='_blank'> 
            <img src={whatsappIcon} />
        </WhatsappIcon>
    )
}

export default Whatsapp