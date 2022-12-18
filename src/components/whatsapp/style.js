import styled from "styled-components";

export const WhatsappIcon = styled.a`
    position: fixed;
    bottom: 10px;
    left: 10px;
    opacity: 0.7;
    img{
        width: 50px
    }

    @media screen and (min-width: 570px){
        opacity: 1;

        img{
            width: 60px
        }
        
    }
`