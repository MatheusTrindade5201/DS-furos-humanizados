import styled from "styled-components";

const SlidesWrapper = styled.div`
    height: 300px;
    background-color: ${props => props.theme.colors.dark_bg};
    padding: 25px 15%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    .image{
        box-shadow: ${props => props.theme.colors.shadow};
        border-radius: 5px;
        width:295px;
        height: 250px
    }

    .swiper-button-next, .swiper-button-prev{
        background-color: ${props => props.theme.colors.secondary};
        padding: 6px 3px;
        color: white
    }

    @media screen and (min-width: 1274px) {
        padding: 25px 18%;
        
    }

    @media screen and (min-width: 1390px) {
        padding: 25px 326px;
        
    }

`

export default SlidesWrapper